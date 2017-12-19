class Clock {
	constructor() {
		this.date = new Date();
	}

	addZeroNumber(number) {
		if (number < 10 && number > 0) return `0${number}`;

		return number;
	}
	
	getDateNow() {
		return `${this.date.getFullYear()}-${this.addZeroNumber(this.date.getMonth())}-${this.addZeroNumber(this.date.getDay())}`;
	}
}

export default Clock;