import React from 'react';
import { NavLink } from "react-router-dom";

function Pagination({ hotelsPerPage, totalHotels, paginate })  {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalHotels / hotelsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>  (

                    <li key={number} className="page-item">
                        <NavLink to="#" onClick={() => paginate(number)} className="page-link">
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Pagination
