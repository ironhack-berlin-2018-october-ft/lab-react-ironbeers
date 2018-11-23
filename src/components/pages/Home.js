import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div>
        <Link to="/beers">All Beers</Link>
      </div>
      <div>
        <Link to="/random-beer">Random Beer</Link>
      </div>
      <div>
        <Link to="/new-beer">New Beer</Link>
      </div>
    </div>
  )
}
