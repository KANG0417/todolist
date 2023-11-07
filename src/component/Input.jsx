import React, { useState } from "react";
import ApplyButton from "../button/ApplyButton";
import RemoveButton from "../button/RemoveButton";
import CheckedButton from "../button/CheckButton";

function Input() {
  const [titleQuery, setTitleQuery] = useState("");
  const [contentQuery, setContentQuery] = useState("");
  const [todo, setTodo] = useState(initalState);
  const working = todo.filter((data) => !data.isDone);
  const done = todo.filter((data) => !data.isDone);

  const initalState = {
    id: UUID,
    title: titleQuery,
    content: contentQuery,
    isDone: false,
  };

  const UUID = crypto.randomUUID();

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

    setTodo(todo);
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
            <div>
              <p>{data.title}</p>
              <p>{data.content}</p>
              <CheckedButton />
              <RemoveButton />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Input;
