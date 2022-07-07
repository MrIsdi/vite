import { Link } from "react-router-dom"

function Navbar(){
    return (
        <nav className="uk-navbar-transparant uk-position-top-center uk-position-fixed">
            <div className="uk-navbar-center">
                <ul className="uk-navbar-nav">
                    <li className="uk-parent" >
                        <Link to="/">Home</Link>
                    </li>
                    <li className="uk-parent" >
                        <Link to="/calculator">Calculator</Link>
                    </li>
                    <li className="uk-parent" >
                        <Link to="/todolist">Todo List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar