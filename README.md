#
1. show the problem of screen freezing when counting ( App-frozen.js).
    JS is single threaded. 
    Web Workers are on a diff thread
2. Talk about Promises VS Web Worker
    Promises. process code when nothing else is running. But if promise code is doing some heavy lifting screen will freeze.   even loop executes code 

    Web Worker: is actually on another thread completey. Another core /another cpu 
3. 