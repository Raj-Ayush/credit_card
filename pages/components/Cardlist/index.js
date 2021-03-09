import React from 'react';
import styles from "./Cardlist.module.css";

const Cardlist = (props) => {
    
    return(
    <div className={styles.list}>
        <div className={styles.text}>{props.item}</div>
        <button className={styles.btn} onClick={()=>props.deleteHandler(props.idx)} >Delete</button>
    </div>
    )
};
export default Cardlist;