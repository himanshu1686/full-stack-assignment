import React from 'react'

const Navbar = () => {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-sm navbar-light bg-light py-2 my-2">
            <a class="navbar-brand mybrand" href="#"> Post-It </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse " id="navbarText">
                    <ul class="navbar-nav mx-auto">
                      <li class="nav-item ml-sm-3">
                        <a class="nav-link" href="#">Home </a>
                      </li>
                      <li class="nav-item mx-sm-3">
                        <a class="nav-link" href="#">Features</a>
                      </li>
                      <li class="nav-item mr-sm-3">
                        <a class="nav-link" href="#">Pricing</a>
                      </li>
                    </ul>
            <span class="navbar-text " class="d-none d-sm-inline-block">
               <input class="btn btn-dark" value="Get In Touch" type="button" />
            </span>
  </div>
</nav>
        </div>
    )
}

export default Navbar
