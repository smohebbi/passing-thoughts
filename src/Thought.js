import React, { useEffect } from "react";

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      // alert('Time has passed!');
      removeThought(thought.id);
    }, 5000)
    return () => clearTimeout(timeout);
  }, []) 

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
