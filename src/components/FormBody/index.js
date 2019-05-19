import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons';

const FormBody = ({ pots, onChange }) => {
  return (
    <section className='pick-pot-form__body'>
      <ul>
        {pots &&
          pots.map(pot => {
            return (
              <li className='pick-pot-form__list' key={pot.value}>
                <label htmlFor={pot.name}>
                  <p>
                    <span className='pick-pot-form__pot-name nk-text--color-dark nk-text--fw-bold'>
                      {pot.name}
                    </span>
                    <small>
                      &pound;{' '}
                      <span className='pick-pot-form__value nk-text--color-link nk-text--fw-bold'>
                        {parseInt(pot.value).toLocaleString()}
                      </span>{' '}
                      <span className='nk-text--color-light'>available</span>
                    </small>
                  </p>
                  <div>
                    <input
                      className='pick-pot-form__radio'
                      type='radio'
                      data-id={pot.name}
                      name={pot.name}
                      onChange={onChange}
                    />
                    <span />
                  </div>
                </label>
              </li>
            );
          })}
        <li>
          <Buttons />
        </li>
      </ul>
    </section>
  );
};

FormBody.propTypes = {
  pots: PropTypes.array,
  onChange: PropTypes.func
};

export default FormBody;
