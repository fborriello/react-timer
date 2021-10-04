import {action, makeAutoObservable} from 'mobx'

// Model the application state.
export class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    @action
    increase() {
        this.secondsPassed += 1
    }

    @action
    reset() {
        this.secondsPassed = 0
    }
}
