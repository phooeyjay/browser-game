import KonvaGame from './app';
const elem: HTMLElement | null = document.getElementById('container');
if (elem) {
    let game = new KonvaGame(elem);
}