import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Alert from './Alert';
import { createPost, showAlert, hideAlert } from '../redux/actions';

const styles = () => ({
  textField: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '& label.Mui-focused': {
      color: 'rgba(69, 158, 93,1)',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(69, 158, 93,1)',
      },
    },
  },
  button: {
    borderColor: 'green',
    width: '23.5%',
    marginLeft: '1.5%',
    display: 'inline-block',
    '&:hover': {
      backgroundColor: 'rgba(69, 158, 93,.2)',
    },
  },
});

const Form = ({ classes, alert }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const handleInput = (event) => {
    setTitle(event.target.value);
  };
  const addPost = (event) => {
    event.preventDefault();
    dispatch(hideAlert());
    if (!title.trim()) {
      dispatch(showAlert('Enter smth'));
      return;
    }
    const newPost = {
      id: Date.now().toString(),
      title,
      done: false,
    };
    dispatch(createPost(newPost));
    setTitle('');
  };

  return (
    <>
      {alert ? <Alert text={alert} /> : null}
      <form className="form" onSubmit={addPost}>
        <TextField
          id="outlined-helperText"
          className={classes.textField}
          value={title}
          onChange={(event) => {
            handleInput(event);
          }}
          label="Task"
          variant="outlined"
        />
        <Button variant="outlined" className={classes.button} onClick={addPost}>
          ADD
        </Button>
      </form>
    </>
  );
};
const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
};
const mapStateToProps = (state) => ({
  alert: state.app.alert,
  posts: state.todo.todo,
});
Form.propTypes = {
  classes: PropTypes.object,
  alert: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
Form.defaultProps = {
  classes: {},
  alert: null,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Form));
