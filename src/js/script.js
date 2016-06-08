/**
 * Created by loganhendricks on 5/18/16.
 */


//variable to access Score Card Div throughout javascript
var scoreCard = document.getElementById('scoreCard');

//variables set up for timer function
var seconds = 1;
var teetime;

// variable for modal menu
var modalMenu = "#modalMenu";


//this function adds the different players to the Score Card Div
function addPlayers() {
    var holesValue = document.getElementById('numHoles').value;
    var playersValue = document.getElementById('numPlayers').value;
    $(scoreCard).empty();
    addMenu();
    for (p = 1; p <= playersValue; p++) {
        $(scoreCard).append("<form id = 'player" + p + "' class = 'col-sm-12 col-md-12 col-lg-12 col-xs-12 player defaultColor" + p + "'></form>");
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
            addSkill();
            selectPlayer();

            for (i = 1; i <= (holesValue / 9); i++) {
                $(playerNum).append("<div id= 'tray" + i + "' class='col-sm-8 col-md-8 col-lg-8 col-xs-8 tray" + i + "'></div>");
                addHoles()
            }
            $(playerNum).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1 finalScore' id= 'finalScore" + p + "'>Score</div>");

        }
        else if (holesValue === "18") {
            $(playerNum).append("<input class='col-sm-1 col-md-1 col-lg-1 col-xs-1 name" + p + "' type='text' placeholder='name' </input>");
            addSkill();
            selectPlayer();
            for (i = 1; i <= (holesValue / 9); i++) {
                $(playerNum).append("<div id= 'tray" + i + "' class='col-sm-4 col-md-4 col-lg-4 col-xs-4 tray" + i + "'></div>");
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
            $(trayNum).append("<input type='number' oninput='finalScores()' style='text-align: center;'  min = '1' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + h + "'> </input>");
        }
    }
    else if (holesValue === "18") {
        for (h = 1; h <= holesValue / 2; h++) {
            if (trayNum === ".tray2") {
                $(trayNum).append("<input  type='number' oninput='finalScores()' style='text-align: center;' min = '1'  class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + (h + 9) + "' > </input>");
            } else {
                $(trayNum).append("<input  type='number' oninput='finalScores()' style='text-align: center;' min = '1'  class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + h + "' > </input>");
            }
        }
        $(trayNum).append("<div class='col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1 col-sm-2 col-md-2 col-lg-2 col-xs-2 score" + i + "'>Score</div>");
    }
}

//this function adds an extra player mid game if needed
// This function was becoming rather difficult to support, and may be eventually removed.
/*
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

 */
//this totals up the final scores for the individual players

function finalScores() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    for (thePlayer = 1; thePlayer <= playersValue; thePlayer++) {
        for (theTray = 1; theTray <= holesValue / 9; theTray++) {
            if (holesValue === '9') {
                document.getElementById('finalScore' + thePlayer).innerHTML = (+document.getElementsByClassName('hole1')[(thePlayer - 1)].value + +document.getElementsByClassName('hole2')[(thePlayer - 1)].value + +document.getElementsByClassName('hole3')[(thePlayer - 1)].value + +document.getElementsByClassName('hole4')[(thePlayer - 1)].value + +document.getElementsByClassName('hole5')[(thePlayer - 1)].value + +document.getElementsByClassName('hole6')[(thePlayer - 1)].value + +document.getElementsByClassName('hole7')[(thePlayer - 1)].value + +document.getElementsByClassName('hole8')[(thePlayer - 1)].value + +document.getElementsByClassName('hole9')[(thePlayer - 1)].value);

            }
            if (holesValue === '18') {
                var firstNine = (+document.getElementsByClassName('hole1')[(thePlayer - 1)].value + +document.getElementsByClassName('hole2')[(thePlayer - 1)].value + +document.getElementsByClassName('hole3')[(thePlayer - 1)].value + +document.getElementsByClassName('hole4')[(thePlayer - 1)].value + +document.getElementsByClassName('hole5')[(thePlayer - 1)].value + +document.getElementsByClassName('hole6')[(thePlayer - 1)].value + +document.getElementsByClassName('hole7')[(thePlayer - 1)].value + +document.getElementsByClassName('hole8')[(thePlayer - 1)].value + +document.getElementsByClassName('hole9')[(thePlayer - 1)].value);
                var secondNine = (+document.getElementsByClassName('hole10')[(thePlayer - 1)].value + +document.getElementsByClassName('hole11')[(thePlayer - 1)].value + +document.getElementsByClassName('hole12')[(thePlayer - 1)].value + +document.getElementsByClassName('hole13')[(thePlayer - 1)].value + +document.getElementsByClassName('hole14')[(thePlayer - 1)].value + +document.getElementsByClassName('hole15')[(thePlayer - 1)].value + +document.getElementsByClassName('hole16')[(thePlayer - 1)].value + +document.getElementsByClassName('hole17')[(thePlayer - 1)].value + +document.getElementsByClassName('hole18')[(thePlayer - 1)].value);

                document.getElementsByClassName('score1')[thePlayer - 1].innerHTML = firstNine;
                document.getElementsByClassName('score2')[thePlayer - 1].innerHTML = secondNine;
                document.getElementById('finalScore' + thePlayer).innerHTML = (+firstNine + +secondNine);
            }
        }

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


// Add the Menu
function addMenu() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    $(scoreCard).append("<div id = 'menu' class = 'col-sm-12 col-md-12 col-lg-12 col-xs-12'></div>");
    var menu = document.getElementById('menu');
    addMenuTrays()
}

//Add the trays to the menu

function addMenuTrays() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    $(menu).empty();
    $(menu).append("<div class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1'></div>");
    $(menu).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1'> </div>");
    $(menu).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1'> </div>");

    if (holesValue === "9") {

        for (k = 1; k <= (holesValue / 9); k++) {
            $(menu).append("<div class='col-sm-8 col-md-8 col-lg-8 col-xs-8 menuTray" + k + "'></div>");
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

// Add the menu hole numbers
function addMenuHoles() {
    var holesValue = document.getElementById('numHoles').value;
    var menuTrayNum = ".menuTray" + k;
    var modalArea = "#modalArea";
    $(menuTrayNum).empty();
    if (holesValue === "9") {
        $(modalArea).empty();
        for (o = 1; o <= holesValue; o++) {
            $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + o + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id='menuObject" + o + "' style='text-align: center'>" + o + " </button>");
            var holeModal = "holemodal" + o;
            var modalDialog = "modal-dialog" + o;
            var modalContent = "modal-content" + o;
            $(modalArea).append("<div id=" + holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + o + "</h4></div><div class = 'modal-body" + o + "'><div id='map" + o + "' class='map col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10'></div> <div class = 'modal" + o + " col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");
        }

    }
    else if (holesValue === "18") {
        for (var o = 1; o <= holesValue / 2; o++) {
            if (menuTrayNum === ".menuTray2") {
                $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + (o + 9) + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id= 'menuObject" + (o + 9) + "' style='text-align: center'> " + (o + 9) + " </button>");
                var holeModal = "holemodal" + (o + 9);
                var modalDialog = "modal-dialog" + o;
                var modalContent = "modal-content" + o;
                $(modalArea).append("<div id=" + holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + (o + 9) + "</h4></div><div class = 'modal-body" + (o + 9) + "'><div id='map" + (o + 9) + "' class='map col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10'></div> <div class = 'modal" + (o + 9) + " col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");


            }
            else {
                $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + o + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id = 'menuObject" + o + "' style='text-align: center'> " + o + " </button>");
                var holeModal = "holemodal" + o;
                var modalDialog = "modal-dialog" + o;
                var modalContent = "modal-content" + o;
                $(modalArea).append("<div id=" + holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + o + "</h4></div><div class = 'modal-body" + o + "'> <div id='map" + o + "' class='map col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10'></div><div class = 'modal" + o + " col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");

            }
        }
    }

}

// add the Player Selection area
function selectPlayer() {
    $("#player" + p).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1'><select class='selectPlayer' id= 'selectPlayer" + p + "' ><option value='...'> Select Your Player </option> <option value='Mario'> Mario </option> <option value='Luigi'> Luigi </option><option value='Toad'> Toad </option><option value='Peach'> Peach</option></select></div>");
}


//weather API Call
var xhttp;
function getMyInfo(value) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var object = JSON.parse(xhttp.responseText);
            document.getElementById("cityName").innerHTML = object.name;
            document.getElementById("weatherStatus").innerHTML = object.weather[0].description;
            document.getElementById("weatherImage").src = "http://openweathermap.org/img/w/" + object.weather[0].icon + ".png";

        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",us&appid=a4e12bc54b22227bd03bb03c867242d7", true);
    xhttp.send();
}

var golfCity = {};
var golfCityXhttp;

function getGolfCity(city) {
    var body = {
        name: " ",
        state: " ",
        address: " ",
        country: " ",
        city: city,
        radius: "20"
    };
    golfCityXhttp = new XMLHttpRequest();
    golfCityXhttp.onreadystatechange = function () {
        if (golfCityXhttp.readyState == 4 && golfCityXhttp.status == 200) {
            golfCity = JSON.parse(golfCityXhttp.responseText);
            for (list = 0; list < golfCity.courses.length; list++) {
                $("#courseSelectionMenu").append("<option value = '" + golfCity.courses[list].id + "'>" + golfCity.courses[list].name + "</option> ");

            }
        }
    };
    golfCityXhttp.open("POST", "http://golf-courses-api.herokuapp.com/courses/search", true);
    golfCityXhttp.setRequestHeader("Content-Type", "application/json");
    golfCityXhttp.send(JSON.stringify(body));
}

var courseInfo = {};
var courseInfoXhttp;
function getCourseInfo(theId) {
    courseInfoXhttp = new XMLHttpRequest();
    courseInfoXhttp.onreadystatechange = function () {
        if (courseInfoXhttp.readyState == 4 && courseInfoXhttp.status == 200) {
            courseInfo = JSON.parse(courseInfoXhttp.responseText);
            $('#courseName').append("<p>" + courseInfo.course.name + "</p>");
            if (courseInfo.course.hole_count === 18) {
                $("#numHoles").append("  <option value='...'>...</option>" + "<option value='9'>Front Nine</option>" + "<option value='9'>Back Nine</option>" + "<option value='18'>Full Course</option>")
            }

            else if (courseInfo.course.hole_count === 9) {
                $("#numHoles").append("  <option value='...'>...</option>" + "<option value='9'>Front Nine</option>")
            }
        }
    };
    courseInfoXhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/" + theId, true);
    courseInfoXhttp.send();
}

//Golf Course Request

var golfInfo = {};
var golfxhttp;
function getGolfInfo(id) {
    var holesValue = document.getElementById('numHoles').value;
    var playersValue = document.getElementById('numPlayers').value;
    golfxhttp = new XMLHttpRequest();
    golfxhttp.onreadystatechange = function () {
        if (golfxhttp.readyState == 4 && golfxhttp.status == 200) {
            golfInfo = JSON.parse(golfxhttp.responseText);
            document.getElementById('title').innerHTML = "<h1>Welcome to Mario Golf</h1><h2>" + golfInfo.course.name + "</h2>";
            for (holeNum = 1; holeNum <= holesValue; holeNum++) {
                document.getElementsByClassName("modal" + holeNum)[0].innerHTML = "<p>Yards: " + golfInfo.course.holes[holeNum - 1].tee_boxes[0].yards + "</p> <p>Par: " + golfInfo.course.holes[holeNum - 1].tee_boxes[0].par + "</p>" + "<p>Handicap: " + golfInfo.course.holes[holeNum - 1].tee_boxes[0].hcp + "</p>"
            }
            for (playerNumber = 1; playerNumber <= playersValue; playerNumber++) {
                for (skill = 0; skill < golfInfo.course.holes[0].tee_boxes.length; skill++) {
                    $("#selectSkill" + playerNumber).append("<option value='" + golfInfo.course.holes[0].tee_boxes[skill].tee_type + "'> " + golfInfo.course.holes[0].tee_boxes[skill].tee_type + "</option>");
                }

            }
        }
    };
//update the URL with the ID as I call it dynamically
    golfxhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/" + id, true);
    golfxhttp.send();
}


//Google Map API


function initMap() {
    // map variable for google maps
    var holesValue = document.getElementById('numHoles').value;
    for (mapHole = 1; mapHole <= holesValue; mapHole++) {
        var map = new google.maps.Map(document.getElementById('map' + mapHole), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }

    var teeOff = '../images/tee-off.png';
    var teeOffMarker = new google.maps.Marker({
        position: {lat: 40.428, lng: -111.907},
        map: map,
        icon: teeOff
    });

    var flag = '../images/flag.png';
    var flagMarker = new google.maps.Marker({
        position: {lat: 40.428, lng: -111.903},
        map: map,
        icon: flag
    });
}


/*
 var reCenter = new google.maps.LatLng(40.429, -111.903);
 map.setCenter(reCenter);
 google.maps.event.trigger(map, 'resize');

 */


//selection menu load at browser open

$(window).load(function () {
    $(modalMenu).modal('show');

});


//Close Modal to start game

function closeModal() {
    $(modalMenu).modal('hide');
    getGolfInfo(18300);
}


//this adds the select menu to choose player skill

function addSkill() {
    $("#player" + p).append("<select id='selectSkill" + p + "' class='col-sm-1 col-md-1 col-lg-1 col-xs-1 selectSkill'></select>");

}

//selection choices for skill level and player icon

$(document).ready(function () {
    $("#scoreCard").on('change', '.selectPlayer', function () {
        switch ($(this).val()) {
            case "Mario":
                $(this).parent().prepend("<div> <img class='icon' src='../images/players/Mario.png' /></div>");
                $(this).remove();
                break;
            case "Luigi":
                $(this).parent().prepend("<div> <img class='icon' src='../images/players/Luigi.png' /></div>");
                $(this).remove();
                break;
            case "Toad":
                $(this).parent().prepend("<div> <img class='icon' src='../images/players/Toad.png' /></div>");
                $(this).remove();
                break;
            case "Peach":
                $(this).parent().prepend("<div> <img class='icon' src='../images/players/Peach.png' /></div>");
                $(this).remove();
                break;
        }
    });

    $('#scoreCard').on('change', '.selectSkill', function () {
        switch ($(this).val()) {
            case "pro":
                $(this).parent().removeClass('defaultColor');
                $(this).parent().addClass('pro');
                break;
            case "men":
                $(this).parent().removeClass('defaultColor');
                $(this).parent().addClass('men');
                break;
            case "champion":
                $(this).parent().removeClass('defaultColor');
                $(this).parent().addClass('champion');
                break;
            case "women":
                $(this).parent().removeClass('defaultColor');
                $(this).parent().addClass('women');
                break;

        }
    })
});


//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation use this for building geolocation

/*  Still needed 
 * create a modal that shows the total amounts for par, and yardage
 * create a validaiton that compares the names of the players so that they aren't the same
 * create a message to comment on the inidividual's score when they enter their last amount
 * finish the google map with the pins, and update it to be set up for each hole
 *

 * */