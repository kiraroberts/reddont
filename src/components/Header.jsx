import React from 'react'
// import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      {/* <style global jsx>{`
      .navColor {
        background-color: darkblue;
        }
      `}</style> */}
      <nav className="teal lighten-2">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Reddont</a>
          <ul id="nav-mobile" className="right">
            <li><a href="sass.html">Trending</a></li>
            <li><a href="badges.html">Worst</a></li>
            <li><a href="collapsible.html">Cancel</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header