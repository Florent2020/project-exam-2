import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Button from "react-bootstrap/Button";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	if(!auth) {
		history.push("/");
	}

	function logout() {
		setAuth(null);
		history.push("/");
		window.localStorage.clear();
	}

	return (
		<nav className="nav--menu">
			<div className="container">

				{auth ? (
					<>

						{/* <div className="nav-links dashboard">
							<NavLink to="/admin/dashboard">
								<i className="fas fa-tachometer-alt"></i>
								Dashboard
							</NavLink>
							<NavLink to="/admin/overview" activeClassName="active">
								<i className="fas fa-hotel"></i>
								Overview
							</NavLink>
							<NavLink to="/admin/add" activeClassName="active">
								<i className="fas fa-plus-square"></i>
								Add
							</NavLink>
							<NavLink to="/admin/messages" activeClassName="active">
								<i className="fas fa-envelope-open"></i>
								Messages
							</NavLink>
							<NavLink to="/admin/enquiries" activeClassName="active">
								<i className="fas fa-calendar-alt"></i>
								Enquiries
							</NavLink>
						</div> */}
						<div className="nav-links dashboard--mobile">
							<NavLink to="/admin/dashboard">
								<i className="fas fa-tachometer-alt"></i>
								Dashboard
							</NavLink>
							<NavLink to="/admin/overview" activeClassName="active">
								<i className="fas fa-hotel"></i>
								Overview
							</NavLink>
							<NavLink to="/admin/add" activeClassName="active">
								<i className="fas fa-plus-square"></i>
								Add
							</NavLink>
							<NavLink to="/admin/messages" activeClassName="active">
								<i className="fas fa-envelope-open"></i>
								Messages
							</NavLink>
							<NavLink to="/admin/enquiries" activeClassName="active">
								<i className="fas fa-calendar-alt"></i>
								Enquiries
							</NavLink>
						</div>

						{/* <NavLink to="/admin/dashboard" className="admin--mobile">Admin</NavLink> */}
						<Button variant="info" type="submit" className="logout--button" onClick={logout}>Log out</Button>
					</>
				) : (
						<>
						<NavLink to="/" exact className="nav-link">Home</NavLink>
						<NavLink to="/accommodations" className="nav-link">Accommodations</NavLink>
						<NavLink to="/contact" className="nav-link">Contact</NavLink>
						<NavLink to="/login" className="nav-link">Login</NavLink>
						</>
				)}
			</div>
		</nav>
	);
}

export default Nav;