import React from 'react';
import { Link } from 'react-router-dom';

const RecievedForm = () => {
  return (
    <div className='main'>
      <div className='text'>
        Your contact info has been received! <br />
        Thank you!
        <Link to='/'>
          <div>Return to contact us.</div>
        </Link>
      </div>
    </div>
  );
};

export default RecievedForm;
