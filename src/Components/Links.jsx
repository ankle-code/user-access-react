import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonStyled from "./ButtonStyled/ButtonStyled";
import { Typography, Card } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  Card: {
    textAlign: "center",
    margin: "10px auto",
    maxWidth: "300px",
  },
}));

const Links = ({ Members }) => {
  const classes = useStyles();
  return (
    <div>
      {Members.map(({ id, name, type }) => (
        <Link
          key={id}
          to={type === "pj" ? `/company/${id}` : `/customer/${id}`}
          style={{ textDecoration: "none" }}
        >
          <Card className={classes.Card}>
            <Typography variant="h5" component="h1">
              {name}
            </Typography>
            <Typography variant="body2" component="p">
              Tipo: {type.toUpperCase()}
            </Typography>
          </Card>
        </Link>
      ))}
      <Link to="/register" style={{ textDecoration: "none" }}>
        <ButtonStyled> Adicionar</ButtonStyled>
      </Link>
    </div>
  );
};

export default Links;
