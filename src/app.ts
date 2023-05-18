import Konva from 'konva';

export default class KonvaGame {
    private app: Konva.Stage;

    constructor (container: HTMLElement) {
        this.app = container instanceof HTMLDivElement && container.id === 'container' && new Konva.Stage({ 
            container: container.id, 
            width: container.clientWidth, 
            height: container.clientHeight 
        }) || (() => { throw new Error('Container is not a <div> element, or its "id" attribute is not "container"')})();
    }
}