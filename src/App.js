import React, { Component } from 'react';
import Header from './Header';
import FormHeader from './components/FormHeader';
import FormBody from './components/FormBody';
import Alert from './components/Alert';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      availablePots: [],
      checked: false,
      value: '',
      successfullWithdraw: false,
      error: ''
    };
    this.fetchData = this.fetchData.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:3004/pots')
      .then(response => response.json())
      .then(response =>
        this.setState({
          availablePots: response.filter(item => item.isWithdrawable !== 'false')
        })
      )
      .catch(error => {
        throw new Error('There is a problem right now');
      });
  }

  onCheckBoxChange(evt) {
    const dataset = evt.currentTarget.dataset.id;
    this.setState({ checked: evt.target.checked, value: dataset });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const { checked } = this.state;

    if (!checked) {
      this.setState({
        error: 'Please make sure you choose at least one pot.',
        successfullWithdraw: false
      });
    } else {
      this.setState({ error: '', successfullWithdraw: true });
    }
  }

  render() {
    const { availablePots, error, successfullWithdraw, value } = this.state;
    return (
      <div className='App'>
        <Header />
        <section className='pick-pot-form__inner'>
          {availablePots && availablePots.length ? (
            <form
              className={`pick-pot-form
      ${successfullWithdraw ? 'nk-visually-hidden' : ''}`}
              onSubmit={this.onFormSubmit}
            >
              <fieldset>
                <FormHeader />
              </fieldset>
              <fieldset>
                <FormBody pots={availablePots} onChange={this.onCheckBoxChange} />
              </fieldset>
            </form>
          ) : (
            <p>Sorry not pots available at the moment</p>
          )}

          {error !== '' ? <Alert msg={error} type={'error'} /> : null}
          {successfullWithdraw ? (
            <Alert msg={`You have succesfully withdrawn from ${value} account`} type={'success'} />
          ) : null}
        </section>
      </div>
    );
  }
}
export default App;
