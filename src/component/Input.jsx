import React, { useState } from "react";
import ApplyButton from "../button/ApplyButton";
import RemoveButton from "../button/RemoveButton";
import CheckedButton from "../button/CheckedButton";

function Input() {
  const UUID = crypto.randomUUID();
  const [titleQuery, setTitleQuery] = useState("");
  const [contentQuery, setContentQuery] = useState("");

  const initalState = {
    id: UUID,
    title: titleQuery,
    content: contentQuery,
    isDone: false,
  };

  const [todo, setTodo] = useState([]);
  const working = todo.filter((data) => !data.isDone);
  const done = todo.filter((data) => data.isDone);
  const inputTitle = (event) => {
    const titleQuery = event.target.value;

    setTitleQuery(titleQuery);
  };

  const inputContent = (event) => {
    const contentQuery = event.target.value;

    setContentQuery(contentQuery);
  };

  const applyclickButtonHandler = () => {
    alert("등록되었습니다");
    setTodo([...todo, initalState]);
    console.log(todo);
    setTitleQuery("");
    setContentQuery("");
  };

  return (
    <div>
      제목: <input type="text" value={titleQuery} onChange={inputTitle} />
      내용: <input type="text" value={contentQuery} onChange={inputContent} />
      <ApplyButton applyFunc={applyclickButtonHandler} />
      <div>
        <h2>할일</h2>
        {working.map((data) => {
          return (
            <div key={data.id}>
              <p>{data.title}</p>
              <p>{data.content}</p>
              <CheckedButton data={data} />
              <RemoveButton data={data} />
            </div>
          );
        })}
      </div>
      <div>
        <h2>완료</h2>
        {done.map((data) => {
          return (
            <div key={data.id}>
              <p>{data.title}</p>
              <p>{data.content}</p>
              <CheckedButton data={data} />
              <RemoveButton data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Input;
