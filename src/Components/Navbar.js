import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
            <div className='navbar'>
                <header>
                    <h1 id="nav-title">TODAY</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/news">News</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
    )
}

export default Navbar