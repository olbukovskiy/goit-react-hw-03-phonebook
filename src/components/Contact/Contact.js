import React from 'react';
import { ListItem, Number, Button, TextField } from './Contact.styled';
import PropTypes from 'prop-types';

export default function Contact({ id, name, number, onChangeResult }) {
  return (
    <ListItem id={id}>
      <TextField>
        {name}: <Number> {number}</Number>
      </TextField>
      <Button type="button" onClick={onChangeResult}>
        Delete
      </Button>
    </ListItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChangeResult: PropTypes.func.isRequired,
};
