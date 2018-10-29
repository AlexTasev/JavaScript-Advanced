function timer() {
    let seconds = 0;
    let minutes = 0;
    let interval;
    let isIncrementing = false;

    let startBtn = $("#start-timer");
    let endBtn = $("#stop-timer");

    startBtn.on("click",startTimer);
    endBtn.on("click", stopTimer);

    function startTimer() {
        if (!isIncrementing) {
            isIncrementing = true;
            interval = setInterval(increment, 1000)
        }

        function increment() {
            seconds++;
            if (seconds % 60 === 0) {
                minutes++;
            }
            $("#hours").text(("0" + Math.floor(minutes / 60)).slice(-2));
            $("#minutes").text(("0" + (minutes % 60)).slice(-2));
            $("#seconds").text(("0" + (seconds % 60)).slice(-2));
        }
    }

    function stopTimer() {
        isIncrementing = false;
        clearInterval(interval);
    }
}