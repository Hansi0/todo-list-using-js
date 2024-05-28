import React, { useState } from "react";
function TodoItem(props) {
  const [ischange, setchange] = useState(false);
  function handlechange() {
    setchange((prevvalue) => {
      return !prevvalue;
    });
  }

  return (
    <div className="list" onClick={handlechange}>
      <li style={{ textDecoration: ischange ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default TodoItem;
