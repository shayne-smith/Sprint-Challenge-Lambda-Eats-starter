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
        <form className='formContainer'>
            <h2>Pizza Order Form</h2>
            <div className='errors'>
                <h3 data-cy_name_validation="data-cy_name_validation">{errors.name}</h3>
                <h3>{errors.toppings}</h3>
                <h3>{errors.submit}</h3>
            </div>

            {/* ///////////////////// TEXT INPUT ////////////////// */}
            <label>Name:&nbsp;&nbsp;&nbsp;
                <input
                    data-cy_name_input="cy_name_input"
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
            <h3>Toppings:</h3>&nbsp;
            <label><input
                data-cy_pepperoni_checkbox="cy_pepperoni_checkbox"
                checked={values.components.pepperoni}
                onChange={onCheckboxChange}
                name='pepperoni'
                type="checkbox" /> Pepperoni</label>&nbsp;
            <label><input
                data-cy_mushroom_checkbox="cy_mushroom_checkbox"
                checked={values.components.mushroom}
                onChange={onCheckboxChange}
                name='mushroom'
                type="checkbox" /> Mushroom</label>&nbsp;
            <label><input
                data-cy_chicken_checkbox="cy_chicken_checkbox"
                checked={values.components.chicken}
                onChange={onCheckboxChange}
                name='chicken'
                type="checkbox" /> Chicken</label>&nbsp;
            <label><input
                data-cy_olives_checkbox="cy_olives_checkbox"
                checked={values.components.olives}
                onChange={onCheckboxChange}
                name='olives'
                type="checkbox" /> Olives</label><br /><br />

            {/* ///////////////////// SPECIAL INSTRUCTIONS TEXT INPUT ////////////////// */}
            <label>Special Instructions:&nbsp;&nbsp;&nbsp;
                <input
                    data-cy_special_input="cy_special_input"
                    value={values.specialInstructions}
                    onChange={onInputChange}
                    name='specialInstructions'
                    type='text'
                />
            </label><br /><br />

            <button data-cy_submit="cy_submit" onClick={onSubmit}>Add to Order</button>
        </form>
    )
}

export default OrderForm