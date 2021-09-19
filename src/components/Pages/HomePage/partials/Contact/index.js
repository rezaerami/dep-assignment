import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MESSAGES from 'constants/messages';

import { Button, Input } from 'components/Globals';

import {
  StyledContactWrapper,
  StyledContainer,
  StyledTitle,
  StyledForm,
  StyledInputWrapper,
  StyledButtonWrapper,
} from './styles';

const Contact = ({ className }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const errorData = {};
    if (!name) errorData.name = MESSAGES.NAME_FIELD_IS_REQUIRED;
    if (!email) errorData.email = MESSAGES.EMAIL_FIELD_IS_REQUIRED;
    if (!message) errorData.message = MESSAGES.MESSAGE_FIELD_IS_REQUIRED;
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationMessages = handleValidation();
    setErrors(validationMessages);

    if (!Object.keys(validationMessages).length) {
      console.log('submit');
    }
  };
  return (
    <StyledContactWrapper className={classNames(className)}>
      <StyledContainer>
        <StyledTitle>{MESSAGES.QUESTION}</StyledTitle>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputWrapper>
            <Input
              label={MESSAGES.NAME}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name || ''}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <Input
              label={MESSAGES.EMAIL}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email || ''}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <Input
              label={MESSAGES.MESSAGE}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={errors.message || ''}
              as="textarea"
              className="message"
            />
          </StyledInputWrapper>
          <StyledButtonWrapper>
            <Button type="submit" status="blue">
              {MESSAGES.SEND}
            </Button>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledContainer>
    </StyledContactWrapper>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};
Contact.defaultProps = {
  className: '',
};

export default Contact;
