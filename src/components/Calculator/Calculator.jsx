// Hook
import { useState } from "react"

// Components
import Button from "./Button"
import Input from "./Input"

// Style
import "./Calculator.css"

// Main
function Calculator(){

    // useState
    const [value, setValue] = useState("")

    // name button
    const btns = [
        "C", "(", ")", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        ".", "0", "00", "="
    ]

    // functions
    const handleClick = (a) =>{
        setValue(value + a)
    } 

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const handleClear = () =>{
        setValue("")
    }

    const handleResult = () =>{
        try {
            setValue(eval(value))
        } catch (error) {
            setValue("Error")
        }
    }

    return (
        <div className="uk-section uk-light uk-background-cover mri-h-vh mri-bg-image">
            <div className="uk-container uk-position-absolute uk-position-center">
                
                <div className="mri-theme-glass uk-height-1-1 uk-padding">
                    <Input value={value} onChange={()=>{handleChange}} />
                    <div className="mri-grid-4 uk-height-1-1">
                        { btns.map((btn, i)=>
                            <div className="uk-width-1-1 uk-height-1-1" key={i}>
                                { btn === "C" ? <Button name={btn} onClick={handleClear}/> : ( btn === "=" ? <Button name={btn} onClick={handleResult}/> : <Button name={btn} onClick={()=>{handleClick(btn)}}/> )}
                            </div>
                        ) }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calculator