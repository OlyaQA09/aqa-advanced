function delayedLog(message, delayInMilliseconds) {
	const func = () => {
		console.log(message);
	};
	setTimeout(func, delayInMilliseconds);
}

delayedLog('This message will appear after 3 seconds.', 3000);
delayedLog('Another message after 1 second.', 1000);
