const path = require('node:path');

module.exports = {
    mode: 'none',
    entry: './src/game.js',
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'dist'),
    }
}