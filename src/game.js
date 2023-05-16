'use strict';

export default class GameApplication {
    //#region Variables
    #canvas; #old_timestamp; 
    /** @type {Event[]} */#event_queue;
    //#endregion

    //#region Methods
    #input; #update; #render; #gameloop;
    begin;
    //#endregion

    constructor (/** @type {HTMLElement} */ renderer) {
        this.#canvas = renderer instanceof HTMLCanvasElement && renderer || (_ => { throw new TypeError(`Element "${renderer}" is not a Canvas node.`) })();
        this.#old_timestamp = 0;
        this.#event_queue = [];

        this.#input = () => {
            while (this.#event_queue.length !== 0) {
                _ = this.#event_queue.shift();
            }
        }

        this.#update = /** @type {number} */ delay => {
            // TODO
        }

        this.#render = () => {
            // TODO
        }

        this.#gameloop = /** @type {number} */ timestamp => {
            this.#input();
    
            this.#update(timestamp - this.#old_timestamp);
            this.#old_timestamp = timestamp;
    
            this.#render();
    
            requestAnimationFrame(this.#gameloop);
        }
        
        this.begin = () => {
            addEventListener('keydown', event => { this.#event_queue.push(event) });
            this.#canvas.addEventListener('click', event => { this.#event_queue.push(event) });
            requestAnimationFrame(this.#gameloop);
        }
    }
}