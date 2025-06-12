import React from 'react'
// import logo from '../Assests/logo.svg'
const navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid d-flex flex-row justify-arround">
    <a class="navbar-brand" href="#">
        <img src='Assests/logo.svg'/>
    </a>
    <button class="navbar-toggler text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" id='aa' href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#" id='aa'>About</a>
        </li>
    
        <li class="nav-item">
          <a class="nav-link disabled  fs-5" id='aa' href="#" tabindex="-1" aria-disabled="true">Contacts</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
