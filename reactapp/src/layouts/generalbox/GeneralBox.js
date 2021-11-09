import React from "react";
import classes from "./generalbox.module.scss"
import {Col, Container, Row} from "react-bootstrap";
import NavBarMenu from "./navbar/NavBarMenu";

const GeneralBox = ({children}) => {
	return (
		<div className={classes.main}>
			<main className={"flex-shrink-0"} >
				<NavBarMenu/>
				<Container>
					<Row>
						<Col></Col>
						<Col xs={10}>
						</Col>
						<Col></Col>
					</Row>
					<Row>
						<Col></Col>
						<Col xs={10} className={classes.center_content}>
							{children}
						</Col>
						<Col></Col>
					</Row>
				</Container>
			</main>
			<footer className="footer mt-auto py-3 bg-light">
				<div className="container">
					<span className="text-muted">Place sticky footer content here.</span>
				</div>
			</footer>
		</div>
	)
}

export default GeneralBox