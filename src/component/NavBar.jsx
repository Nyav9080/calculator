import React from 'react'

function Calc() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary bg-dark' data-bs-theme="dark">
      <div className='container-fluid'>
      <a className='navbar-brand' href='#'>Calculator</a>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current href="/">Home</a>
          </li>
          <li className='nav-item'>
          <a className='nav-link' href="/about">About</a>
          </li>
          <li className='nav-item'>
          <a className='nav-link' href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Calc