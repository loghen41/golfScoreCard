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

// map variable for google maps
var map;

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
                $(playerNum).append("<div id= 'tray" + p + i +"' class='col-sm-9 col-md-9 col-lg-9 col-xs-9 tray" + i + "'></div>");
                addHoles()
            }
            $(playerNum).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1 finalScore' id= 'finalScore" + p + "'>Score</div>");

        }
        else if (holesValue === "18") {
            $(playerNum).append("<input class='col-sm-1 col-md-1 col-lg-1 col-xs-1 name" + p + "' type='text' placeholder='name' </input>");
            addHandicap();
            for (i = 1; i <= (holesValue / 9); i++) {
                $(playerNum).append("<div id= 'tray" + p + i +"' class='col-sm-4 col-md-4 col-lg-4 col-xs-4 tray" + i + "'></div>");
                addHoles()
            }
            $(playerNum).append("<div id= 'tray" + p + i +"' class='col-sm-1 col-md-1 col-lg-1 col-xs-1 finalScore' id= 'finalScore" + p + "'>Score</div>");
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
            $(trayNum).append("<input type='number' oninput='finalScores()' style='text-align: center;'  min = '1' placeholder='" + h + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + h + "'> </input>");
        }
    }
    else if (holesValue === "18") {
        for (h = 1; h <= holesValue / 2; h++) {
            if(trayNum === ".tray2") {
                $(trayNum).append("<input  type='number' oninput='finalScores()' style='text-align: center;' min = '1'  placeholder='" + (h+9) + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + (h+9) + "' > </input>");
            } else {
                $(trayNum).append("<input  type='number' oninput='finalScores()' text-align: center;' min = '1'  placeholder='" + h + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole" + h + "' > </input>");
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

//this is completely unfinished

function finalScores() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    for(thePlayer = 1; thePlayer <= playersValue; thePlayer++) {
            for (theTray = 1; theTray <=holesValue/9; theTray++){
                if(theTray === 1) {
                    var firstScore = (document.getElementsByClassName('hole1')[0].value + document.getElementsByClassName('hole2')[0].value + document.getElementsByClassName('hole3')[0].value + document.getElementsByClassName('hole4')[0].value + document.getElementsByClassName('hole5')[0].value + document.getElementsByClassName('hole6')[0].value + document.getElementsByClassName('hole7')[0].value + document.getElementsByClassName('hole8')[0].value + document.getElementsByClassName('hole9')[0].value);
                    document.getElementById('finalScore1').innerHTML = firstScore;
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

// Add the menu hole numbers
function addMenuHoles() {
    var holesValue = document.getElementById('numHoles').value;
    var menuTrayNum = ".menuTray" + k;
    var modalArea = "#modalArea";
    $(menuTrayNum).empty();
    if (holesValue === "9") {
        $(modalArea).empty();
        for (o = 1; o <= holesValue; o++) {
            $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + o + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id='menuObject" + o + "' style='text-align: center'>"+o+" </button>");
            var holeModal = "holemodal" + o;
            var modalDialog = "modal-dialog" + o;
            var modalContent = "modal-content" + o;
            $(modalArea).append("<div id="+ holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + o + "</h4></div><div class = 'modal-body" + o + "'> <p>One Fine Body</p> </div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");
        }

    }
    else if (holesValue === "18") {
        for (var o = 1; o <= holesValue / 2; o++) {
            if (menuTrayNum === ".menuTray2") {
                $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + (o+9) + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id= 'menuObject" + (o+9) + "' style='text-align: center'> "+(o+9)+" </button>");
                var holeModal = "holemodal" + (o+9);
                var modalDialog = "modal-dialog" + o;
                var modalContent = "modal-content" + o;
                $(modalArea).append("<div id="+ holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + (o+9) + "</h4></div><div class = 'modal-body" + o + "'> <p>One Fine Body</p> </div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");


            }
            else {
                $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + o + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id = 'menuObject" + o + "' style='text-align: center'> "+o+" </button>");
                var holeModal = "holemodal" + o;
                var modalDialog = "modal-dialog" + o;
                var modalContent = "modal-content" + o;
                $(modalArea).append("<div id="+ holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + o + "</h4></div><div class = 'modal-body" + o + "'> <p>One Fine Body</p> </div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");

            }
        }
    }
    initMap()
}
// add the handicap area
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
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ value + ",us&appid=a4e12bc54b22227bd03bb03c867242d7", true);
    xhttp.send();
}

//golf score city reference  (Blake's Code)
/*
var golfCity = {};
var cityxhttp;
function getCityInfo(city) {
    cityxhttp = new XMLHttpRequest();
    cityxhttp.onreadystatechange = function () {
        if (cityxhttp.readyState == 4 && cityxhttp.status == 200) {
            golfCity = JSON.parse(cityxhttp.responseText);
            document.getElementById("testDiv").innerHTML = golfCity.course.name;
        }
    };
    cityxhttp.open("POST", "https://golf-courses-api.herokuapp.com/courses/search_by_location?city=" + city, true);
    cityxhttp.send();
}


//golf score Call


var golfInfo= {};
var golfxhttp;
function getGolfInfo(id) {
    golfxhttp = new XMLHttpRequest();
    golfxhttp.onreadystatechange = function() {
        if (golfxhttp.readyState == 4 && golfxhttp.status == 200) {
            golfInfo = JSON.parse(golfxhttp.responseText);
            document.getElementById("testDiv").innerHTML = golfInfo.course.name;
        }
    };
//update the URL with the ID as I call it dynamically
    golfxhttp.open("GET","https://golf-courses-api.herokuapp.com/courses/" + id,true);
    golfxhttp.send();
}

*/

//specific golf score call

var golfInfo= {};
var golfxhttp;
function getGolfInfo(id) {
    golfxhttp = new XMLHttpRequest();
    golfxhttp.onreadystatechange = function() {
        if (golfxhttp.readyState == 4 && golfxhttp.status == 200) {
            golfInfo = JSON.parse(golfxhttp.responseText);

           // document.getElementById("holemodal1").innerHTML = golfInfo.course.name;
        }
    };
//update the URL with the ID as I call it dynamically
    golfxhttp.open("GET","https://golf-courses-api.herokuapp.com/courses/18300" ,true);
    golfxhttp.send();
}



//Google Map API


function initMap() {
    var map = new google.maps.Map(document.getElementById('holemodal1'), {
        zoom: 17,
        center: {lat: 40.4295033232823, lng: -111.903993917466},
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });


    var teeOff = '../images/tee-off.png';
    var teeOffMarker = new google.maps.Marker({
        position: {lat: 40.4287968880878, lng: -111.907022595406},
        map: map,
        icon: teeOff
    });

    var flag = '../images/flag.png';
    var flagMarker = new google.maps.Marker({
        position: {lat: 40.4289071414682, lng: -111.903374791145},
        map: map,
        icon: flag
    });
}

//selection menu load at browser open

$(window).load(function() {
    $(modalMenu).modal('show');
});


//Close Modal to start game

function closeModal() {
    $(modalMenu).modal('hide');
    getGolfInfo(18300);
}



//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation use this for building geolocation