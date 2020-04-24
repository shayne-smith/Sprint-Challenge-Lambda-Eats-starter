/////////////// DEPENDENCIES ////////////////
import React, { useState, useEffect } from "react"
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

//////////// URL FOR [POST] REQUESTS /////////////////////
const url = 'https://reqres.in/api/users'

const initialFormValues = {
  ///// TEXT INPUTS /////
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
}

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <button>Order Pizza!!</button>
    </>
  );
};
export default App;
