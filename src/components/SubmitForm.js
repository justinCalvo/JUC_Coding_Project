import React, { useState, useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import validator from 'validator';

const SubmitForm = ({ name, email, birthday, hasAgreed, resetForm }) => {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isBirthdayValid, setIsBirthdayValid] = useState(false);
  const [isAllValid, setIsAllValid] = useState(false);

  const [wasSuccessful, setWasSuccessful] = useState(false);

  const validateForm = useCallback(() => {
    if (validator.isAlpha(name)) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
    if (validator.isEmail(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    if (validator.isDate(birthday, 'MM/DD/YYYY') || birthday.length === 0) {
      setIsBirthdayValid(true);
    } else {
      setIsBirthdayValid(false);
    }
  }, [birthday, email, name]);

  const canSubmit = useCallback(() => {
    if (isNameValid && isEmailValid && isBirthdayValid && hasAgreed) {
      setIsAllValid(true);
    } else {
      setIsAllValid(false);
    }
  }, [isBirthdayValid, isEmailValid, isNameValid, hasAgreed]);

  useEffect(() => {
    validateForm();
    canSubmit();
  }, [validateForm, name, email, birthday, canSubmit]);

  const submitContact = useCallback(() => {
    if (isAllValid) {
      const data = {
        name,
        email,
        birthday,
      };

      axios
        .post(
          'https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users',
          data
        )
        .then((res) => {
          setWasSuccessful(true);
          resetForm();
        })
        .catch((err) => {
          console.error(err, 'failed');
        });
    } else {
      alert('Please fill out form');
    }
  }, [isAllValid, name, email, birthday, resetForm]);

  return (
    <>
      <button type='submit' onClick={submitContact}>
        Submit
      </button>
      {wasSuccessful ? <Redirect to='/received' /> : null}
    </>
  );
};

export default SubmitForm;
