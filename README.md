# miniclip-8BallPool-trainer
This is a HTML overlay that can help you train your aim on Miniclip's 8 Ball Pool game.

### How to use
1. The overlay is made for the ['focus' webpage](https://www.miniclip.com/games/8-ball-pool-multiplayer/en/focus/) of the game, so make sure to be on that webpage.
2. Open [`code-firefox.js`](https://raw.githubusercontent.com/daniel-barbu/8-Ball-Pool-trainer/master/code-firefox.js) and copy-paste the code to the console of the previously opened webpage.

### Known Issues
1. The resolution has to be 1280x1024 for the overlay to point correctly to the pockets.  
[SOLTUION: **change the resolution** from inside the operating system to 1280x1024 or **change the coordinates** from inside the code (pozPocket array)]
2. You have to copy-paste the code to the console eveytime you want to play.
[SOLTUION: It might be possible to use an add-on like [Tampermonkey](https://www.tampermonkey.net/) to automate this process.]

### Controls
|                                   |          |
|:----------------------------------|:---------|
| ←, ↑, →, ↓ (Arrow Keys) | movement |
| 0 (Numpad)                        | changes between 2px and 10px movement |

*important: if the controls stop working click above or below the game `<canvas>`*

### Screenshot
![screenshot not loaded correctly](/screenshot.png)
