class AlarmClock {
	constructor () {
			this.alarmCollection = [];
			this.intervalId = null;
	}

	addClock(time, callback) {
		if(!time || !callback) {
				throw new Error('Отсутствуют обязательные аргументы');
		}else if(this.alarmCollection.some((item) => item.time === this.time)) {
				console.warn('Уже присутствует звонок на это же время');
		}
			this.alarmCollection.push({time, callback, canCall: true});
	}
	
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(call => call.time != time);
	}

	getCurrentFormattedTime() {
		return new Date().getHours() + ':' + new Date().getMinutes();
	}

	start() {
		if(this.intervalId) {
				return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(item => {
				if(item.time === this.getCurrentFormattedTime() && item.canCall) {
					item.canCall = false;
					item.callback();
				}
			});
		}, 1000);

			
	}
	
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(item => {item.canCall = true});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}



