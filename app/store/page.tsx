import {ProductCard} from "@/public/components";

export interface IProduct{
    id: string,
    image: string,
    title: string,
    description:string,
    price: number,
    qty?: number,
}


const Store =async () => {

   const result=await fetch("http://localhost:9000/products")
    const products = await result.json() as IProduct[];

    return (
        <div className="px-4 md:px-16 mx-auto">

            <h1 className=" font-bold text-lg my-8 ">محصولات فروشگاه ما</h1>

            <div className="grid gap-4 pb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6 ">
                {
                    products.map((product) =>
                        <ProductCard key={product.id} {...product} />)
                }
            </div>
        </div>
    );
};
export default Store
