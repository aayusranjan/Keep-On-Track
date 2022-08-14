import React, { useState } from "react";
import TextFields from "@material-ui/core/TextField";
import AddCircleIcon from '@material-ui/icons/AddCircle';

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <TextFields label="Add your todo's" onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
       <AddCircleIcon />
      </button>
    </div>
  );
}

export default InputArea;
