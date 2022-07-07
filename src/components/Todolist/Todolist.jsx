// Hook
import { useState } from "react"

// Components
import AddList from "./AddList"
import List from "./List"

// Style
import "./Todolist.css"

// Main
function Todolist(){
    // useState
    const [data, setData] = useState([])
    const [text, setText] = useState("")

    // Functions
    const Add = () =>{
        if(text !== ""){
            setData([...data, text])
            setText("")
        }
    }

    const Delete = (a) =>{
        setData(data.slice(a))
    }

    return(
        <div className="uk-section uk-background-cover mri-h-vh mri-bg-image">
            <div className="uk-container uk-position-absolute uk-position-center">
                <div className="mri-theme-glass uk-height-1-1 uk-padding">
                    <p className="uk-text-center uk-text-lead">Todo List</p>
                    <AddList onClick={Add} value={text} change={setText}/>
                    <ul className="uk-list">
                        { data.map((a, i)=>
                            <List data={a} key={i} onClick={()=>{Delete(i+1)}}/>
                        ) }
                    </ul>
                </div>    
            </div>
        </div>
    )
}

export default Todolist