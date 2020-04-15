# 8-Ball-Pool-trainer
This is a HTML overlay that can help you train your aim on Miniclip's 8 Ball Pool game.

Only tested on _Firefox 74.0 (64-bit)_ with a _1280x1024_ monitor. The pocket coordinates are in pixels, thus if it is used with a different resolution monitor the easiest way would be to **change the resolution** from inside the operating system to 1280x1024 **or** to the **change the coordinates** from inside the code (the pozPocket array).

### Installation
1. The overlay is made for the ['focus' webpage](https://www.miniclip.com/games/8-ball-pool-multiplayer/en/focus/) of the game, so make sure to be on that webpage.
2. After that, open the [raw `code-firefox.js`](https://raw.githubusercontent.com/daniel-barbu/8-Ball-Pool-trainer/master/code-firefox.js) and copy-paste it to the console of the previously opened webpage.

This has to be done everytime you open the game. However, it might be possible to use an add-on like [Tampermonkey](https://www.tampermonkey.net/) to automate this process.

### Controls
|                                   |          |
|:----------------------------------|:---------|
| Left, Right, Up, Down(Arrow Keys) | movement |
| 0 (Numpad)                        | changes between 2px and 10px movement |

*important: if the controls stop working click above or below the game `<canvas>`*

### Screenshot
![screenshot not loaded](https://i.ibb.co/YZ1QGSD/Untitled.png)
