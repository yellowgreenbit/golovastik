import {makeAutoObservable, runInAction} from "mobx";
import styles from "./gamebaloon.module.scss";

class controller {

	gameIsStarted = false;
	tiker = null;
	timer = 0;
	score = 0;
	countBaloons = 0;
	lifesBaloons = [];
	baloonArray = [];

	checkTimeEvent = (timeToAction, action) =>{
		if(timeToAction < this.timer){
			action();
		}
	}

	constructor() {
		makeAutoObservable(this);
	}

	start(){
		this.gameIsStarted = true;

		if(!this.tiker){
			this.tiker = setInterval(() => {
				runInAction(() => {
					this.timer = this.timer + 1;
					if(this.baloonArray.length){
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
		this.timer = 0;
		this.score = 0;
		this.countBaloons = 0;
		this.baloonArray = [];
		this.lifesBaloons = [];
	}

	increaseScore(){
		this.score++;
	}

	prepareBaloon(baloon_id, actionDie){
		const timeToDie = this.timer + 100;

		this.lifesBaloons.push({
			id: baloon_id,
			timeBorn: this.timer,
			timeToDie: timeToDie,
			action: () => {
				this.checkTimeEvent(
					timeToDie,
					()=>{ actionDie(baloon_id) })
			}
		});
	}

	addBaloon(baloon){
		this.countBaloons++;
		this.baloonArray.push(baloon)
	}

	removeBaloon(baloon_id){
		this.baloonArray = this.baloonArray.filter(item => {
			return (item.key !== baloon_id)
		})
	}

	componentWillUnmount() {
		this.gameIsStarted = false;

	}


}

export default new controller();