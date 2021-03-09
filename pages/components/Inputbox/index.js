import React, { useState, useRef, useEffect } from 'react';
import styles from "./Inputbox.module.css";
import Cardlist from './../Cardlist/index';


const Inputbox = (props) => {
    const [disabledBox, setDisabledBox] = useState(false);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [items, setItems] = useState([]);
    const inp1 = useRef(null);
    const inp2 = useRef(null);
    const inp3 = useRef(null);
    const inp4 = useRef(null); 
    

    const editInputbox1= (ev)=>{
        let str = String(ev.target.value);
        if(str.length >= 4){
            inp2.current.focus();
            if(str.length >12){
                inp4.current.focus();
            }else if(str.length >=8){
                inp3.current.focus();
            }
            else if(str.length >=4){
                inp2.current.focus();
            }
            setValue1(str.substring(0,4));
            setValue2(str.substring(4,8));
            setValue3(str.substring(8,12));
            setValue4(str.substring(12,16));
        }
        else{
            inp1.current.focus();
            setValue1(ev.target.value);
        }
    }

    const editInputbox2= (ev)=>{
        let str = String(ev.target.value);
        if(str.length >= 4){
            inp3.current.focus();
            setValue2(str.substring(0, 4));
            setValue3(str.substring(4, 8));
            setValue4(str.substring(8, 12));
        }
        else if(ev.target.value === ""){
            setValue2("");
            inp1.current.focus();
        }
        else{
            inp2.current.focus();
            setValue2(ev.target.value);
        }
    }
    const editInputbox3= (ev)=>{
        let str = String(ev.target.value);
        if(str.length >= 4){
            inp4.current.focus();
            setValue3(str.substring(0, 4));
            setValue4(str.substring(4, 8));
        }
        else if(ev.target.value === ""){
            setValue3("");
            inp2.current.focus();
        }
        else{
            setValue3(ev.target.value);
        }
    }
    const editInputbox4= (ev)=>{
        let str = String(ev.target.value);
        if(str.length > 4){
            setValue4(str.substring(0, 4));
            
        }
        else if(ev.target.value === ""){
            setValue4("");
            inp3.current.focus();
        }
        else{
            setValue4(ev.target.value);
        }
    }


    const clickHandler=()=>{
        if(value1.length == 4 
            && value2.length== 4 
            && value3.length == 4 
            && value4.length == 4
        ){
            const str = `${value1}-${value2}-${value3}-${value4}`
            items.push(str);
            setItems([...items]);
            setValue1("");
            setValue2("");
            setValue3("");
            setValue4("");
            inp1.current.focus();
            setDisabledBox(false);
        }
        else{
            setDisabledBox(true);
        }
    }


    useEffect(()=>{
        inp1.current.focus();
    },[])

    const deleteHandler= (idx)=>{
        items.splice(idx, 1);
        setItems([...items]);
    }
    const handleKeypress= (ev)=>{
        if(String(ev.which) === "13"){
            clickHandler();
        }
    }
    return (
    <div>
        <div className={styles.div2}>
            <div className={styles.inputTag}>
                <label className={styles.cardNumber}>Card Number*</label>
                <input 
                        type="number" 
                        id={styles.inp} 
                        value={value1} 
                        onChange={editInputbox1} 
                        ref={inp1} 
                        onKeyPress={handleKeypress}

                />
                <input 
                        type="number" 
                        id={styles.inp} 
                        value={value2} 
                        onChange={editInputbox2} 
                        ref={inp2} 
                        onKeyPress={handleKeypress}
                />
                <input 
                        type="number" 
                        id={styles.inp} 
                        value={value3} 
                        onChange={editInputbox3} 
                        ref={inp3}
                        onKeyPress={handleKeypress} 
                />
                <input 
                        type="number" 
                        id={styles.inp} 
                        value={value4} 
                        onChange={editInputbox4} 
                        ref={inp4} 
                        onKeyPress={handleKeypress}
                />
            </div>
            {disabledBox?<p style={{textAlign:"center", color:"red"}}>Text box is not completed!</p>:null}
            
            <input type="submit" className={styles.btn} value="submit" onClick={clickHandler} />
            <div className={styles.dataContainer}>
                {items.map((item, idx)=>
                    <Cardlist 
                        idx= {idx}
                        key= {`key_${idx}`}
                        item= {item}
                        deleteHandler={deleteHandler}
                    />
                )}
            </div>
        </div>
    </div>)
};
export default Inputbox;