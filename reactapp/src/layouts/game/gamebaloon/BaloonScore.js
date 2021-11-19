import styled, {keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import controller from "./controller";

const rotate = keyframes`
  from {
    transform: scale(1);
    color: white;
  }
  to {
    transform: scale(2);
    color: #ff6767;
  }`;

const Score = styled.span`
	font-size: 2em;
	color: white;
	display: inline-block;
	animation: ${rotate} .3s linear infinite;
	animation-play-state: ${props => props.animated};
`;

const BaloonScore = () => {
	const [animated, setAnimated] = useState('paused ');
	const [score, setScore] = useState(0);

	const endAnimation = () => {
		setAnimated('paused')
	}

	useEffect(()=>{

		if(score < controller.score){
			setScore(controller.score)
			setAnimated('running')
		}else{
			setAnimated('paused')
		}

		return () => {
			setAnimated('paused')
		}
	}, [controller.score])

	return(
		<Score animated={animated} onAnimationIteration={endAnimation}>{controller.score}</Score>
	)
}

export default BaloonScore