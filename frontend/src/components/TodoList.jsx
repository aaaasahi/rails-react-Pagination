import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Page } from "./Pagination";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getTodo = () => {
    axios
      .get("http://localhost:8000/todos", {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setTodos(response.data.todos);
        setTotalPage(response.data.kaminari.pagenation.pages);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTodo();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="list row">
      <div className="col-md-8">
      </div>
      <div className="col-md-10">
        <h4>Todo List</h4>
        <Page
          totalPage={totalPage}
          page={page}
          handlePageChange={handlePageChange}
        />
        <ul className="list-group">
          {todos.map((todo, index) => (
            <Link to={`/todos/${todo.id}`}>
              <li className={"list-group-item "} key={index}>
                {todo.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
