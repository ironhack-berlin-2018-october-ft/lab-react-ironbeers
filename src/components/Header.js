import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <Link to="/">
      <div className="Header">
        Home
      </div>
    </Link>
  )
}