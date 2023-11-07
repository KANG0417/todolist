import React from "react";

function CheckedButton({ data }) {
  return (
    <>
      <button>{data.isDone ? "취소" : "완료"}</button>
    </>
  );
}

export default CheckedButton;
