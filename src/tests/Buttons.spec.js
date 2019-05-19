import React from 'react';
import { shallow } from 'enzyme';
import Buttons from '../components/Buttons';
import '../setupTests';

let wrapper;
describe('<Buttons />', () => {
  beforeEach(() => {
    wrapper = shallow(<Buttons />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the Buttons component', () => {
    expect(wrapper.find('.pick-pot-form__cta').length).toEqual(1);
  });
  it('renders both the Next and Back Buttons', () => {
    expect(wrapper.find('.btn').length).toEqual(2);
  });
});
