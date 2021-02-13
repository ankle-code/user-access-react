import { useState } from "react";
import { Link } from "react-router-dom";
import { Members } from "../Members/Members";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

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
    <div>
      <input onChange={registerName} type="text" placeholder="Insira o nome" />
      <div>
        <input type="radio" value="pf" onClick={registerType} />
        <label>Customer</label>
        <input type="radio" value="pj" onClick={registerType} />
        <label>Company</label>
      </div>
      <Link to="/">
        <button onClick={register}>Registrar</button>
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default Form;
