import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export const Page = (props) => {
  const {totalPage, page, handlePageChange  } = props
  return (
    <Pagination
      className="my-3"
      count={totalPage}
      page={page}
      siblingCount={1}
      boundaryCount={1}
      variant="outlined"
      shape="rounded"
      onChange={handlePageChange}
    />
  );
};
