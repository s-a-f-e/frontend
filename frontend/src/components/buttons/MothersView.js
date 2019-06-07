import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    marginRight: 60,
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
      <Button className={classes.button}>Click Here To Add Mothers</Button>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextButtons);
