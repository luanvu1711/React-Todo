import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="list">
      {props.list.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;


