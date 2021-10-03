import React from 'react'


export default function Header() {
    return (
        <header className="gift-header">

            <nav >
                <ul className="gift-nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Merch</a></li>
                    <li><a href="">News</a></li>
                </ul>

               

                <ul className="gift-log">
                    <li><a href="">Login</a></li>
                    <li><a href="">Logout</a></li>
                </ul>
            </nav>

        </header>
    )
}
