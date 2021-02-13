import { Link } from "react-router-dom";

const Links = ({ Members }) => {
  return (
    <div>
      {Members.map(({ id, name, type }) => (
        <Link
          key={id}
          to={type === "pj" ? `/company/${id}` : `/customer/${id}`}
        >
          Go to {name}
        </Link>
      ))}
      <Link to="/register">
        <button>Adicionar</button>
      </Link>
    </div>
  );
};

export default Links;
