var challenger = [];
var defender = [];
var staging = [];



// creates an array of objects for each of the characters
var characters = [
    {
        firstName: "Harry",
        lastName: "Potter",
        hp: 130,
        attack: 40,
        counterAttack: 15,
        imageURL: "assets/images/Harry Potter.PNG",
    },
    {
        firstName: "Hermione",
        lastName: "Granger",
        hp: 150,
        attack: 50,
        counterAttack: 20,
        imageURL: "assets/images/Hermione Granger.PNG"
    },
    {
        firstName: "Ron",
        lastName: "Weasley",
        hp: 110,
        attack: 7,
        counterAttack: 7,
        imageURL: "assets/images/Ron Weasley.PNG"
    }
    ,
    {
        firstName: "Draco",
        lastName: "Malfoy",
        hp: 140,
        attack: 20,
        counterAttack: 17,
        imageURL: "assets/images/Drako Malfoy.PNG"
    }
]

for (var i = 0; i < characters.length; i++) {
    $("#characters").append(`<div class="col-md-3 text-center "><div class="player_card" id="${characters[i].firstName}"><p>${characters[i].firstName.toString()} ${characters[i].lastName.toString()}</p><p><img class="img-fluid charImg" style="height: 100px" src="${characters[i].imageURL}"</p><p>HP ${characters[i].hp}</p></div></div>`)

}

var challenger = [];


$(".player_card").on("click", function () {

    // if there is no challenger yet, assign the challenger with first click
    if (challenger.length == 0) {

        //appends player card div to challenger div
        $("#challenger").append(this);

        //pushes first name of teh character into the challanger array
        challenger.push($(this).attr('id'));
        console.log(challenger);

        //empties original characters setup
        $("#characters").empty();

        //moves charachters that are not in challanger field to staging div
        for (var i = 0; i < characters.length; i++) {
            console.log("Characters i " + characters[i].firstName);
            console.log("Challenger " + challenger[0]);

            // only append charachters taht are not challangers
            if (characters[i].firstName !== challenger[0]) {

                $("#staging").append(`<div class="col-md-3 text-center "><div class="player_card"><p>${characters[i].firstName.toString()} ${characters[i].lastName.toString()}</p><p><img class="img-fluid charImg" style="height: 100px" src="${characters[i].imageURL}"</p><p>HP ${characters[i].hp}</p></div></div>`);
                $("#stagig").empty(this)
            }
            else { };

        }

    }
    else {
        $("#defender").append(this);
        challenger.push(this);
        console.log(defender);
    }
});