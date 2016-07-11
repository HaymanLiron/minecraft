//namespace for game
var minecraft = {};

//background images for board
minecraft.backgroundimages = { //object containing all the type of backgrounds to use for the minecraft board
    "sky": "./images/sky.png",
    "cloud": "./images/cloud.jpg",
    "leaf": "./images/leaf.jpg",
    "tree": "./images/tree.png",
    "rock": "./images/rock.png",
    "grass": "./images/grass.png",
    "dirt": "./images/dirt.png"
};

//matrix used to create the board
minecraft.board = [ //matrice holding all of the information of the board. Use this to create the board
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "cloud", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "cloud", "cloud", "cloud", "cloud", "sky", "cloud", "cloud", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "cloud", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "cloud", "cloud", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "leaf", "leaf", "leaf", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "leaf", "leaf", "leaf", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "leaf", "leaf", "leaf", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "tree", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "sky", "grass", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "rock", "sky", "sky", "tree", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "grass", "grass", "grass", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "rock", "sky", "sky", "tree", "sky", "sky", "rock"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
    ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"]
];

//array that contains the buttons the user can press and relevant info about them
minecraft.userButtons = [
    {
        'toolName': 'pickAxe',
        'image': "./images/pickaxe.png",
        'worksFor': ["rock"]
    },
    {
        'toolName': 'shovel',
        'image': "./images/shovel.png",
        'worksFor': ["grass", "dirt"]
    },
    {
        'toolName': 'axe',
        'image': "./images/axe.png",
        'worksFor': ["tree", "leaf"]
    },
    {
        'toolName': 'lastUsed',
        'image': "",
        'worksFor': []
    }
];

//array that contains information for tutorial instructions
minecraft.tutorialInstructions = [
    {
        'instruction':'Select a pickaxe \n',
        'whereToPlace': '',
        'hasID':true,
        'id':"pickAxe",
        'arrowPlacement':"right"
    },
    {
        'instruction':'Now you can use it on the rock \n',
        'whereToPlace': minecraft.backgroundimages["rock"],
        'hasID':false,
        'arrowPlacement':"right"
    },
    {
        'instruction':'You could also select an axe\n',
        'whereToPlace': '',
        'hasID':true,
        'id':"axe",
        'arrowPlacement':"right"
    },
    {
        'instruction':'Axes don\'t work on dirt! \n',
        'whereToPlace': minecraft.backgroundimages["dirt"],
        'hasID':false,
        'arrowPlacement':"right"
    },
    {
        'instruction':'Best to only use them on trees! \n',
        'whereToPlace': minecraft.backgroundimages["tree"],
        'hasID':false,
        'arrowPlacement':"right"
    },
    {
        'instruction':'You can also use the last thing you removed! \n',
        'whereToPlace': './images/axe.png',
        'hasID':true,
        'id':"lastUsed",
        'arrowPlacement':"right"
    },
    {
        'instruction':'And place it anywhere on the board! \n',
        'whereToPlace': minecraft.backgroundimages["sky"],
        'hasID':false,
        'arrowPlacement':"right"
    }

];



//variable to know the last button the user has pressed
minecraft.currentUserButton = "";


minecraft.getSquareFeatureGivenImageURL= function(imageURL) {
    //this function finds the key in minecraft.backgroundimages for a given imageURL
    //i.e. given a value in that object, it finds the relevant key
    for (var keys in minecraft.backgroundimages){
        if (minecraft.backgroundimages[keys] === imageURL){
            return keys;
        }
    }
    return null;
};

minecraft.flashSquare = function (square, colorClass) {
    //this function: if clicking on a square works, then get the appropriate user button to flash blue
    //if it doesn't work, get the button to flash red

    //need to remove any classes which have already changed the background color
    square.removeClass("gray-background");
    //setInterval function that changes the background color
    var flashBackground = setInterval(function(){
        square.addClass(colorClass);
        //a timeout function to remove that background color
        setTimeout(function() {
            square.removeClass(colorClass);
        }, 200);
    }, 400);
    //a timeout function to turn off this flashing
    setTimeout(function(){
        clearInterval(flashBackground);
        //safety feature to make sure background doesn't stay red or blue
        square.removeClass(colorClass);
        //we use minecraft.currentUserButton in the next line, and not square variable
        //to account for an edge case
        minecraft.currentUserButton.addClass("gray-background");
    }, 1200);
};

minecraft.clickOnBoardSquare = function () {
    //function that handles if a user clicks on a square inside the board
    var lastUsedSquare = $(".userButtonContainer .userButton:last-child");
    if (minecraft.currentUserButton.data("toolName") !== 'lastUsed') { //means that the user has clicked on a tool
        //check if appropriate tool has been selected
        var worksForArray = minecraft.currentUserButton.data("worksFor");
        var squareType = $(this).data("squareFeature");

        if (worksForArray.indexOf(squareType) !== -1) {
            //the tool works on this square
            minecraft.flashSquare(minecraft.currentUserButton, "blue-background");

            lastUsedSquare.css("background-image", "url(" + minecraft.backgroundimages[squareType] + ")");
            lastUsedSquare.data('image', minecraft.backgroundimages[squareType]);
            $(this).css("background-image", "url(./images/sky.png)");
            $(this).data("squareFeature", "sky");
        } else { //tool does not work on this square
            minecraft.flashSquare(minecraft.currentUserButton, "red-background");
        }
    } else { //user has clicked on lastUsed square
        // change board square to lastUsed
        if (lastUsedSquare.data('image') !== "") {
            $(this).css("background-image", 'url(' + minecraft.currentUserButton.data('image') + ')');

            //we need to update the "squareFeature" data to its new value now
            $(this).data("squareFeature", minecraft.getSquareFeatureGivenImageURL(minecraft.currentUserButton.data('image')));
            lastUsedSquare.css("background-image", "");
            lastUsedSquare.data('image', "");
        }
    }
};

minecraft.clickOnUserButton = function () {
    //function that handles if the user clicks on a button
    minecraft.currentUserButton.removeClass("gray-background");
    minecraft.currentUserButton = $(this);
    $(this).addClass("gray-background");
};

minecraft.createBoard = function () {
    //create the board by iterating through the predefined matrix
    var boardContainer = $(".boardContainer");
    for (var i = 0; i < minecraft.board.length; i++) {
        for (var j = 0; j < minecraft.board[i].length; j++) {
            //create a div for the current square in the matrix
            var boardSquare = $("<div/>");
            boardSquare.on('click', minecraft.clickOnBoardSquare);
            boardSquare.addClass("boardSquare");
            boardSquare.data("squareFeature", minecraft.board[i][j]);
            boardSquare.css("background-image", "url(" + minecraft.backgroundimages[minecraft.board[i][j]] + ")");
            boardContainer.append(boardSquare);
        }
        //add new line so that next loop starts on new line
        boardContainer.append($("<br/>"));
    }
};

minecraft.createButtons = function () {
    //create buttons that the user uses to change the board
    for (var i = 0; i < minecraft.userButtons.length; i++) {
        //create a div, with appropriate background image
        //and data that tells you what the square works for
        var userButton = $("<div/>");
        userButton.on('click', minecraft.clickOnUserButton);
        userButton.addClass("userButton");
        userButton.attr("id", minecraft.userButtons[i]["toolName"]);
        //iterate through keys and add this data to the HTML element
        for (var keys in minecraft.userButtons[i]) { //keys is the property of the object we are aiming

            //add the key and value as information that the HTML element holds
            userButton.data(keys, minecraft.userButtons[i][keys]);

        }
        userButton.css("background-image", "url(" + minecraft.userButtons[i]["image"] + ")");
        $('.userButtonContainer').append(userButton);
    }
    //initialise the currentUserButton to be the lastUsed tile
    //this is done to prevent some bugs
    minecraft.currentUserButton = $(".userButtonContainer .userButton:last-child");
};


minecraft.hideInstructions = function () {
    $("#instructionsModal").hide();
};

minecraft.showInstructions = function () {
    $("#instructionsModal").show();
};



minecraft.createTutorialBubble = function (tutObj) {
    //if there are no more instructions left, we want to tell the user they have finished the tutorial, and leave this function
    if (minecraft.currentTutorialInstruction >= minecraft.tutorialInstructions.length){

        return;
    }
    //find where to place
    if (tutObj["hasID"]){
        var whereToPlace = $("#" + tutObj["id"]);
    } else {
        whereToPlace = minecraft.getAllDivsWithBGImage("url(\"" + tutObj["whereToPlace"] + "\")").eq(0);
    }

    var rightAdj = whereToPlace.width() / 2;
    // var topAdj = whereToPlace.height() / 2; //commented out because I don't think I need to change the height, but I have intentionally kept the functionality
    var tutorialBubble = $("<div/>")
        .text(tutObj["instruction"])
        .addClass("tutorial-bubble")
        .addClass(tutObj["arrowPlacement"])
        //we need to customise the right: and left: css attributes so the bubble appears correctly
        .css("right", "" + rightAdj + "px");
        // .css("top", "" + topAdj + "px");

    //we only want a nextStepButton if it's not the last instruction
    if (minecraft.currentTutorialInstruction < minecraft.tutorialInstructions.length - 1){
        var nextStepButton = $("<button/>")
            .text("Next step")
            .on("click", function(){
                tutorialBubble.hide();
                minecraft.runTutorial();
            });
        tutorialBubble.append(nextStepButton);

    }
    var skipToGameButton = $("<button/>")
        .text("Skip To Game")
        .on("click", function(){
            tutorialBubble.hide();
        });
        tutorialBubble.append(skipToGameButton);

    whereToPlace.append(tutorialBubble);
    minecraft.currentTutorialInstruction++;
    return tutorialBubble;

};

minecraft.getAllDivsWithBGImage = function (BGImage) {
    return $('div').filter(function(){
        return this.style.backgroundImage === BGImage;
    });
};

minecraft.currentTutorialInstruction = 0;

minecraft.runTutorial = function () {
    minecraft.createTutorialBubble(minecraft.tutorialInstructions[minecraft.currentTutorialInstruction]);
};

minecraft.init = function(){
    $(document).ready(function(){
        minecraft.createBoard();
        minecraft.createButtons();
    });
};

minecraft.init();



