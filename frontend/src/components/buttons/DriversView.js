import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: 60 
  },
  input: {
    display: "none"
  }
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Click Here to Add Drivers</Button>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextButtons);
