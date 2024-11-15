import React, {useState} from "react";
import {GoodsList} from "./GoodsList";

const Pagination = (props) => {
    const {
        goods,
        itemsPerPage,
        addToBasket
    } = props
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(goods.length / itemsPerPage);
    const currentGoods = goods.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <GoodsList goods={currentGoods} addToBasket={addToBasket}/>
            <ul className="pagination">
                <li>
                    <a>
                        <i
                            className="material-icons "
                            onClick={() => currentPage !== 1 ? handlePageChange(currentPage - 1) : null}
                        >
                            chevron_left
                        </i>
                    </a>
                </li>

                {Array.from({length: totalPages}, (_, index) => (
                    <li>
                        <a>
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                disabled={currentPage === index + 1}
                            >
                                {index + 1}
                            </button>
                        </a>
                    </li>
                ))}

                <li>
                    <a>
                        <i
                            className="material-icons"
                            onClick={() => currentPage !== totalPages ? handlePageChange(currentPage + 1) : null}
                        >
                            chevron_right
                        </i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;