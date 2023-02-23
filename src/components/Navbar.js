import { Outlet, NavLink } from "react-router-dom";
import { Search } from "./Search";

export function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <NavLink to="/">
                    <p>Recipe World</p>
                </NavLink>
                <Search />
            </nav>
            <nav className="navbar">
                <NavLink to="/beef">
                    <p>Beef</p>
                </NavLink>

                <NavLink to="/chicken">
                    <p>Chicken</p>
                </NavLink>

                <NavLink to="/seafood">
                    <p>Seafood</p>
                </NavLink>

                <NavLink to="/vegetarian">
                    <p>Vegetarian</p>
                </NavLink>
            </nav>

            <Outlet />
        </div>  
    );
}