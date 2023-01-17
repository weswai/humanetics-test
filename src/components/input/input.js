import { React, useState } from 'react';
import './input.css';


function Input({callback}){
    const [change, setChange] = useState("");

    const handleChange = (e) => {
        let val = e.target.value;
        val = val.replace(/(\r\n|\n|\r)/gm, "").replace(/(.{9})/g, "$1\r\n");
        e.target.value = val;
        setChange(val);
    }


    const handleSubmit = () => {
        callback(change);
    } 

    return (
    <div className='inputDiv' data-testid="inputDiv">
        <label>BitString Stream</label>
        <textarea 
            name="bitString" 
            rows={10} 
            cols={9} 
            wrap={`hard`}
            onChange={handleChange}>
        </textarea>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    );
}

export default Input;