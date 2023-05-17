'use strict';

export class Game {
    private _canvas: HTMLElement = undefined;
    private _timestamp: number = 0;
    private _events: Event[] = [];

    init = (renderer: HTMLElement) => {
        this._canvas = renderer instanceof HTMLCanvasElement && renderer || (() => { throw new TypeError('Element provided is not of type [Canvas]') })();

        ['keydown', 'mousemove'].forEach(e => { addEventListener(e, event => { this._events.push(event) }) });
        this._canvas.addEventListener('click', event => { this._events.push(event) });

        requestAnimationFrame(this._gameLoop);
    }

    private _gameLoop = (ts: number) => {
        this._input();

        this._update(ts - this._timestamp);
        this._timestamp = ts;

        this._render();

        requestAnimationFrame(this._gameLoop);
    }

    private _input = () => {
        while (this._events.length !== 0) {
            console.log(this._events.shift());
        }
        //TODO
    }

    private _update = (delay: number) => {
        //TODO
    }

    private _render = () => {
        //TODO
    }
}