import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
  return (
    <div className="main">
      <div className="header">
        {/* <h1>{header}</h1> */}

        <Link to="/dashboard">
          <h1>Overview</h1>
        </Link>
      </div>
    </div>
  );
}

export default Main

