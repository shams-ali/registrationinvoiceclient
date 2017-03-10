/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import Validation from 'react-validation';

Object.assign(Validation.rules, {
  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible">Required</span>,
  },
  api: {
    hint: value => (
      <button className="form-error is-visible">
        API Error on "{value}" value. Focus to hide.
      </button>
    ),
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      registered: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.removeApiError = this.removeApiError.bind(this);
  }

  onSubmit() {
    console.warn('onsubmit');
    // TODO: install axios
  }

  removeApiError() {
    this.form.hideError('username');
  }

  render() {
    return (
      <Validation.components.Form ref={c => { this.form = c; }} onSubmit={this.onSubmit}>
        <h3>Log In</h3>
        <div>
          <label>
            Username*
            <Validation.components.Input
              value=""
              placeholder="JohnDoe"
              name="username"
              validations={['required']}
            />
          </label>
        </div>
        <div>
          <label>
            Password*
            <Validation.components.Input
              type="password"
              value=""
              placeholder="******"
              name="password"
              validations={['required']}
            />
          </label>
        </div>
        <div>
          <Validation.components.Button>Submit</Validation.components.Button>
        </div>
      </Validation.components.Form>
    );
  }
}

export default SignIn;
