import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <header>
            <h1>Kiran Bhagannavar</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header