import React from "react";
import Header from "../components/Header";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import BackToIndex from "@/components/BackToIndex";

interface dataToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data: dataToDo[] = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default function halamanssr({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header />
      <div className="px-3 py-5">
        <h1>Render halaman todo menggunakan strategy SSR</h1>
        {data ? (
          <div className="flex flex-col">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: dataToDo) => {
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
            <BackToIndex />{" "}
          </div>
        ) : null}
      </div>
    </>
  );
}
