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

// variable for modal menu
var modalMenu = "#modalMenu";

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
    addMenu();
    for (p = 1; p <= playersValue; p++) {
        $(scoreCard).append("<form id = 'player" + p + "' class = 'col-sm-12 col-md-12 col-lg-12 col-xs-12 player" + p + "'></form>");
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


        if (holesValue === "9") {
            $(playerNum).append("<input class='col-sm-1 col-md-1 col-lg-1 col-xs-1 name" + p + "' type='text' placeholder='name' </input>");
            addHandicap();
            for (i = 1; i <= (holesValue / 9); i++) {
                $(playerNum).append("<div class='col-sm-9 col-md-9 col-lg-9 col-xs-9 tray" + i + "'></div>");
                addHoles()
            }
            $(playerNum).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1 finalScore' id= 'finalScore" + p + "'>Score</div>");

        }
        else if (holesValue === "18") {
            $(playerNum).append("<input class='col-sm-1 col-md-1 col-lg-1 col-xs-1 name" + p + "' type='text' placeholder='name' </input>");
            addHandicap();
            for (i = 1; i <= (holesValue / 9); i++) {
                $(playerNum).append("<div class='col-sm-4 col-md-4 col-lg-4 col-xs-4 tray" + i + "'></div>");
                addHoles()
            }
            $(playerNum).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1 finalScore' id= 'finalScore" + p + "'>Score</div>");
        }


    }

}

//this function adds holes to the trays

function addHoles() {
    var holesValue = document.getElementById('numHoles').value;
    var playersValue = document.getElementById('numPlayers').value;
    var trayNum = ".tray" + i;
    $(trayNum).empty();
    if (holesValue === "9") {
        for (h = 1; h <= holesValue; h++) {
            $(trayNum).append("<input type='number' style='text-align: center;'  min = '1' placeholder='" + h + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + h + "'> </input>");
        }
    }
    else if (holesValue === "18") {
        for (h = 1; h <= holesValue / 2; h++) {
            if(trayNum === ".tray2") {
                $(trayNum).append("<input  type='number' style='text-align: center;' min = '1'  placeholder='" + (h+9) + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + (h+9) + "' > </input>");
            } else {
                $(trayNum).append("<input  type='number' style='text-align: center;' min = '1'  placeholder='" + h + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + h + "' > </input>");
            }
        }
        $(trayNum).append("<div class='col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1 col-sm-2 col-md-2 col-lg-2 col-xs-2 score" + i + "'>Score</div>");
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
            $(".extraTray1").append("<input type='number' style='text-align: center;' min = '1' placeholder='" + h + "' class = 'hole" + h + "'> </input>");
        }
    }
    else if (holesValue === "18") {
        for (h = 1; h <= holesValue / 2; h++) {
            $(".extraTray1").append("<input type='number' style='text-align: center;'  min = '1' placeholder='" + h + "' class = 'hole" + h + "'> </input>");
            $(".extraTray2").append("<input type='number' style='text-align: center;'  min = '1' placeholder='" + h*2 + "' class = 'hole" + h*2 + "'> </input>");
        }
    }

}


//this totals up the final scores for the individual players

//this is completely unfinished

function finalScores() {
    var holesValue = document.getElementById('numHoles').value;
    for (a = 1; a <=holesValue; a++){

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

// these 3 functions adds the top menu to the scorecard

function addMenu() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    $(scoreCard).append("<div id = 'menu' class = 'col-sm-12 col-md-12 col-lg-12 col-xs-12'></div>");
    var menu = document.getElementById('menu');
    addMenuTrays()
}


function addMenuTrays() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    $(menu).empty();
    $(menu).append("<div class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1'></div>");
    $(menu).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1'> </div>");

    if (holesValue === "9") {

        for (k = 1; k <= (holesValue / 9); k++) {
            $(menu).append("<div class='col-sm-9 col-md-9 col-lg-9 col-xs-9 menuTray" + k + "'></div>");
            addMenuHoles()
        }

    }
    else if (holesValue === "18") {
        for (k = 1; k <= (holesValue / 9); k++) {
            $(menu).append("<div class='col-sm-4 col-md-4 col-lg-4 col-xs-4 menuTray" + k + "'></div>");
            addMenuHoles()
        }
    }


}

function addMenuHoles() {
    var holesValue = document.getElementById('numHoles').value;
    var menuTrayNum = ".menuTray" + k;
    $(menuTrayNum).empty();
    if (holesValue === "9") {
        for (o = 1; o <= holesValue; o++) {
            $(menuTrayNum).append("<div  class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id='menuObject" + o + "' style='text-align: center'>"+o+" </div>");
        }

    }
    else if (holesValue === "18") {
        for (var o = 1; o <= holesValue / 2; o++) {
            if (menuTrayNum === ".menuTray2") {
                $(menuTrayNum).append("<div class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id= 'menuObject" + (o+9) + "' style='text-align: center'> "+(o+9)+" </div>");
                $("body").append("<div id='holemodal" + o + "' class='modal fade' tabindex='-1' role='dialog'></div>");
                $("").append("<div class='modal-dialog'></div>");
                $("body").append("<div class='modal-content'></div>");
            }
            else {
                $(menuTrayNum).append("<div class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id = 'menuObject" + o + "' style='text-align: center'> "+o+" </div>");
            }
        }
    }
}

function addHandicap () {
    $("#player" + p).append("<input class='col-sm-1 col-md-1 col-lg-1 col-xs-1 handicap" + p + "' type='number' </input>");
}

//weather API Call
var xhttp;
function getMyInfo(value) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var object = JSON.parse(xhttp.responseText);
            document.getElementById("cityName").innerHTML = object.name;
            document.getElementById("weatherStatus").innerHTML = object.weather[0].description;
            document.getElementById("weatherImage").src = "http://openweathermap.org/img/w/" + object.weather[0].icon + ".png";

        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip="+ value + ",us&appid=a4e12bc54b22227bd03bb03c867242d7", true);
    xhttp.send();
}

//golf score Call
var golfInfo= {};
var golfxhttp;
function getGolfInfo(id) {
    golfxhttp = new XMLHttpRequest();
    golfxhttp.onreadystatechange = function() {
        if (golfxhttp.readyState == 4 && golfxhttp.status == 200) {
            golfInfo = JSON.parse(golfxhttp.responseText);
            document.getElementById("menuObject1").innerHTML = golfInfo.course.name;
        }
    };
//update the URL with the ID as I call it dynamically
    golfxhttp.open("GET","https://golf-courses-api.herokuapp.com/courses/" + id,true);
    golfxhttp.send();
}


//selection menu load 

$(window).load(function() {
    $(modalMenu).modal('show');
});


//Close Modal to start game

function closeModal() {
    $(modalMenu).modal('hide');
    getGolfInfo(18300);
}


//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation use this for building geolocation