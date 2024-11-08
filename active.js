const robot = require('robotjs');

function keepActive() {
  // Send a keypress event here
  // For example, to simulate pressing the 'a' key:

  robot.keyTap('shift');
console.log("Tapping shift at " + new Date())
  // Adjust the interval to control how often the keypress is sent (in milliseconds)
  setTimeout(keepActive, 250000); // Every 250 second
}

keepActive(); // Start the infinite loop

