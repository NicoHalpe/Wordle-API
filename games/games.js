var clock;
const tasks = [];
var interval = 1000;
var intervalId;

clock = new FlipClock($(".clock"), 0, {
	clockFace: "Counter",
	autoStart: true,
});

//connect to event source
var source = new EventSource("https://wordle.nicohalpe.repl.co/gameses");
source.onmessage = function (e) {
	//parse json
	var data = JSON.parse(e.data);
	//document.querySelector("#playing").innerHTML = data.now;
	tasks.push(() => clock.setTime(data.count));
};

startInterval(interval);

function startInterval(_interval) {
	intervalId = setInterval(function () {
		if (tasks.length > 10) {
			document.body.classList.add("fast");
			interval = 50;
			clearInterval(intervalId);
			startInterval(interval);
		}
		const task = tasks.shift();
		if (task) {
			task();
		}
		if (!task && interval !== 1000) {
			document.body.classList.remove("fast");
			interval = 1000;
			clearInterval(intervalId);
			startInterval(interval);
		}
	}, _interval);
}

function getInterval() {
	return interval;
}
