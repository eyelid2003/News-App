import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/"><b>Daily News</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/General">General</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Sport">Sport</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand a" aria-current="page" to="/Technology">Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
