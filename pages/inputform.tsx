import React from "react";
import Header from "../components/Header";
import BackToIndex from "@/components/BackToIndex";
import { Table } from "react-bootstrap";

interface dataToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function InputForm() {
  // console.log(e.target.title.value);
  const [toDo, setToDo] = React.useState([]);
  const [success, setSuccess] = React.useState("");
  const [failed, setFailed] = React.useState("");
  const [loading, setLoading] = React.useState("");
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setToDo(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (e.target.title.value) {
      setLoading("Loading..");
      await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          title: e.target.title.value,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.status !== 201) {
            return;
          } else {
            return res.json();
          }
        })
        .then((data) => {
          // console.log(data)
          setToDo((toDo): any => [...toDo, data]);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading("");
      setSuccess("Add to do successfully!");
      setTimeout(() => {
        setSuccess("");
        e.target.title.value = "";
      }, 3000);
    } else {
      setFailed("Please input Title!");
      setTimeout(() => {
        setFailed("");
      }, 3000);
    }
  };
  console.log(success);
  return (
    <>
      <Header />
      <div className="px-3 py-5 flex flex-col">
        <h1>Halaman form input todo</h1>
        <form onSubmit={handleSubmit} className="w-full mt-5 flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-1/6 mr-5">
              <label
                className="block text-gray-500 font-bold text-center mb-1 pr-4 mr-5"
                htmlFor="title"
              >
                Title
              </label>
            </div>
            <div className="w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="title"
                type="text"
                placeholder="Add title..."
                name="title"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-3">
            <button
              onSubmit={handleSubmit}
              className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add To Do
            </button>
            {success && (
              <div className="w-full bg-green-400 text-center text-white rounded-lg font-bold p-2">
                {success}
              </div>
            )}
            {failed && (
              <div className="w-full bg-red-400 text-center text-white rounded-lg font-bold p-2">
                {failed}
              </div>
            )}
            {loading && (
              <div className="w-full bg-yellow-300 text-center text-white rounded-lg font-bold p-2">
                {loading}
              </div>
            )}
          </div>
        </form>
        {toDo ? (
          <div className="flex flex-col mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {toDo.map((item: dataToDo) => {
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
          </div>
        ) : null}

        <BackToIndex />
      </div>
    </>
  );
}

export default InputForm;
