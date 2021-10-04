// Build a "user interface" that uses the observable state.
import {observer} from "mobx-react";
import {Component} from "react";

/**
 * Observer as class
 */
@observer
export class TimerView extends Component {
    timer;
    constructor(props: any) {
        super(props);
        this.timer = props.timer;
        // this.renderInnerComponent = this.renderInnerComponent.bind(this);
        // this.onSelect = this.onSelect.bind(this);
    }

    render() {
        return (
            <div>
                <p>Seconds passed: {this.timer.secondsPassed}</p>
                <button onClick={() => this.timer.reset()}>Reset</button>
            </div>
        );
    }
}

// /**
//  * Observer as constant
//  */
// export const TimerView = observer(({timer}: { timer: Timer }) => (
//     <div>
//         <p>Seconds passed: {timer.secondsPassed}</p>
//         <button onClick={() => timer.reset()}>Reset</button>
//     </div>
// ))
