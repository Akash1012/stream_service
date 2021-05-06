import React from 'react';
import { Field, reduxForm } from 'redux-form'


const StreamForm = (props) => {


    console.log("StreamForm", props.initialValues)

    const renderError = (meta) => {
        if (meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    }

    const renderInput = (formProps) => {
        const className = `{field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}}`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input  {...formProps.input} />
                {/* onChange={formProps.input.onChange} value={formProps.input.value} */}
                {renderError(formProps.meta)}
            </div>
        )
    }

    const onSubmit = (formValues) => {
        console.log(formValues)
        props.onSubmit(formValues)
    }

    return (
        <div>
            <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
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

const formWrapped = reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm)


export default formWrapped