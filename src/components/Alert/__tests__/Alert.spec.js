import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../index';
import '../../../setupTests';

let wrapper;
describe('<Alert />', () => {
  beforeEach(() => {
    wrapper = shallow(<Alert />);
  });

  afterEach(() => {
    wrapper.unmount();
  });
  describe('<Alert /> msg prop', () => {
    it('renders the Alert component if msg is passed as a prop', () => {
      wrapper = shallow(<Alert msg='Alert message' />);
      expect(wrapper.find('.pick-pot-form__alert').length).toEqual(1);
    });
    it('does not render the Alert component if msg is not passed as a prop', () => {
      expect(wrapper.find('.pick-pot-form__alert').length).toEqual(0);
    });
  });
  describe('<Alert /> type prop', () => {
    it('renders the class type if type props is present', () => {
      wrapper = shallow(<Alert msg='Alert message' type='error' />);
      expect(wrapper.find('.pick-pot-form__alert--error').length).toEqual(1);
    });
    it('renders the default class type if type props is not present', () => {
      wrapper = shallow(<Alert msg='Alert message' />);
      expect(wrapper.find('.pick-pot-form__alert--success').length).toEqual(1);
    });
  });
});
