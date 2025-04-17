import {Pagination, ProductCard} from "@/public/components";

export interface IProduct{
    id: string,
    image: string,
    title: string,
    description:string,
    price: number,
    qty?: number,
}

interface IStoreProps{
    params:Promise<{}>
    searchParams:Promise<{
        _page:string
        _limit:string,
        title_like:string
    }>
}

const Store =async (props:IStoreProps) => {

    const page=(await props.searchParams)._page??"1"
    const limit=(await props.searchParams)._limit??"5"
    const title_like=(await props.searchParams).title_like??""

   const result=await fetch(`http://localhost:9000/products?_page=${page}&_limit=${limit}&title_like=${title_like}`)
    const productsData = await result.json() as IProduct[];

    const totalCount = result.headers.get('x-total-count') as any;
    const totalPages = Math.ceil(totalCount / 5);


    return (
        <div className="px-4 md:px-16 mx-auto">

            <h1 className=" font-bold text-lg my-8 ">محصولات فروشگاه ما</h1>

            <div className="grid gap-4 pb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 ">
                {
                    productsData.map((product) =>
                        <ProductCard key={product.id} {...product} />)
                }
            </div>
            <Pagination pages={totalPages} />
        </div>
    );
};
export default Store
