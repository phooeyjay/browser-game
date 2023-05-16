'use strict';

export const initialize = (/** @type {HTMLElement} */renderer) => {
    let canvas = renderer instanceof HTMLCanvasElement && renderer || (_ => { throw new TypeError(`Element "${renderer}" is not a Canvas node.`) })();
    let old_timestamp = 0;
    /** @type {Event[]} */ let event_queue = [];

    const input = () => {
        while (event_queue.length !== 0) {
            let event = event_queue.shift();
            console.log(event);
        }
    }

    const update = /** @type {number} */ delay => {
        // TODO
    }

    const render = () => {
        // TODO
    }

    const gameloop = /** @type {number} */ timestamp => {
        input();

        update(timestamp - old_timestamp);
        old_timestamp = timestamp;

        render();

        requestAnimationFrame(gameloop);
    }

    return {
        begin: () => {
            addEventListener('keydown', event => { event_queue.push(event) });
            canvas.addEventListener('click', event => { event_queue.push(event) });
            requestAnimationFrame(gameloop);
        }
    }
}