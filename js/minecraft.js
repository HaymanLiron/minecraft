/**
 * Created by itc_user on 7/5/2016.
 */

var minecraft = {};
//20 x 20 matrix

minecraft.backgroundimages = {
    "sky": "../images/sky.png",
    "cloud": "../images/cloud.jpg",
    "leaf":"../images/leaf.jpg",
    "tree":"../images/tree.png",
    "rock":"../images/rock.png",
    "grass":"../images/grass.png",
    "dirt":"../images/dirt.png"
};

minecraft.board = [
    ["sky", "sky"],
    ["cloud", "cloud"],
    ["tree", "leaf"],
    ["rock", "sky"],
    ["dirt", "grass"]
];

//create the board in javascript
for (var i = 0; i < minecraft.board.length; i++){
    for (var j = 0; j < minecraft.board[i].length; j++){
        //create div
        var boardSquare = $("<div/>");
        boardSquare.addClass("boardSquare");
        boardSquare.css("background-image", "url(" + minecraft.backgroundimages[minecraft.board[i][j]] + ")");
       //add background image to div dependent on the value of the matrix in that square
        // boardSquare.text(minecraft.board[i][j]);


        $('body').append(boardSquare);

    }
    $("body").append($("<br/>"));
    //add new line
}

