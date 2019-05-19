import React from 'react';
import { shallow } from 'enzyme';
import FormBody from '../components/FormBody';
import pots from './fixtures/pots.all.json';

import '../setupTests';

let wrapper;
describe('<Buttons />', () => {
  beforeEach(() => {
    wrapper = shallow(<FormBody pots={pots} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('does not renders any list item if not data are passed', () => {
    wrapper = shallow(<FormBody />);

    expect(wrapper.find('.pick-pot-form__list').length).toEqual(0);
  });

  it('correctly render the pot name', () => {
    expect(
      wrapper
        .find('.pick-pot-form__pot-name')
        .first()
        .text()
    ).toEqual('My Nutmeg pot');
  });

  it('correctly format the value', () => {
    expect(
      wrapper
        .find('.pick-pot-form__value')
        .first()
        .text()
    ).toEqual('4,420');
  });

  describe('onChange functionality', () => {
    let onChangeMockFn;
    beforeEach(() => {
      onChangeMockFn = jest.fn();
    });

    it('should call onChange function if passed as a prop', () => {
      wrapper = shallow(<FormBody pots={pots} onChange={onChangeMockFn} />);

      wrapper
        .find('.pick-pot-form__radio')
        .first()
        .simulate('change', onChangeMockFn);

      expect(onChangeMockFn).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange function if not passed as a prop', () => {
      wrapper = shallow(<FormBody pots={pots} />);

      wrapper
        .find('.pick-pot-form__radio')
        .first()
        .simulate('click', onChangeMockFn);

      expect(onChangeMockFn).toHaveBeenCalledTimes(0);
    });
  });
});
