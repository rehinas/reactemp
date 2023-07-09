

import React from 'react'
import { Link, Route, Router } from 'react-router-dom'
import EmployeeForm from './components/EmployeeForm'
import EmployeeDashboard from './components/EmployeeDashboard'

function App () {
  return (
   <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/employee-form'>Employee-Form</Link>
          </li>
        </ul>
      </nav>
      <Route path='/employee-form'>
        <EmployeeForm/>
      </Route>
      <Route path="/">
        <EmployeeDashboard/>
        </Route>
      </div>
      </Router>
   
  )
}

export default App





