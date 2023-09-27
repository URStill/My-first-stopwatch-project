import React from "react"; // this allows us to use react
import "./App.css";
import Video from "./assets/Video/surreal-clock-mechanisms.mp4";

function App() {
  // make a function
  const [time, setTime] = React.useState(0); //time set using State with a default time of zero
  const [timerOn, setTimerOn] = React.useState(false); //get the timer to set to start by pressing on set to false as a default

  React.useEffect(() => {
    //
    let interval = null; // let the interval be declared whether timer is on or off.

    // if the timer is on . . .
    if (timerOn) {
      interval = setInterval(() => {
        // the timer interval is set. . .
        /* `setTime((prevTime) => prevTime + 1)` is updating the state variable `time` by incrementing it
      by 1. It uses the previous value of `time` (referred to as `prevTime`) and adds 1 to it. This
      is done every 1000 milliseconds (1 second) because of the `setInterval` function. So,
      essentially, it is increasing the value of `time` by 1 every second. */
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      // this clears the interval time
      return () => {
        clearInterval(interval);
      };
    }
  }, [timerOn]); //  this is the variable needed to run

  return (
    <div className="App">
      <div id="videoholder">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div id="stopwatch-box-container">


      <div className="stopwatchholder">
        <h1 id="content">{"0" + ((time / 1000) % 60)}</h1>
      </div>
      <div className="stopwatchholder">
        {/* <span>{((time / 10) % 100 )}</span> */}
        {/* <span>{"0" + ((time / 10) % 100 )}</span> */}

        {/* <div> */}
          <button onClick={() => setTimerOn(true)}> Go!</button>
          <button onClick={() => setTimerOn(false)}> Stop!!</button>
          <button onClick={() => setTimerOn(true)}> Keep going!</button>
          <button onClick={() => setTimerOn(0)}> Reset </button>
        {/* </div> */}
      </div>
      </div>
    </div>
  );
}

export default App;

// when the go button is pressed, it make the timer start.
// when the stop button is pressed, it stops the timer.
// when the keep going button is pressed, it make the timer restart.
// when the reset button is pressed, it make the time reset to zero.
