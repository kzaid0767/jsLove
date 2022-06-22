class Timer {
    constructor(durationInput, startButton, pauseButton, resetButton,callbacks) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        this.resetButton = resetButton
        if(callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onReset = callbacks.onReset
        }

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
        this.resetButton.addEventListener('click', this.reset)
    }

    //using arrow to get the correct value of this
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.interval = setInterval(this.tick, 10) //setInterval has a return value of id to it     
    }

    pause = () => {
        clearInterval(this.interval)
    }
    reset = () => {
        clearInterval(this.interval)
        this.durationInput.value = 30
        this.onReset()
       // this.durationInput.value = 30
    }

    tick = () => {
    //timeRemaining becomes function with getters & setters
        if (this.timeRemaining <= 0) {
            this.pause()
            if (this.onComplete){
                this.onComplete()
            }
        } else {
            this.timeRemaining = this.timeRemaining - .01
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }  
        }
    }

    get timeRemaining() {                              //getters and setters
        return parseFloat(this.durationInput.value) // so as to suppport decimals in the timer
    }

    set timeRemaining(time) {                        //argument of time will be set as timeRemaining
        this.durationInput.value = time.toFixed(2)      //rounds to 2 decimal places
    }
}