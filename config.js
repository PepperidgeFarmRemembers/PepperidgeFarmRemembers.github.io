const config = {
    plexAddress: "http://192.168.1.234:32400",      // Your plex server ip address, local network or remote, don't forget to enable "usePlex" down below
    plexToken: "http://192.168.1.234:32400/?X-Plex-Token=DJ7x1onx6f5jW6qPHYEMstu",            // Your plex authentication token, how to find it: https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/

    imageInterval: 10000,                           // Time between images in milliseconds
    transitionDuration: 1500,                       // Duration for the fadeover from one image to another milliseconds, put 0 to disable fading

    showTitle: true,                                // 'false' to hide the Movie/TV Show Title
    titleColor: "#ffffff",                          // hex as "#ff0000" for red; rgb as "rgb(0,0,255)" for blue or color name eg "green"
    titleOpacity: 0.8,                              // Between 0.0 and 1.0, or 0% and 100% (1/100% is visible, 0/0% is invisible)
    titlePosition: "left",                          // "left", "center", "right"

    // Animations are selected randomly from this list, you can remove some or even all
    // Available: ["zoomIn","zoomOut","moveRight","moveLeft","moveUp","moveDown","goGray","goColor"]
    animations: ["zoomIn", "zoomOut", "moveRight", "moveLeft", "moveUp", "moveDown", "goGray", "goColor"],

    usePlex: true,                                  // enable this with 'true' after you put in your plex adress and token; disable with 'false', will use extraImages and links if provided below
    useExtraImages: true,
    useExtraLinks: true,

    // You can use local images which will be mixed in with the other artworks
    // Put your images into the folder "extraImages", then add them to this list in the following format:
    // ["<Movie/Show Title>", "<filename.jpg>"],
    extraImages: [
        ["Plex from local file", "background.png"],
        ["Plex from local file 2", "background.png"],
        ["Apex", "nlc.jpg"],
    ],

    // Alternatively you can use direct links to images from the web
    // ["<Movie/Show Title>", "<URL>"],
    extraLinks: [
        ["The Office", "https://i.imgur.com/sEkDRJO.jpg"],
        ["Stranger Things", "https://i.imgur.com/fQIsmxQ.jpg"],
    ],

    librariesToExclude: []                          // Screensaver will use all libraries of the type "Movies" and "TV Shows" it can find, put the library in this list to ignore it; format: ["LibraryName1", "LibraryName2"],
};