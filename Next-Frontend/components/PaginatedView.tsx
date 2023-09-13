"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ListViewCard } from "./FeaturedQuestions/FeaturedQuestions";
import Link from "next/link";
import { NotesType } from "./ProblemsListView/ProblemListView";
type Props = {
  itemPerPage: number;
  items: object[];
};

function Items({ currentItems }: any) {
  return (
    <div className="m-4 p-2 rounded-lg flex flex-col  justify-start items-start gap-4 overflow-hidden relative w-full ">
      {currentItems &&
        currentItems.map((item: any, index: any) => {
          return (
            <Link href={`/${item.category.title}/${item.id}`} passHref>
              <ListViewCard
                Title={item.title}
                Category={item.category.title}
                description={item.detailNote}
              />
            </Link>
          );
        })}
    </div>
  );
}

function PaginatedView({ itemPerPage, items }: Props) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" > "
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel=" < "
        renderOnZeroPageCount={null}
        containerClassName="flex flex-row justify-center items-center gap-4 bg-white  overflow-hidden"
        pageClassName="p-2 bg-orange-300 rounded-md "
        previousClassName="p-2 bg-orange-500 rounded-md"
        nextClassName="p-2 bg-orange-500 rounded-md"
        activeClassName="bg-white p-4 shadow-md shadow-slate-500"
      />
    </>
  );
}

export default PaginatedView;
