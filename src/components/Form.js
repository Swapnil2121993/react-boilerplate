/*eslint-disable*/
import React from 'react';
import DemoCarousel from './DemoCarousel';
import './Form.less';

const Form = () => {
  return (
    <div className="form-container">
      <label>FirstName</label>
      <input type="text" value=" " />
      <label>lastName</label>
      <input type="text" value=" " />
      <label>Phone</label>
      <input type="number" value=" " />
      <label>DOB</label>
      <input type="number" value=" " />
      <div className="button-wrapper">
        <button className="waves-effect waves-light red" type="submit">
          submit
        </button>
      </div>
    </div>
  );
};

export default Form;
