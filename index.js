function printTimeForTwoMinutes() {
  return new Promise((resolve) => {
    const printCurrentTime = () => {
      const now = new Date();
      console.log(now.toLocaleTimeString());
    };

    // Print the current time immediately
    printCurrentTime();

    // Set interval to print time every 10 seconds
    const intervalId = setInterval(printCurrentTime, 10000);

    // Stop the interval after 2 minutes (120000 ms)
    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Execution stopped after 2 minutes.");
      resolve();
    }, 120000);
  });
}

module.exports = { printTimeForTwoMinutes };
