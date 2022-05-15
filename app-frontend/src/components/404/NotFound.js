import './NotFound.css';
import React from "react";

function NotFound() {
    return (
        <div className="not-found">
            <h1>Error 404 :(</h1>
            <h4>Sajnos az oldalnak ilyen alcíme nem létezik.<br /> Valószínűleg elírtál valamit, <br />ha pedig
                biztos vagy benne, hogy nem, <br />akkor kérlek jelezz nekünk.
            </h4>
        </div>
    );
}

export default NotFound;