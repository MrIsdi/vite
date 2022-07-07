function Button(props){

    return <button 
            type="button"
            className="uk-width-1-1 uk-height-1-1 uk-button mri-radius mri-bg-dark"
            onClick={props.onClick}
            >{ props.name }</button>
}

export default Button