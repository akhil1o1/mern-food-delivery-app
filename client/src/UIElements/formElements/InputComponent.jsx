import { TextField, InputAdornment } from "@mui/material";

import "./InputComponent.css";

function InputComponent(props) {
  if (props.type === "simple") {
    return (
      <TextField
      type={props.inputType ? props.inputType : "text"}
        id={props.id}
        placeholder={props.placeholder}
        variant={props.variant}
        multiline={props.multiline ? true : false}
        fullWidth={props.fullWidth ? true : false}
        rows={props.rows}
      />
    );
  }

  if (props.type === "input-with-icon") {
    return (
      <TextField
        id={props.id}
        placeholder={props.placeholder}
        variant={props.variant}
        multiline={props.multiline ? true : false}
        sx={{
          width: props.width,
          backgroundColor: "#fff",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{props.icon}</InputAdornment>
          ),
        }}
      />
    );
  }
}

export default InputComponent;
