// Hook
import { useState } from 'react';

function AddList(props){
    const [value, setValue] = useState("")

    // Functions
    const handleChange = (e) =>{
        setValue(e.target.value)
        props.change(e.target.value)
    }

    return(
        <div className="uk-container uk-flex">
            <input type="text" className="uk-input" value={props.value} onChange={handleChange}/>
            <button className="uk-button uk-button-secondary" onClick={props.onClick}>Add</button>
        </div>
    )
}

export default AddList