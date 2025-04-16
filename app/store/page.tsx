import {Pagination, ProductCard} from "@/public/components";

export interface IProduct{
    id: string,
    image: string,
    title: string,
    description:string,
    price: number,
    qty?: number,
}

 interface IListProducts{
   data:IProduct[];
     first:number;
     items: number|null
     last:number
     next: number
     pages:number
     prev: number|null
}

interface IStoreProps{
    params:Promise<{}>
    searchParams:Promise<{
        _page:string
        _per_page:string
    }>
}

const Store =async (props:IStoreProps) => {

    const page=(await props.searchParams)._page??"1"
    const per_page=(await props.searchParams)._per_page??"5"

    const getData=await props.searchParams

   const result=await fetch(`http://localhost:9000/products?_page=${page}&_per_page=${per_page}`)
    const productsData = await result.json() as IListProducts;
    console.log("productsData", productsData)

    return (
        <div className="px-4 md:px-16 mx-auto">

            <h1 className=" font-bold text-lg my-8 ">محصولات فروشگاه ما</h1>

            <div className="grid gap-4 pb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 ">
                {
                    productsData.data.map((product) =>
                        <ProductCard key={product.id} {...product} />)
                }
            </div>
            <Pagination pages={productsData.pages} />
        </div>
    );
};
export default Store
