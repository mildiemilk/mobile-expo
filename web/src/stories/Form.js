import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Form extends React.Component {
  render(){
    const { handleSubmit, children } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        {children}
      </form>
    )
  }
}

Form = reduxForm({
  // a unique name for the form
  form: 'contact'
})(Form)

export default Form;
