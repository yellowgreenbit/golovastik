import {makeAutoObservable, runInAction} from "mobx";

class controller {

	gameIsStarted = false;
	count = 0;
	score = 0;
	tiker = null;

	constructor() {
		makeAutoObservable(this);
	}

	start(){
		this.gameIsStarted = true;

		if(!this.tiker){
			this.tiker = setInterval(() => {
				runInAction(() => {
					this.count = this.count + 1;
				})
			}, 10)
		}
	}

	stop(){
		if(this.tiker)
			clearInterval(this.tiker);

		this.gameIsStarted = false;
		this.tiker = null;
		this.count = 0;
		this.score = 0;

		this.baloonsArr = [];
	}

	increaseScore(){
		this.score++;
	}

	componentWillUnmount() {
		this.gameIsStarted = false;

	}


}

export default new controller();