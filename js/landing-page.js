var tutorial = $('<div/>');
tutorial.addClass("mainTutorialDiv");
$('.main-stripe').append(tutorial);


var listOfInstructions = $('<ol/>');
listOfInstructions.addClass("liste");
$('.mainTutorialDiv').append(listOfInstructions);


var instruction1 = $('<li/>');
instruction1.addClass('instruction1');
$(listOfInstructions).append(instruction1);
instruction1.text("Select the tools that you want to use according to the following rules:  The pickaxe can only remove : stone, The axe can only remove : trunk and leaves, The shovel can only remove : grass and dirt");

var instruction2 = $('<li/>');
$(listOfInstructions).append(instruction2);
instruction2.text("Play the game");


$('#instructions').on('click',function () { // TODO Try with the hide() method. Hide the tutorial div and on click make it appears
    // if($('.mainTutorialDiv').display === none) {
        $('.mainTutorialDiv').css('display', 'inline-block');
    // }
    // else{
    //     $('.mainTutorialDiv').css('display', 'none');
    // }
});