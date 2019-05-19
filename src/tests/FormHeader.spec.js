import React from 'react';
import { mount } from 'enzyme';
import FormHeader from '../components/FormHeader';
import '../setupTests';

let wrapper;
describe('<FormHeader />', () => {
  beforeEach(() => {
    wrapper = mount(<FormHeader />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the FormHeader component', () => {
    expect(wrapper.find('.pick-pot-form__header').length).toEqual(1);
  });

  it('renders the correct title', () => {
    expect(wrapper.find('.pick-pot-form__header h2').text()).toEqual('Pick a Pot');
  });
});
