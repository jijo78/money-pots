import React from 'react';

const submitButton = () => {
  return (
    <article className='pick-pot-form__cta'>
      <button type='button' className='btn'>
        Back
      </button>
      <div className='nk-header__left-item'>
        <a href='/' title='Back'>
          <span>Back</span>
        </a>
      </div>
      <button type='submit' className='btn btn--success pick-pot-form__cta-submit'>
        Next
      </button>
    </article>
  );
};

export default submitButton;
