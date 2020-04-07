import React,{useState, useEffect} from 'react';
import styles from './Paginator.module.css';

let Paginator = ({totalItemsCount,pageSize,currentPage,onPageChanged,portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPositionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPositionPageNumber = portionSize*portionNumber;
    return <div>
            {portionNumber>1 && <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>}
            {pages.filter(p => p>=leftPositionPageNumber && p<= rightPositionPageNumber).map((p) => {
            return <span key={p} className={p === currentPage ? styles.selectedPage + " " + styles.styledButton : styles.styledButton} onClick={(e) => onPageChanged(p)}>{p}</span>}
            )}
            {portionCount>portionNumber &&  <button  onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button>}
        </div>
}
export default Paginator;