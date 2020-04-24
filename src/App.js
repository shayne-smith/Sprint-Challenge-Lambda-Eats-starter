/////////////// DEPENDENCIES ////////////////
import React, { useState, useEffect } from "react"
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import './App.css'

import OrderForm from './OrderForm'
import imageSrc from './Assets/Pizza.jpg'

//////////// URL FOR [POST] REQUESTS /////////////////////
const url = 'https://reqres.in/api/users'

const initialFormValues = {
  ///// TEXT INPUT /////
  name: '',
  ///// DROPDOWN /////
  pizzaSize: '',
  ///// CHECKBOXES /////
  components: {
    pepperoni: false,
    mushroom: false,
    chicken: false,
    olives: false
  },
  ///// TEXT INPUT /////
  specialInstructions: '',
}

///////// THE SHAPE OF THE VALIDATION ERRORS OBJECT ///////////
const initialFormErrors = {
  name: '',
  pizzaSize: '',
}

///////// FORM SCHEMA FOR VALIDATION ///////////
const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'name must have at least 2 characters!')
    .required('name is required!'),
  pizzaSize: yup
    .string(),
  components: yup
    .boolean(),
  specialInstructions: yup
    .string()
})

const App = () => {
  ////////////////// STATE TO KEEP TRACK OF FORM VALUES //////////////////
  const [formValues, setFormValues] = useState(initialFormValues)

  ////////////////// STATE TO KEEP TRACK OF VALIDATION ERRORS //////////////////
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  ////////////////// STATE TO KEEP TRACK OF ORDERS //////////////////
  const [orders, setOrders] = useState([])

  ////////////////// IMPLEMENT CHANGE HANDLERS /////////////////////////
  const postOrder = (order) => {
    axios.post(url, order)
      .then(res => {
        console.log(res)
        console.log(res.data)
        setOrders([...orders, res.data])
      })
      .catch(err => {
        console.error(err)
      })
  }

  const onInputChange = evt => {

    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)

      .then(valid => {
        // CLEAR ERROR
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        // SET THE ERROR IN THE RIGHT PLACE
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
    
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const name = evt.target.name
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      components: {
        ...formValues.components,
        [name]: isChecked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name,
      pizzaSize: formValues.pizzaSize,
      components: {
        pepperoni: formValues.components.pepperoni,
        mushroom: formValues.components.mushroom,
        chicken: formValues.components.chicken,
        olives: formValues.components.olives,
      },
      specialInstructions: formValues.specialInstructions,
    }

    postOrder(newOrder)
    setFormValues(initialFormValues)
  }

  return (
    <div className='appContainer'>
      <h1>Lambda Eats</h1><br></br>
      <img src={imageSrc} />
      <Switch>
        <Route path='/pizza'>
          <OrderForm 
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            errors={formErrors}
          />
        </Route>

        <Route path='/'>
          <Link to='/pizza' className='orderButton'><button>Order Pizza!!</button></Link>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
