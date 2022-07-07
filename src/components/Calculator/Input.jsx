function Input(props){
    return <input 
            type="text" 
            className="uk-width-1-1 uk-text-right mri-h-40 mri-mb-1"
            value={props.value}
            onChange={props.onChange}
            />
}

export default Input