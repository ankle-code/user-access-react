import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ButtonStyled from "../Components/ButtonStyled/ButtonStyled";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  Card: {
    textAlign: "center",
    margin: "40px auto",
    maxWidth: "300px",
  },
}));

const Customer = ({ Members }) => {
  const params = useParams();
  const member = Members.find(({ id }) => id === params.id);
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <Typography variant="h5" component="h1">
        {member && member.name}
      </Typography>
      <Typography content="p">
        Tipo: {member && member.type.toUpperCase()}
      </Typography>
      <Typography content="p">Numero: {member && member.id}</Typography>

      <Link to="/" style={{ textDecoration: "none" }}>
        <ButtonStyled>Voltar</ButtonStyled>
      </Link>
    </Card>
  );
};

export default Customer;
