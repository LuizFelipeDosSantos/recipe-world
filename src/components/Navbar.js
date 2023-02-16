import { Outlet, NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <NavLink to="/">
                    <p>Recipe World</p>
                </NavLink>

                <NavLink to="/beef">
                    <p>Beef</p>
                </NavLink>

                <NavLink to="/chicken">
                    <p>Chicken</p>
                </NavLink>

                <NavLink to="/seafood">
                    <p>Seafood</p>
                </NavLink>

                <NavLink to="/veggie">
                    <p>Veggie</p>
                </NavLink>
            </nav>

            <Outlet />
        </div>  
    );
}