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
            <div className='errors'>
                <h3>{errors.name}</h3>
                <h3>{errors.toppings}</h3>
                <h3>{errors.submit}</h3>
            </div>

            {/* ///////////////////// TEXT INPUT ////////////////// */}
            <label>Name:&nbsp;&nbsp;&nbsp;
                <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label><br /><br />

            {/* ////////// DROPDOWN ////////// */}
            <label>Pizza Size:&nbsp;
            <select
                value={values.pizzaSize}
                onChange={onInputChange}
                name='pizzaSize'
            >
                <option defaultValue=''>Please choose</option>
                <option value='small'>small</option>
                <option value='medium'>medium</option>
                <option value='large'>large</option>
            </select></label><br /><br />

            {/* ////////// CHECKBOXES ////////// */}
            <label><input
                checked={values.components.pepperoni}
                onChange={onCheckboxChange}
                name='pepperoni'
                type="checkbox" /> Pepperoni</label>&nbsp;
            <label><input
                checked={values.components.mushroom}
                onChange={onCheckboxChange}
                name='mushroom'
                type="checkbox" /> Mushroom</label>&nbsp;<br /><br />
            <label><input
                checked={values.components.chicken}
                onChange={onCheckboxChange}
                name='chicken'
                type="checkbox" /> Chicken</label>&nbsp;
            <label><input
                checked={values.components.olives}
                onChange={onCheckboxChange}
                name='olives'
                type="checkbox" /> Olives</label><br /><br />

            {/* ///////////////////// SPECIAL INSTRUCTIONS TEXT INPUT ////////////////// */}
            <label>Special Instructions:&nbsp;&nbsp;&nbsp;
                <input
                    value={values.specialInstructions}
                    onChange={onInputChange}
                    name='specialInstructions'
                    type='text'
                />
            </label><br /><br />

            <button onClick={onSubmit}>Add to Order</button>
        </form>
    )
}

export default OrderForm