import React from 'react'
import Button from '../button/button'
import Link from '../link/link'
import './navbar.css'

export const Navbar = () => {
    return (
        <nav class="nav">
            <Link navlogo>Oluwasayo</Link>
            <div class="col">
                <Link>Home</Link>
                <Link>About Me</Link>
                <Link>Case Study</Link>
                <Button edge="lower-right">Hire Me</Button>
                {/* <Link>About Me</Link>
                <Link>Case Study</Link>
                <Button>Hire Me</Button> */}
            </div>
        </nav>
    )
}
