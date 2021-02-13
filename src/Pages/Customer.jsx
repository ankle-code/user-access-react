import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Customer = ({ Members }) => {
  const params = useParams();
  const member = Members.find(({ id }) => id === params.id);
  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
