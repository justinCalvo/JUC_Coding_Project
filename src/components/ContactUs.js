import React, { useState } from 'react';
import '../App.css';

import SubmitForm from './SubmitForm';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const [hasAgreed, setHasAgreed] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setBirthday('');
    setHasAgreed(false);
  };

  return (
    <div className='main'>
      <div className='container'>
        <form className='form'>
          <h2>Contact Us</h2>
          <label>Name *</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email *</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Birth Date</label>
          <input
            type='text'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <div className='agreement'>
            <span className='checkbox'>
              <input
                type='checkbox'
                onChange={() => setHasAgreed(!hasAgreed)}
                defaultChecked={hasAgreed}
              />
            </span>
            I agree to be contacted via email.
          </div>
          <SubmitForm
            name={name}
            email={email}
            birthday={birthday}
            hasAgreed={hasAgreed}
            resetForm={resetForm}
          />
          <button type='submit' onClick={resetForm}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
