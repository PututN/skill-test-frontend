import React from "react";
import Header from "@/components/Header";
import {
  useGetAllToDoQuery,
  useGetPaginationQuery,
} from "@/redux/services/apiSlice";
import Table from "react-bootstrap/Table";
import Link from "next/link";
import BackToIndex from "@/components/BackToIndex";

//type definition
interface dataToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
function FetchData() {
  const { data } = useGetAllToDoQuery(null);
  const [page, setPage] = React.useState(0);
  const { data: dataPagination } = useGetPaginationQuery(page);
  //Button Pagination
  const handlingPrev = () => {
    setPage(page - 10);
  };
  const nextPage = () => {
    setPage(page + 10);
  };
  return (
    <>
      <Header />
      <div className="px-3 py-5">
        <h1>Halaman Fetching menggunakan RTK Query Dan Pagination</h1>
        {dataPagination ? (
          <div className="flex flex-col">
            {" "}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dataPagination.map((item: dataToDo) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>
                        {item.completed === false ? (
                          <div>Not Completed</div>
                        ) : (
                          <div>Completed</div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="flex justify-around items-center">
              {page <= 0 ? (
                <button
                  className="p-3 rounded-lg w-1/5"
                  onClick={handlingPrev}
                  disabled={true}
                >
                  Previous
                </button>
              ) : (
                <button
                  className="btn-primary p-3 rounded-lg w-1/5"
                  onClick={handlingPrev}
                >
                  Previous
                </button>
              )}
              <div>{page === 0 ? "1" : page / 10 + 1}</div>
              {page / 10 >= data?.length / 10 - 1 ? (
                <button
                  className="p-3 rounded-lg w-1/5"
                  onClick={nextPage}
                  disabled
                >
                  Next
                </button>
              ) : (
                <button
                  className="btn-primary p-3 rounded-lg w-1/5"
                  onClick={nextPage}
                >
                  Next
                </button>
              )}
            </div>
            <BackToIndex />{" "}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default FetchData;
