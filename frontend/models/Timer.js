export default class Timer {
    constructor(handler, tickHandler, time) {
        this._handler = handler;
        this._tickHandler = tickHandler;
        this._updateTime = this._time = time;
        this._timerId = null;
        this._on = false;
        this._tick = this._tick.bind(this);
    }

    start() {
        this._time = this._updateTime;
        this._on = true;
        this._update();
        this._tickHandler(this._time);
    }

    stop() {
        clearTimeout(this._timerId);
        this._on = false;
        this._tickHandler(this._time);
    }

    reset() {
        this.stop();
        this.start();
    }

    isOn() {
        return this._on;
    }

    _update() {
        this._timerId = setTimeout(this._tick, 1000);
    }

    _tick() {
        this._time--;
        if (this._time === 0) {
            let result = this._handler();
            if (result instanceof Promise) {
                result
                    .then(() => {
                        this.start();
                    })
            } else {
                this.start();
            }
        } else {
            this._update();
            this._tickHandler(this._time);
        }

    }
};