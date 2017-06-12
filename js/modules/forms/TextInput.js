import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class TextInput extends Component {
  static propTypes = {
    keyName: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    placeholder: PropTypes.string,
    handleUpdateValue: PropTypes.func.isRequired,
    // objectValue: PropTypes.object,
    // onBlue: PropTypes.func,
    // onSubmit: PropTypes.func,
    // validates: PropTypes.object,
  }

  render() {
    const { value, onBlue, handleUpdateValue } = this.props

    return (
      <div className="dkn-text-input">
        <input
          defaultValue={value}
          // onBlur={onBlue}
          onChange={handleUpdateValue}
        />
      </div>
    )
  }
}

export default connect(null)(TextInput)

