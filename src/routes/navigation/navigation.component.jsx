import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/icons8-comet.png"
import "./navigation.styles.scss"

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img src={logo} className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;