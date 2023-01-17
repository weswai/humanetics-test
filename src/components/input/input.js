import { React, useState, useRef } from 'react';
import './input.css';


function Input({callback}){
    const [change, setChange] = useState("");
    const textareaEle = useRef();

    const handleChange = (e) => {
        let val = e.target.value;
        val = val.replace(/(\r\n|\n|\r)/gm, "").replace(/(.{9})/g, "$1\r\n");
        e.target.value = val;
        setChange(val);
    }

    const handleSubmit = () => {
        callback(change);
    }
    
    //Save function for Advanced Questions
    const handleSave = () => {
        localStorage.setItem("humanetics", change);
        alert("BitString Stream is save")
    } 

    //Retrieve function for Advanced Questions
    const handleRetrieve = () => {
        const saved = localStorage.getItem("humanetics");
        textareaEle.current.value = saved;
        setChange(saved);
    } 

    return (
    <div className='inputDiv' data-testid="inputDiv">
        <label>BitString Stream</label>
        <textarea 
            name="bitString" 
            rows={10} 
            cols={9} 
            wrap={`hard`}
            onChange={handleChange}
            ref={textareaEle}>
        </textarea>
        <div className='btnsGroup'>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleRetrieve}>Retrieve</button>
        </div>
    </div>
    );
}

export default Input;