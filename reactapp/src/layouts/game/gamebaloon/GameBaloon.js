import GeneralBox from "../../generalbox/GeneralBox";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import controller from "./controller";
import styles from "./gamebaloon.module.scss";

const Buttons = observer((props) => {

	const startHandler = () => {
		props.onStartGame();
		controller.start();
	}

	return (
		<div>
			<h3>{controller.count}</h3>
			<Button onClick={startHandler} variant={"dark"} >Start!</Button>
			<Button onClick={() => controller.stop()} variant={"dark"} >Stop!</Button>
			<Button onClick={() => controller.plus()} variant={"dark"} >+</Button>
			<Button onClick={() => controller.minus()} variant={"dark"} >-</Button>
		</div>
	)
})

const Baloon = (props) => {
	//const [img, setImg] = useState('black_baloon');
	//const [state, setState] = useState('black_baloon');

	//const [rendered, setRendered] = useState(true);
	//const [left, setLeft] = useState(0);

/*
	const destroy = () => {
		setRendered(false);
	};

	const create = () => {
		setImg("black_baloon");
		setRendered(true);
		setLeft(Math.floor(Math.random() * (1000 + 1)));
	}

	let image = <img src={`/img/${img}.png`} onClick={onclick} width={'20%'}
	                 style={{position: "relative", left: `${left}px`}}
	/>;
	if (!rendered) {
		image = ""
	}
*/
	return (
			<img src={`/img/black_baloon.png`} alt={'aaa'} onClick={props.onClick} width={'20%'}
			     style={{position: "relative", left: `${props.left}px`}}
			/>
	)
};

const GameBaloon = observer(() => {

	let [baloonsArr, setBaloonArr] = useState([]);

	const startGame = () => {
		createBaloon();
		if(controller.gameIsStarted){

		}else{
			console.log('startGame');
			//createBaloon();
		}
	}

	const createBaloon = () => {
		debugger
		//const newBaloons = baloonsArr.push(baloonTag);
		baloonsArr.push(baloonTag);
		//arrayBaloons.push(baloonTag);
		//setLeft(Math.floor(Math.random() * (1000 + 1)));
	}

	const baloonTag = <Baloon left={200} onClick={createBaloon}/>;

	//let arrayBaloons = [];
	//if(controller.gameIsStarted){
		//createBaloon();
		//arrayBaloons.push(baloonTag);
	//}





	return(
		<GeneralBox>
			<div className={styles.game_area}>
				{baloonsArr.map((message) => <Baloon key={message} message={message} />)}
			</div>
			<Buttons onStartGame={startGame}/>
		</GeneralBox>
	)
})

export default GameBaloon;