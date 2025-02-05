function pageLoad({
    startTime,
    endTime,
    duration,
    onProgress
}) {

    const performanceTiming = window.performance.timing,
        time = ((((performanceTiming.loadEventEnd - performanceTiming.navigationStart) * -1) / 1000) % 50) * 10;

    let current = startTime,
        increment = endTime > startTime ? 1 : -1,
        stepTime = Math.abs(Math.floor((time + duration) / 100));

    const timer = setInterval(function() {
        current += increment;
        onProgress(current);
        if (current >= endTime) {
            clearInterval(timer);
        }
    }, stepTime)
    return timer;
}

export default pageLoad;