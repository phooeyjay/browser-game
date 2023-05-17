abstract class UIElement {
    private _eventHandlers: { [event: string] : Function } = {};
    size: [number, number] = [0, 0];
    drawSettings: {} = {};

    
    constructor (xsize: number, ysize: number, drawSettings: {}) { 
        this.size = [xsize, ysize]; 
        this.drawSettings = drawSettings;
    }

    executeAction = (event: string) => { if (event in this._eventHandlers) (this._eventHandlers[event])(); }
    registerAction = (event: string, action: Function) => this._eventHandlers = { ...this._eventHandlers, [event] : action };
}