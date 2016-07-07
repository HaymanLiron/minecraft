var tutorial = $('<div/>');
tutorial.addClass("mainTutorialDiv");
$('.main-stripe').append(tutorial);


var listOfInstructions = $('<ol/>');
$('.mainTutorialDiv').append(tutorial);


var instruction1 = $('<li/>');
$(listOfInstructions).append(instruction1);
instruction1.text("Select the tools that you want to use according to the following rules:"<br>
    "The pickaxe can only remove : stones" <br>
    "The axe can only remove : trunk and leaves");

var instruction2 = $('<li/>');
$(listOfInstructions).append(instruction2);
instruction2.text = "Play the game";
