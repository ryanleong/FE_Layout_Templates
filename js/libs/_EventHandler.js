
EventHandler = {
	events: {},

	// Subscribe to event
	// Example: EventHandler.on('EventName', someFunction);
	on: function (eventName, fn) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fn);
	},

	// Unsubscribe from event
	// Example: EventHandler.off('EventName', someFunction);
	off: function(eventName, fn) {
		if (this.events[eventName]) {
			for (var i = 0; i < this.events[eventName].length; i++) {
				if (this.events[eventName][i] === fn) {
					this.events[eventName].splice(i, 1);
					break;
				}
			}
		}
	},

	// Trigger event
	// Example: EventHandler.emit('EventName', false);
	emit: function (eventName, data) {
		if (this.events[eventName]) {
			this.events[eventName].forEach(function(fn) {
				fn(data);
			});
		}
	}
};
