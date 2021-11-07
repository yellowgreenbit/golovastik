import {makeAutoObservable} from "mobx";

class counter {
	count = 0;
	constructor() {
		makeAutoObservable(this);
	}

	plus(){
		this.count = this.count + 1;
		console.log(this.count)
	}

	minus(){
		this.count = this.count - 1;
	}
}

export default new counter();