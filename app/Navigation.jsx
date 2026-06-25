import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
   <header>
    <div>
        <nav>
            <p>List</p>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/about/teams">Teams</Link>
                </li>

            </ul>
        </nav>

    </div>
   </header>
  )
}

export default Navigation
