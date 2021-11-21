import {makeAutoObservable, runInAction} from "mobx";

class controller {

	gameIsStarted = false;
	gameTime = 2000;
	tiker = null;
	timer = 0;
	score = 0;
	countBaloons = 0;
	baloonLifeTime = 400;
	minLifeTime = 100;
	additionalBaloonDelay = 400;
	lifesBaloons = [];
	baloonArray = [];

	checkTimeEvent = (baloon_id, timeToAction, action) =>{
		if(timeToAction < this.timer){
			action();
		}
	}

	constructor() {
		makeAutoObservable(this);
	}

	get emitNewBaloon(){
		if(this.timer % this.additionalBaloonDelay === 0){
			console.log('emitNewBaloon', this.timer, this.additionalBaloonDelay)

			return this.timer % this.additionalBaloonDelay === 0;
		}
	}
	get endGame(){
		if(this.timer > this.gameTime){
			return true;
		}
		return false;
	}

	start(){
		this.gameIsStarted = true;
		this.timer = 0;
		this.score = 0;
		this.countBaloons = 0;
		this.lifesBaloons = [];
		this.baloonArray = [];

		if(!this.tiker){
			this.tiker = setInterval(() => {
				runInAction(() => {
					this.timer = this.timer + 1;

					if(this.timer % 500 === 0){
						if(this.baloonLifeTime > this.minLifeTime)
							this.baloonLifeTime = this.baloonLifeTime - 20;
					}

					if(this.baloonArray.length){

						//console.log('tik-countBaloons: ', this.lifesBaloons.length)
						this.lifesBaloons.forEach((item, i, arr) => {
							item.action();
						})
					}
				})
			}, 10)
		}
	}

	stop(){
		if(this.tiker)
			clearInterval(this.tiker);

		this.gameIsStarted = false;
		this.tiker = null;

		this.baloonArray = [];
		this.lifesBaloons = [];
	}

	increaseScore(){
		this.score++;
	}

	addBaloon(baloon, actionDie){
		if(this.timer < this.gameTime - this.baloonLifeTime/2) {
			const timeToDie = this.timer + this.baloonLifeTime;

			this.countBaloons++;

			this.lifesBaloons.push({
				key: baloon.key,
				timeBorn: this.timer,
				timeToDie: timeToDie,
				action: () => {
					this.checkTimeEvent(
						baloon.key,
						timeToDie,
						() => {
							actionDie(baloon.key)
						})
				}
			});

			this.baloonArray.push(baloon)
		}
	}

	removeBaloon(baloon_id){
		this.baloonArray = this.baloonArray.filter(item => {
			return (item.key !== baloon_id)
		});

		this.lifesBaloons = this.lifesBaloons.filter(item => {
			return (item.key !== baloon_id)
		})
	}

	componentWillUnmount() {
		this.gameIsStarted = false;
	}
}

export default new controller();