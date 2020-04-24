import React from 'react'

function OrderForm(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <form className='container'>
            <h2>Pizza Order Form</h2>
        </form>
    )
}