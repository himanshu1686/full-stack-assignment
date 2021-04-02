import React from 'react'

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light py-2 my-5">
            <a className="navbar-brand mybrand" href="/"> Posit </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse " id="navbarText">
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item ml-sm-3 ">
                        <a className="nav-link upper-nav-link "   href="/">Home </a>
                      </li>
                      <li className="nav-item mx-sm-3 ">
                        <a className="nav-link upper-nav-link"   href="/">Features</a>
                      </li>
                      <li className="nav-item mr-sm-3 ">
                        <a className="nav-link upper-nav-link"   href="/">Pricing</a>
                      </li>
                    </ul>
            <span className="navbar-text d-none d-sm-inline-block ">
               <input className="btn btn-dark nav-btn" value="Get In Touch" type="button" />
            </span>
  </div>
</nav>
        </div>
    )
}

export default Navbar
