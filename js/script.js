/**
 * Created by loganhendricks on 5/18/16.
 */


//variable to access Score Card Div throughout javascript
var scoreCard = document.getElementById('scoreCard');

//value set up for building in functionality for different courses
var courseValue = document.getElementById('courseSelect').value;

//variables set up for timer function
var seconds = 1;
var teetime;


//these variables connect to all of the forms


var player1 = document.forms["player1"];
var player2 = document.forms["player2"];
var player3 = document.forms["player3"];
var player4 = document.forms["player4"];
var player5 = document.forms["player5"];
var extraPlayer = document.forms["player6"];

var finalScore1 = document.getElementById("finalScore1");


//this function adds the different players to the Score Card Div
function addPlayers() {
    var holesValue = document.getElementById('numHoles').value;
    var playersValue = document.getElementById('numPlayers').value;
    $(scoreCard).empty();
    for (p = 1; p <= playersValue; p++) {
        $(scoreCard).append("<form id = 'player" + p + "' class = 'jumbotron player col-sm-12 col-md-12 col-lg-12 col-xs-12" + p + "'></form>");
    }
    addTrays();

}

//this function adds trays to the Divs so we can seperate the back nine from the front nine

function addTrays() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    for (p = 1; p <= playersValue; p++) {
        var playerNum = "#player" + p;
        $(playerNum).empty();
        $(playerNum).append("<input class='col-sm-1 col-md-1 col-lg-1 col-xs-1 name" + p + "' type='text' placeholder='name' </input>");

        if (holesValue === "9") {

            for (i = 1; i <= (holesValue / 9); i++) {
                $(playerNum).append("<div class='col-sm-10 col-md-10 col-lg-10 col-xs-10 tray" + i + "'></div>");
                addHoles()
            }

        }
        else if (holesValue === "18") {
            for (i = 1; i <= (holesValue / 9); i++) {
                $(playerNum).append("<div class='col-sm-4 col-md-4 col-lg-4 col-xs-4 tray" + i + "'></div>");
                addHoles()
            }
        }
        $(playerNum).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1 finalScore' id= 'finalScore" + p + "'>Score</div>");

    }

}

//this function adds holes to the trays

function addHoles() {
    var holesValue = document.getElementById('numHoles').value;
    var trayNum = ".tray" + i;
    $(trayNum).empty();
    if (holesValue === "9") {
        for (h = 1; h <= holesValue; h++) {
            $(trayNum).append("<input type='number' style='text-align: center;'  min = '1' placeholder='" + h + "' class = 'hole col-sm-1 col-md-1 col-lg-1 col-xs-1'> </input>");
        }
        // div to show total value     $(trayNum).append("<div class = 'hole'> </div>");
    }
    else if (holesValue === "18") {
        for (h = 1; h <= holesValue / 2; h++) {
            $(trayNum).append("<input  type='number' style='text-align: center;' min = '1'  placeholder='" + h + "' class = 'hole col-sm-1 col-md-1 col-lg-1 col-xs-1'> </input>");
        }
    }
}

//this function adds an extra player mid game if needed

function addPlayer() {
    var holesValue = document.getElementById('numHoles').value;
    $(scoreCard).append("<form  id='extraPlayer' class = 'jumbotron extraPlayer col-sm-12 col-md-12 col-lg-12 col-xs-12'></form>");
    var extraPlayer = ".extraPlayer";
    $(extraPlayer).append("<input class='col-sm-1 col-md-1 col-lg-1 col-xs-1 extraName' type='text' placeholder='name' </input>");
    $(extraPlayer).append("<div class='col-sm-5 col-md-5 col-lg-5 col-xs-5 extraTray1'> </div>");
    $(extraPlayer).append("<div class='col-sm-5 col-md-5 col-lg-5 col-xs-5 extraTray2'> </div>");

    if (holesValue === "9") {
        for (h = 1; h <= holesValue; h++) {
            $(".extraTray1").append("<input type='number' style='text-align: center;' min = '1' placeholder='" + h + "' class = 'hole'> </input>");
        }
    }
    else if (holesValue === "18") {
        for (h = 1; h <= holesValue / 2; h++) {
            $(".extraTray1").append("<input type='number' style='text-align: center;'  min = '1' placeholder='" + h + "' class = 'hole'> </input>");
            $(".extraTray2").append("<input type='number' style='text-align: center;'  min = '1' placeholder='" + h + "' class = 'hole'> </input>");
        }
    }

}


//this totals up the final scores for the individual players

//this is completely unfinished

function finalScores () {
    for (var t in player1) {
        var finalTotal1 = player1[t];
    }
}



//this is the timer function

function getTeeTime() {
    teetime = document.getElementById("countdownSelect").value;
}

function countdownTimer() {
    var thetimer = setInterval(function () {
        clocktick()
    }, 1000);
}

function clocktick() {
    if (seconds > 0) {
        seconds--;
    }
    else if (teetime > 0) {
        teetime--;
        seconds = 60;
        seconds--;
    }

    if (seconds < 10) {
        document.getElementById("countdownDisplay").innerHTML = teetime + ":0" + seconds;
    }
    else {
        document.getElementById("countdownDisplay").innerHTML = teetime + ":" + seconds;
    }
}