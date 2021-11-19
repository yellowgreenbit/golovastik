import styles from "./gamebaloon.module.scss";
import {useEffect, useState} from "react";

const ClockTimer = (props) => {
	const [fill, setFill] = useState(0);

	useEffect(()=>{
		//strokeDashoffset 125 - 100%
		setFill(-props.time/(60/125*100));
		console.log(props.time/100/22)
	})

	return(
		<div className={styles.wiseclocktext}>
			<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
				<circle cx="40" cy="36" r="20" fill="none" stroke="#e6e6e6" strokeWidth="11" />
				<circle cx="84" cy="40" r="20" fill="none" stroke="#f77a52" strokeWidth="11"
				        strokeDasharray="220" strokeDashoffset={fill} transform ="rotate(-90, 60, 60)"/>
				<text x="50%" y="48%" dominantBaseline="middle" textAnchor="middle" className={styles.heavy}>{Math.floor(props.time/100)}</text>
			</svg>
		</div>
	)
}

export default ClockTimer;