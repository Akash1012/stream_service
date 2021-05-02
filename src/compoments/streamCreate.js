import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form'

const StreamCreate = (props) => {
    console.log(props)

    const renderInput = (formProps) => {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input onChange={formProps.input.onChange} value={formProps.input.value} />

            </div>
        )
    }

    const onSubmit = (formValues) => {


    }

    return (
        <div>
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field label="Enter Title" name="title" component={renderInput} />
                <Field label="Enter Description" name="description" component={renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        </div>
    )
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "You must enter a title"
    }

    if (!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)