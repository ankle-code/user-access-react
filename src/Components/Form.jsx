import { useState } from "react";
import { Link } from "react-router-dom";
import { Members } from "../Members/Members";
import { makeStyles } from "@material-ui/core/styles";
import ButtonStyled from "../Components/ButtonStyled/ButtonStyled";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Box,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  Box: {
    textAlign: "center",
    margin: "15px auto",
  },
  Text: {
    margin: "15px",
  },
}));

const Form = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [type, setType] = useState("pf");

  const registerName = (event) => {
    const nameValue = event.target.value;
    setName(nameValue);
  };

  const registerType = (event) => {
    const typeValue = event.target.value;
    setType(typeValue);
  };

  const register = () => {
    const newMember = {};

    newMember.id = (Number(Members[Members.length - 1].id) + 1).toString();
    newMember.name = name;
    newMember.type = type;

    Members.push(newMember);
    console.log(Members);
  };

  return (
    <Box component="div" className={classes.Box}>
      <Typography variant="h5" component="h1" className={classes.Text}>
        Registre um novo Cliente!
      </Typography>
      <TextField
        onChange={registerName}
        variant="outlined"
        placeholder="Insira o nome"
      />
      <Box component="div" className={classes.Box}>
        <FormControl component="fieldset">
          <FormLabel component="legend"> Escolha o tipo:</FormLabel>
          <FormControlLabel
            control={
              <Radio
                checked={type === "pf"}
                onChange={registerType}
                value="pf"
              />
            }
            label="Customer"
          />
          <FormControlLabel
            control={
              <Radio
                checked={type === "pj"}
                onChange={registerType}
                value="pj"
              />
            }
            label="Company"
          />
        </FormControl>
      </Box>
      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonStyled handle={register}>Registrar</ButtonStyled>
        <ButtonStyled>Voltar</ButtonStyled>
      </Link>
    </Box>
  );
};

export default Form;
