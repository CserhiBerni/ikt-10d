import React from "react";
import './Navbar.css';
import { NavLink, withRouter } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar py-3 navbar-dark navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Főoldal</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/bernat">Bernát</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/krisztian">Krisztián</NavLink>
                        </li>
                        <div className="nav-item">
{/*                             <NavLink className="nav-link" activeClassName="active" to="/tictactoe">TicTacToe</NavLink>
 */}                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);