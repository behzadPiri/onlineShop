"use client"

import ReactPaginate from "react-paginate";
import {useRouter, useSearchParams} from "next/navigation";

const Pagination = ({pages}: { pages: number }) => {

    const router = useRouter();
    const searchParams=useSearchParams()


    const handlePageClick = (e: { selected: number }) => {
        const selectedPage = e.selected + 1
        const params = new URLSearchParams(searchParams.toString());
        params.set("_page", selectedPage.toString());
        params.set("_limit", "5");
        window.scroll({top: 0, left: 0, behavior: "smooth"})
        router.push(`/store?${params.toString()}`);
    }

    return (
        <div>
            <ReactPaginate
                className="flex my-4 items-center justify-center py-2"
                containerClassName={"flex items-center justify-center py-2 text-grey-50 "}
                activeLinkClassName={"bg-sky-500 w-8 h-8 rounded text-white flex items-center justify-center transition-colors"}
                pageLinkClassName={"bg-gray-400 mx-1 w-8 h-8 rounded text-white cursor-pointer flex items-center justify-center transition-colors"}
                breakClassName={"text-black mx-1"}
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pages}
                previousLabel=""
                renderOnZeroPageCount={null}
            />
        </div>
    );
};
export default Pagination
