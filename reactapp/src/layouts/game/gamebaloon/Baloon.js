import React, {useState} from "react";
import styles from "./gamebaloon.module.scss";
import styled, {keyframes} from "styled-components";

const idle = keyframes`
	from {
		transform: scale(.95);
		margin-left: 10px;
	}
	to {
		transform: scale(.93);
		margin-left: 0px;
	}
	50% {
		transform: scale(.9);
	}
`;

const opacityout = keyframes`
	from {
		opacity: 100;
	}
	to {
		opacity: 0;
	}
`

const BaloonImg = styled.img`
  height: 200px;
  width: 200px;
  position: absolute;
  top: 30px;
  alt: 'baloon';
  animation: ${idle} infinite ease-in-out alternate-reverse;  
`;

const BaloonContainer = styled.div`
	position: absolute;
  	top: 15px;
    animation: ${opacityout};
  	animation-duration: ${props => props.baloonLifeTime};
  	animation-iteration-count: 1
`

const Baloon = (props) => {
	const [baloonState, setBaloonState] = useState('baloon_idle');

	const baloonLT = Math.ceil(props.baloonLifeTime/100) + 0.2 +'s';

	const handleClick = () => {
		setBaloonState('boom');
		props.onClick();
	}

	const animationEnd = () => {
		props.onBoom();
	}

	const getBaloonElement = () => {
		if (baloonState === 'baloon_idle') {
			return (
					<BaloonImg
						onClick={() => handleClick(props)}
						src={`/img/black_baloon.png`}
						style={{left: `${props.left}px`}}
					/>
			)
		} else {
			return (
				<img
					src={`/img/boom.png`}
					alt={'boom'}
					onAnimationEnd={() => animationEnd()}
					width={'200px'}
					className={styles.baloon_boom}
					style={{left: `${props.left}px`}}
				/>
			)
		}
	}

	return (
		<BaloonContainer
			className={baloonState}
			baloonLifeTime={baloonLT}
		>
			{getBaloonElement()}
		</BaloonContainer>
	)

};

export default Baloon;