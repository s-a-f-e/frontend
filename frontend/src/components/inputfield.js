import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 300,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

class OutlinedTextFields extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    homebase: '',
    textmask: '(1  )    -    ',
  };

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="First Name"
          name="firstname"
          className={classes.textField}
          value={this.state.firstname}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-name"
          label=" Last Name"
          name="lastname"
          className={classes.textField}
          value={this.state.lastname}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-name"
          label="Home Base"
          name="homebase"
          className={classes.textField}
          value={this.state.homebase}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input">primary phone number</InputLabel>
          <Input
            value={textmask}
            onChange={this.handleChange('textmask')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input">secondary phone number</InputLabel>
          <Input
            value={textmask}
            onChange={this.handleChange('textmask')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input"> tertiary phone number</InputLabel>
          <Input
            value={textmask}
            onChange={this.handleChange('textmask')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
    </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);