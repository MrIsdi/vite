function List(props){
    return(
        <li className="uk-position-relative mri-text-light">
            <p className="uk-margin-remove-bottom">{props.data}</p>
            <i className="bx bx-x uk-text-lead uk-position-absolute uk-position-center-right uk-text-danger mri-cursor-pointer" onClick={props.onClick}></i>
        </li>
    )
}

export default List