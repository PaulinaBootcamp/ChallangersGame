var player = document.getElementsByClassName("player");
console.log("check challenger div " + $("#challanger"));


$(player).click(function () {
    console.log("Player is clicked");
    $("#defender").append(this);

});



$(player).click(function () {
    console.log("Player is clicked");
    $("#challenger").append(this);

});





var challenger;
var staging = [];
var defender;
var damage;
var wins = 0;


var characters = {
    "harry": {
        firstName: "Harry",
        lastName: "Potter",
        hp: 100,
        attack: 10,
        counterAttack: 3,
        imageURL: "Harry Potter.PNG",
    },
    "hermione": {
        firstName: "Hermione",
        lastName: "Granger",
        hp: 100,
        attack: 10,
        counterAttack: 3,
        imageURL: "assets\images\Hermione Granger.PNG"
    },
    "ron": {
        firstName: "Ron",
        lastName: "Weasley",
        hp: 100,
        attack: 10,
        counterAttack: 3,
        imageURL: "assets\images\Ron Weasley.PNG"
    }
    ,
    "draco": {
        firstName: "Draco",
        lastName: "Malfoy",
        hp: 100,
        attack: 10,
        counterAttack: 3,
        imageURL: "assets\images\Draco Malfoy.PNG"
    }
}
var renderChars = function (characters) {
    var charDiv = $("<div class='charcter' data-name='" + characters.ron.firstName + "'>");
    var charName = $("<div class='charcter-name'>".text(characters.ron.firstName + " " + characters.ron.lastName));
    var charImage = $("<img alt='Student' class='character-img'>").attr("src", characters.ron.imageURL);
    var charHP = $("<div class='character-HP'>").text(characters.ron.HP);
    charDiv.append(charName).append(charImage).append(charHP);
    $("#characters").append(charDiv);
}


$().append(characters.harry.firstName)
$("#characters").attr("src", characters.harry.imageURL)
