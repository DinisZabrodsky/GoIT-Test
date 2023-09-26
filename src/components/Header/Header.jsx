import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"


import css from './Header.module.scss'

function Header () {
    return <>
        <header>
            <nav className={css.nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to='cars'>Cars</NavLink>
                <NavLink to='favorites'>Favorites</NavLink>
            </nav>
        </header>

        <main className="conteiner">
            <Suspense>
                <Outlet/>
            </Suspense>
        </main>
        
    </>
}

export default Header