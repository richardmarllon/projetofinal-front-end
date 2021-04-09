// import { Button} from "antd";
import {TextField} from "@material-ui/core";
import "antd/dist/antd.css";


const formRegister = () => {

  return(
    <form className="form">
      <h1> Cadastre-se</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="primeiro nome"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Required"
          defaultValue="último nome"
          variant="outlined"
        />
        <TextField
          required
          id="date"
          label="Required"
          type="date"
          defaultValue="2021-01-01"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        <TextField
          required
          id="outlined-password-input"
          label="Required"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-email-input"
          label="Required"
          defaultValue="email"
          variant="outlined"
        />                   
      </div>
    </form>
  );
}

export default formRegister;