import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  Button: {
    background: "linear-gradient(to bottom, #d13ba7, #f80759);",
    color: "#fff",
    textDecoration: "none",
    display: "block",
    margin: "15px auto",
  },
}));

const ButtonStyled = ({ children, handle }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={handle}
      variant="contained"
      className={classes.Button}
      size="large"
    >
      {children}
    </Button>
  );
};

export default ButtonStyled;
