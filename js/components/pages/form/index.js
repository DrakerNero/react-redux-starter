import React, { Component } from 'react'
import FormWidgth from '../../../modules/forms'

class ContentForm extends Component {
  state = {
    firstName: 'Sutthirot',
  }

  onUpdateValue = (keyName, value) => {
    this.setState({
      [keyName]: value,
    })
  }

  render() {
    const { firstName } = this.state

    return (
      <div className="content-form-page">
        <div className="container">
          Hello
          <FormWidgth
            keyName="firstName"
            type="text"
            value={firstName}
            placeholder="Form Widgth"
            onUpdateValue={this.onUpdateValue}
          />
        </div>
      </div>
    )
  }
}

export default ContentForm
