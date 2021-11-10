import React, {useEffect, useState} from "react";
import styles from "./gamebaloon.module.scss";

const Baloon = (props) => {
	const [img, setImg] = useState('black_baloon');
	const [cls, setCls] = useState(styles.baloon_idle);

	const handleClick = () => {
		setImg('boom');

		setCls(styles.baloon_boom);

		props.onClick();
	}

	const animationEnd = () => {
		props.onBoom();
	}

	useEffect(()=>{

	})

	return (
		<img
			src={`/img/${img}.png`}
			alt={'aaa'}
			onClick={() => handleClick(props)}
			onAnimationEnd={() => animationEnd()}
			width={'200px'}
			className={cls}
			style={{left: `${props.left}px`}}
		/>
	)
};

export default Baloon;