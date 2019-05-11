import React from 'react'
import { Link } from '@reach/router'

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link
            to="/"
            getProps={({ isCurrent }) => {
              return isCurrent ? { className: 'active' } : null
            }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/new"
            getProps={({ isCurrent }) => {
              return isCurrent ? { className: 'active' } : null
            }}>
            New Tweet
          </Link>
        </li>
      </ul>
    </nav>
  )
}
