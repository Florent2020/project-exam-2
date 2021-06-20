import React from 'react';
import Heading from "../layout/Heading";
// import { NavLink } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from "../../images/bg_form.png";

function OverviewAdmin() {
    return (
        <div className="admin" style={{ backgroundImage: `url(${bg})` }}>
			<Row>
				<Col sm={12} md={4}>
					{/* <Nav className="flex-column">
						<div className="dashboard">
							<i className="fas fa-tachometer-alt"></i>
							Dashboard
						</div>
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
					</Nav> */}

{/* <div className="nav-links">
							<NavLink activeClassName="active" to="/admin/dashboard"><p>Dashboard </p><i class="fas fa-tachometer-alt"></i></NavLink>
							<NavLink activeClassName="active" to="/admin/establishments"><p>Overview </p><i className="fas fa-hotel"></i></NavLink>
							<NavLink activeClassName="active" to="/admin/add"><p>Add </p><i className="fas fa-plus-square"></i></NavLink>
							<NavLink activeClassName="active" to="/admin/messages"><p>Messages </p><i className="fas fa-envelope-open"></i></NavLink>
							<NavLink activeClassName="active" to="/admin/enquiries"><p>Enquiries </p><i className="fas fa-calendar-check"></i></NavLink>

						</div> */}
				</Col>
				<Col sm={12} md={7}>
					<Container>
						<Heading  content="Overview" />
					</Container>
				</Col>
                <Col sm={12} md={1}>

				</Col>
			</Row>
		</div>
    )
}

export default OverviewAdmin
