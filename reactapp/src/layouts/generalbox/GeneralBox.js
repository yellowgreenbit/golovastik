import React from "react";
import classes from "./generalbox.module.scss"
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

const GeneralBox = ({children}) => {
	return (
		<div className={classes.main}>
			<header>
				<Container>
					<Row>
						<Col></Col>
						<Col xs={10}>
							<Navbar bg="primary" variant="dark">
								<Container>
									<Navbar.Brand href="#home">Главная</Navbar.Brand>
									<Nav className="me-auto">
										<Nav.Link href="home">Главная</Nav.Link>
										<Nav.Link href="courses">Курсы</Nav.Link>
										<Nav.Link href="games">Игры</Nav.Link>
									</Nav>
								</Container>
							</Navbar>
						</Col>
						<Col></Col>
					</Row>
					<Row>
						<Col></Col>
						<Col xs={10}>
							{children}
						</Col>
						<Col></Col>
					</Row>
				</Container>
			</header>
			<main>

			</main>
			<footer className="text-muted py-5">
				<div className="container">
					<p className="float-end mb-1">
						Back to top
					</p>
					<p className="mb-1">Album example is © Bootstrap, but please download and customize it for
						yourself!</p>
					<p className="mb-0">New to Bootstrap? Visit the homepage or read our <a
						href="/docs/5.1/getting-started/introduction/">getting started guide</a>.</p>
				</div>
			</footer>
		</div>
	)
}

export default GeneralBox