/**
 * Created by itc_user on 7/5/2016.
 */

var minecraft = {};
//20 x 20 matrix

minecraft.backgroundimages = { //object containing all the type of backgrounds to use for the minecraft board
    "sky": "./images/sky.png",
    "cloud": "./images/cloud.jpg",
    "leaf": "./images/leaf.jpg",
    "tree": "./images/tree.png",
    "rock": "./images/rock.png",
    "grass": "./images/grass.png",
    "dirt": "./images/dirt.png"
};

minecraft.board = [
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


minecraft.currentUserButton = "";

minecraft.clickOnBoardSquare = function () {
    //check if appropriate tool has been selected
    var worksForArray = minecraft.currentUserButton.data("worksFor");
    var squareType = $(this).data("squareFeature");
    if (worksForArray.indexOf(squareType) !== -1){
        //the tool works on this square
        //TODO: add appropriate functionality
    }
};

minecraft.clickOnUserButton = function () {
    minecraft.currentUserButton = $(this);
};

minecraft.createBoard = function () {
    //create the board in javascript
    for (var i = 0; i < minecraft.board.length; i++) {
        for (var j = 0; j < minecraft.board[i].length; j++) {
            //create div
            var boardSquare = $("<div/>");
            boardSquare.on('click', minecraft.clickOnBoardSquare);
            boardSquare.addClass("boardSquare");
            boardSquare.data("squareFeature", minecraft.board[i][j]);
            boardSquare.css("background-image", "url(" + minecraft.backgroundimages[minecraft.board[i][j]] + ")");
            $('.boardContainer').append(boardSquare);
        }
        //add new line
        $(".boardContainer").append($("<br/>"));
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
        //iterate through keys and add this data to the HTML element
        for (var keys in minecraft.userButtons[i]) { //keys is the property of the object we are aiming
            if (minecraft.userButtons[i].hasOwnProperty(keys)) {
                //add the key and value as information that the HTML element holds
                userButton.data(keys, minecraft.userButtons[i][keys]);
            }
        }
        userButton.css("background-image", "url(" + minecraft.userButtons[i]["image"] + ")");
        $('.userButtonContainer').append(userButton);
    }
};

minecraft.createBoard();
minecraft.createButtons();
