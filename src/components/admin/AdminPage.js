import Heading from "../layout/Heading";
import { NavLink } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from "../../images/bg_form.png";


export default function AdminPage() {
	return (
		<div className="admin" style={{ backgroundImage: `url(${bg})` }}>
			<Row>
				<Col sm={12} md={3}>

				</Col>
				<Col sm={12} md={7} className="accommodations--admin">
					<Container>
						<Heading  content="Admin page" />
						<Row>
							<Col sm={12} md={6}>
								<div className="admin--hotels linkk">
									<NavLink to="/admin/accommodations">
										Link to Accommodations
									</NavLink>
								</div>
							</Col>
							{/* <Col sm={12} md={4}>
								<div className="admin--BBs linkk">
									<NavLink to="/admin/BBs">
										Link to B&B's
									</NavLink>
								</div>
							</Col>
							<Col sm={12} md={4}>
								<div className="admin--guesthouses linkk">
									<NavLink to="/admin/guesthouses">
										Link to Guesthouses
									</NavLink>
								</div>
							</Col> */}
						</Row>
					</Container>
				</Col>
			</Row>
		</div>
	);
}