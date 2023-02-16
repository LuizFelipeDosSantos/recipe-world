import { Outlet, NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <div>
                <NavLink to="/">
                    <div>
                        <p>Recipe World</p>
                    </div>
                </NavLink>
            </div>
            <div>
                <nav className="navbar">
                    <NavLink to="/beef">
                    <div>
                        <p>Beef</p>
                    </div>
                    </NavLink>

                    <NavLink to="/chicken">
                    <div>
                        <p>Chicken</p>
                    </div>
                    </NavLink>

                    <NavLink to="/seafood">
                    <div>
                        <p>Seafood</p>
                    </div>
                    </NavLink>

                    <NavLink to="/veggie">
                    <div>
                        <p>Veggie</p>
                    </div>
                    </NavLink>
                </nav>

                <Outlet />
            </div>
        </>        
    );
}