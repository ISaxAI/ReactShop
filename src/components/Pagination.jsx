import React, {useContext, useState} from "react";
import {GoodsList} from "./GoodsList";
import {useSelector} from "react-redux";

const Pagination = (props) => {
    const {itemsPerPage} = props
    const goods = useSelector(state => state.shop.goods)
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
            <GoodsList goods={currentGoods}/>
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