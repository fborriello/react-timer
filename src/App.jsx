import './App.css';
import {TimerView} from "./components/TimerView";
import React from "react";
import {Timer} from "./components/Timer";

export class App extends React.Component {
    timer;

    constructor(props) {
        super(props);
        this.timer = new Timer();
        // Update the 'Seconds passed: X' text every second.
        setInterval(() => {
            this.timer.increase()
        }, 1000)
    }

    render() {
        return (<TimerView timer={this.timer}/>);
    }
}

// export default App
