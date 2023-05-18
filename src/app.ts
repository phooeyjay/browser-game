import Konva from 'konva';

export default class KonvaGame {
    private app: Konva.Stage;

    constructor (container: HTMLDivElement) {
        this.app = new Konva.Stage({ container: container.id, width: container.clientWidth, height: container.clientHeight });
        container.addEventListener('resize', () => {
            this.app.width(container.clientWidth);
            this.app.height(container.clientHeight);
        });
    }
}