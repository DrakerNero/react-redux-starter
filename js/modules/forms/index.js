import React, { Component, PropTypes } from 'react'
import TextInput from './TextInput'

const countDown = 2

export default class FormWidgth extends Component {
  static propTypes = {
    keyName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    objectValue: PropTypes.object,
    placeholder: PropTypes.string,
    onBlue: PropTypes.func,
    onSubmit: PropTypes.func,
    onUpdateValue: PropTypes.func.isRequired,
    validates: PropTypes.object,
  }

  static defaultProps = {
    value: '',
    validataTime: countDown,
  }

  handleUpdateValueWithOnChange = (value) => {
    // console.log('hello', value.target.value);
    // this.setState({
    //   validataTime: countDown,
    // })
    // setInterval

  }

  handleUpdateValueWithOnBlur = (value) => {

  }

  render() {
    const { type, keyName, value, placeholder } = this.props
    const { handleUpdateValue } = this
    const assisgProps = {
      keyName,
      value,
      placeholder,
      handleUpdateValue,
    }

    switch (type) {
      case 'text': {
        return <TextInput {...assisgProps} />
      }
      default: {
        return <TextInput {...assisgProps} />
      }
    }
  }
}