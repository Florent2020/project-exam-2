import React from 'react';
import { Link } from "react-router-dom";

function Pagination({ accommodationsPerPage, totalAccommodations, paginate, pageIndex })  {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalAccommodations / accommodationsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>  (

                    <li key={number} className="page-item">
                        <Link to="#" onClick={() => paginate(number)}
                        className={ number !== pageIndex? "page-link" : "page-link active"} >
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Pagination
