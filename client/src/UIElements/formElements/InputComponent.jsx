import { Paper, TextField, InputAdornment } from "@mui/material";

function InputComponent(props) {
  if (props.type === "basic") {
    return (
      <Paper>
        <TextField
          id={props.id}
          placeholder={props.placeholder}
          variant={props.variant}
          multiline={props.multiline ? true : false}
          fullWidth={props.fullWidth ? true : false}
        />
      </Paper>
    );
  }

  if (props.type === "input-with-icon") {
    return (
      <Paper>
        <TextField
          id={props.id}
          placeholder={props.placeholder}
          variant={props.variant}
          multiline={props.multiline ? true : false}
          sx={{
            width: props.width
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{props.icon}</InputAdornment>
            ),
          }}
        />
      </Paper>
    );
  }
}

export default InputComponent;
