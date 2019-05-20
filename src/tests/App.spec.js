import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import '../setupTests';
import potsAll from './fixtures/pots.all.json';

import potsEmpty from './fixtures/pot.empty.json';

let wrapper;
describe('<App />', () => {
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the App component', async () => {
    expect(wrapper.find('.App').length).toEqual(1);
  });

  describe('<App /> Form', () => {
    let onSubmitMock;
    beforeEach(() => {
      onSubmitMock = jest.fn();
    });
    it('does not render the form if no pots available', () => {
      wrapper.setState({ availablePots: potsEmpty });

      expect(wrapper.find('.pick-pot-form').length).toEqual(0);
    });
    it('does render the form if pots are available', () => {
      wrapper.setState({ availablePots: potsAll });

      expect(wrapper.find('.pick-pot-form').length).toEqual(1);
    });

    describe('When submitting the form', () => {
      it('hides the form on successfull submit, shows a success message and set state.successfullWithdraw to true', () => {
        wrapper.setState({ availablePots: potsAll, checked: true, successfullWithdraw: false });

        wrapper.find('.pick-pot-form').simulate('submit', onSubmitMock);
        wrapper.setState({ successfullWithdraw: true });

        expect(wrapper.find('.nk-visually-hidden').length).toEqual(1);
        expect(wrapper.find('.pick-pot-form__alert--success').length).toEqual(1);
        expect(wrapper.state().successfullWithdraw).toEqual(true);
      });

      it('reset state.error message and does not show error message on successfull submit', () => {
        wrapper.setState({
          availablePots: potsAll,
          checked: true,
          successfullWithdraw: true,
          error: ' Some error'
        });

        wrapper.find('.pick-pot-form').simulate('submit', onSubmitMock);

        expect(wrapper.state().error).toEqual('');
        expect(wrapper.find('.pick-pot-form__alert--error').length).toEqual(0);
      });

      it('shows error message on unsuccessfull submit', () => {
        wrapper.setState({
          availablePots: potsAll,
          checked: false,
          successfullWithdraw: false
        });

        wrapper.find('.pick-pot-form').simulate('submit', onSubmitMock);

        expect(wrapper.find('.pick-pot-form__alert--error').length).toEqual(1);
      });
    });

    describe('When interacting with radio button', () => {
      it('sets state.checked to true if option is checked', () => {
        wrapper.setState({ availablePots: potsAll, checked: false });

        wrapper
          .find('.pick-pot-form__radio')
          .first()
          .simulate('change', { target: { checked: true } });

        expect(wrapper.state().checked).toEqual(true);
      });

      it('shows an error message if no option is checked', () => {
        wrapper.setState({ availablePots: potsAll, checked: false });

        wrapper.find('.pick-pot-form').simulate('submit', onSubmitMock);

        expect(wrapper.find('.pick-pot-form__alert--error').length).toEqual(1);
        expect(wrapper.state().error).toEqual('Please make sure you choose at least one pot.');
      });

      it('sets state.value to evt.target.dataset.id if radio button is checked', () => {
        wrapper.setState({ availablePots: potsAll, value: '' });

        wrapper
          .find('.pick-pot-form__radio')
          .first()
          .simulate('change', { dataset: { id: 'Account name' } });
        wrapper.setState({ availablePots: potsAll, value: 'Account name' });

        expect(wrapper.state().value).toEqual('Account name');
      });
    });
  });
});
