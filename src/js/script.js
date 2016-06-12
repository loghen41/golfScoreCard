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

//Total Par Score
var totalPar = 0;

//the Player Score
var playerScore = 0;

//this function adds the different players to the Score Card Div
function addPlayers() {
    var holesValue = document.getElementById('numHoles').value;
    var playersValue = document.getElementById('numPlayers').value;
    $(scoreCard).empty();
    addMenu();
    for (p = 1; p <= playersValue; p++) {
        $(scoreCard).append("<div id = 'player" + p + "' class = 'col-sm-12 col-md-12 col-lg-12 col-xs-12 player defaultColor'></div>");
    }
    addTrays();
    addComputer();
}

//this function adds trays to the Divs so we can seperate the back nine from the front nine

function addTrays() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    for (p = 1; p <= playersValue; p++) {
        var playerNum = "#player" + p;
        $(playerNum).empty();

        if (holesValue === "9") {
            $(playerNum).append("<input onchange='validateForm()' value='Player" + p + "'class='col-sm-1 col-md-1 col-lg-1 col-xs-1' id='name" + p + "' type='text' placeholder='name' </input>");
            addSkill();
            selectPlayer();

            for (i = 1; i <= (holesValue / 9); i++) {
                $(playerNum).append("<div id= 'tray" + i + "' class='col-sm-8 col-md-8 col-lg-8 col-xs-8 tray" + i + "'></div>");
                addHoles()
            }
            $(playerNum).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1 finalScore' id= 'finalScore" + p + "'>Score</div>");

        }
        else if (holesValue === "18") {
            $(playerNum).append("<input onchange='validateForm()' value='Player" + p + "'class='col-sm-1 col-md-1 col-lg-1 col-xs-1' id='name" + p + "' type='text' placeholder='name' </input>");
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
            $(trayNum).append("<input type='number' oninput='finalScores(); scoreMessage(); mockPlayer();' style='text-align: center;'  min = '1' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole hole" + h + "'> </input>");
        }
    }
    else if (holesValue === "18") {
        for (h = 1; h <= holesValue / 2; h++) {
            if (trayNum === ".tray2") {
                $(trayNum).append("<input  type='number' oninput='finalScores(); scoreMessage(); mockPlayer();' style='text-align: center;' min = '1'  class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole hole" + (h + 9) + "' > </input>");
            } else {
                $(trayNum).append("<input  type='number' oninput='finalScores(); scoreMessage(); mockPlayer();' style='text-align: center;' min = '1'  class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 hole hole" + h + "' > </input>");
            }
        }
        $(trayNum).append("<div class='col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1 col-sm-2 col-md-2 col-lg-2 col-xs-2 score" + i + "'>Score</div>");
    }
}

//this totals up the final scores for the individual players

function finalScores() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    for (thePlayer = 1; thePlayer <= playersValue; thePlayer++) {
        for (theTray = 1; theTray <= holesValue / 9; theTray++) {
            if (holesValue === '9') {
                document.getElementById('finalScore' + thePlayer).innerHTML = (+document.getElementsByClassName('hole1')[(thePlayer - 1)].value + +document.getElementsByClassName('hole2')[(thePlayer - 1)].value + +document.getElementsByClassName('hole3')[(thePlayer - 1)].value + +document.getElementsByClassName('hole4')[(thePlayer - 1)].value + +document.getElementsByClassName('hole5')[(thePlayer - 1)].value + +document.getElementsByClassName('hole6')[(thePlayer - 1)].value + +document.getElementsByClassName('hole7')[(thePlayer - 1)].value + +document.getElementsByClassName('hole8')[(thePlayer - 1)].value + +document.getElementsByClassName('hole9')[(thePlayer - 1)].value);
                document.getElementById('MarioFinalScore').innerHTML = (+document.getElementById('MarioHole1').innerHTML + +document.getElementById('MarioHole2').innerHTML + +document.getElementById('MarioHole3').innerHTML + +document.getElementById('MarioHole4').innerHTML + +document.getElementById('MarioHole5').innerHTML + +document.getElementById('MarioHole6').innerHTML + +document.getElementById('MarioHole7').innerHTML + +document.getElementById('MarioHole8').innerHTML + +document.getElementById('MarioHole9').innerHTML);

            }
            if (holesValue === '18') {
                var firstNine = (+document.getElementsByClassName('hole1')[(thePlayer - 1)].value + +document.getElementsByClassName('hole2')[(thePlayer - 1)].value + +document.getElementsByClassName('hole3')[(thePlayer - 1)].value + +document.getElementsByClassName('hole4')[(thePlayer - 1)].value + +document.getElementsByClassName('hole5')[(thePlayer - 1)].value + +document.getElementsByClassName('hole6')[(thePlayer - 1)].value + +document.getElementsByClassName('hole7')[(thePlayer - 1)].value + +document.getElementsByClassName('hole8')[(thePlayer - 1)].value + +document.getElementsByClassName('hole9')[(thePlayer - 1)].value);
                var secondNine = (+document.getElementsByClassName('hole10')[(thePlayer - 1)].value + +document.getElementsByClassName('hole11')[(thePlayer - 1)].value + +document.getElementsByClassName('hole12')[(thePlayer - 1)].value + +document.getElementsByClassName('hole13')[(thePlayer - 1)].value + +document.getElementsByClassName('hole14')[(thePlayer - 1)].value + +document.getElementsByClassName('hole15')[(thePlayer - 1)].value + +document.getElementsByClassName('hole16')[(thePlayer - 1)].value + +document.getElementsByClassName('hole17')[(thePlayer - 1)].value + +document.getElementsByClassName('hole18')[(thePlayer - 1)].value);
                var MarioFirstNine =  (+document.getElementById('MarioHole1').innerHTML + +document.getElementById('MarioHole2').innerHTML + +document.getElementById('MarioHole3').innerHTML + +document.getElementById('MarioHole4').innerHTML + +document.getElementById('MarioHole5').innerHTML + +document.getElementById('MarioHole6').innerHTML + +document.getElementById('MarioHole7').innerHTML + +document.getElementById('MarioHole8').innerHTML + +document.getElementById('MarioHole9').innerHTML);
                var MarioSecondNine = (+document.getElementById('MarioHole10').innerHTML + +document.getElementById('MarioHole11').innerHTML + +document.getElementById('MarioHole12').innerHTML + +document.getElementById('MarioHole13').innerHTML + +document.getElementById('MarioHole14').innerHTML + +document.getElementById('MarioHole15').innerHTML + +document.getElementById('MarioHole16').innerHTML + +document.getElementById('MarioHole17').innerHTML + +document.getElementById('MarioHole18').innerHTML);



                document.getElementById('MarioTotal1').innerHTML = MarioFirstNine;
                document.getElementById('MarioTotal2').innerHTML = MarioSecondNine;
                document.getElementById('MarioFinalScore').innerHTML = (+MarioFirstNine + +MarioSecondNine);
                document.getElementsByClassName('score1')[thePlayer - 1].innerHTML = firstNine;
                document.getElementsByClassName('score2')[thePlayer - 1].innerHTML = secondNine;
                document.getElementById('finalScore' + thePlayer).innerHTML = (+firstNine + +secondNine);
            }
        }

    }
}

function scoreMessage() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    var messageArea = "#messageArea";
    var form = document.forms['scoreCard'];
    $(messageArea).empty();
    for (q = 0; q < playersValue; q++) {
        if (holesValue === "9") {
            if (document.getElementsByClassName('hole1')[q].value !== "" && document.getElementsByClassName('hole2')[q].value !== "" && document.getElementsByClassName('hole3')[q].value !== "" && document.getElementsByClassName('hole4')[q].value !== "" && document.getElementsByClassName('hole5')[q].value !== "" && document.getElementsByClassName('hole6')[q].value !== "" && document.getElementsByClassName('hole7')[q].value !== "" && document.getElementsByClassName('hole8')[q].value !== "" && document.getElementsByClassName('hole9')[q].value !== "") {
                playerScore = (+document.getElementsByClassName('hole1')[q].value + +document.getElementsByClassName('hole2')[q].value + +document.getElementsByClassName('hole3')[q].value + +document.getElementsByClassName('hole4')[q].value + +document.getElementsByClassName('hole5')[q].value + +document.getElementsByClassName('hole6')[q].value + +document.getElementsByClassName('hole7')[q].value + +document.getElementsByClassName('hole8')[q].value + +document.getElementsByClassName('hole9')[q].value);
                if (playerScore < totalPar) {
                    $(messageArea).append("<div>Well " + form[('name' + (q + 1))].value + " You did so good, you should be in the Pros!</div>");

                }
                else if (playerScore <= (+totalPar + 9)) {
                    $(messageArea).append("<div>Good Job " + form[('name' + (q + 1))].value + "!</div>");
                }
                else if (playerScore > (+totalPar + 9)) {
                    $(messageArea).append("<div>" + form[('name' + (q + 1))].value + ", Looking at your score, you might want to take up Mini Golf</div>");
                }


            }
            else if (holesValue === "18") {
                if (document.getElementsByClassName('hole1')[q].value !== "" && document.getElementsByClassName('hole2')[q].value !== "" && document.getElementsByClassName('hole3')[q].value !== "" && document.getElementsByClassName('hole4')[q].value !== "" && document.getElementsByClassName('hole5')[q].value !== "" && document.getElementsByClassName('hole6')[q].value !== "" && document.getElementsByClassName('hole7')[q].value !== "" && document.getElementsByClassName('hole8')[q].value !== "" && document.getElementsByClassName('hole9')[q].value !== "") {
                    playerScore = (+document.getElementsByClassName('hole1')[q].value + +document.getElementsByClassName('hole2')[q].value + +document.getElementsByClassName('hole3')[q].value + +document.getElementsByClassName('hole4')[q].value + +document.getElementsByClassName('hole5')[q].value + +document.getElementsByClassName('hole6')[q].value + +document.getElementsByClassName('hole7')[q].value + +document.getElementsByClassName('hole8')[q].value + +document.getElementsByClassName('hole9')[q].value + +document.getElementsByClassName('hole10')[q].value + +document.getElementsByClassName('hole11')[q].value + +document.getElementsByClassName('hole12')[q].value + +document.getElementsByClassName('hole13')[q].value + +document.getElementsByClassName('hole14')[q].value + +document.getElementsByClassName('hole15')[q].value + +document.getElementsByClassName('hole16')[q].value + +document.getElementsByClassName('hole17')[q].value + +document.getElementsByClassName('hole18')[q].value);
                    if (playerScore < totalPar) {
                        $(messageArea).append("<div>Well " + form[('name' + (q + 1))].value + " You did so good, you should be in the Pros!</div>");
                    }
                    else if (playerScore <= (+totalPar + 15)) {
                        $(messageArea).append("<div>Good Job " + form[('name' + (q + 1))].value + "!</div>");
                    }
                    else if (playerScore > (+totalPar + 15)) {
                        $(messageArea).append("<div>" + form[('name' + (q + 1))].value + ", Looking at your score, you might want to take up Mini Golf</div>")
                    }

                }
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
//THese 3 functions add the computer player

function addComputer() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    $(scoreCard).append("<div id = 'Mario' class = 'player col-md-12 col-lg-12 col-xs-12'></div>");
    var Mario = document.getElementById('Mario');
    addComputerTrays()
}

function addComputerTrays() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    $(Mario).empty();
    $(Mario).append("<div class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1'>Mario</div>");
    $(Mario).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1'> Pro</div>");
    $(Mario).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1'> <img class= 'icon' src='../images/players/Mario.png'</div>");

    if (holesValue === "9") {

        for (k = 1; k <= (holesValue / 9); k++) {
            $(Mario).append("<div class='col-sm-8 col-md-8 col-lg-8 col-xs-8 MarioTray" + k + "'></div>");
            addComputerHoles()
        }

    }
    else if (holesValue === "18") {
        for (k = 1; k <= (holesValue / 9); k++) {
            $(Mario).append("<div class='col-sm-4 col-md-4 col-lg-4 col-xs-4 MarioTray" + k + "'></div>");
            addComputerHoles()
        }
        }
    $(Mario).append("<div class='col-sm-1 col-md-1 col-lg-1 col-xs-1 ' id= 'MarioFinalScore'>Score</div>");

}

function addComputerHoles() {
    var holesValue = document.getElementById('numHoles').value;
    var MarioTrayNum = ".MarioTray" + k;
    $(MarioTrayNum).empty();
    if (holesValue === "9") {
        for (o = 1; o <= holesValue; o++) {
            var MarioScore = Math.ceil(Math.random()*4) + 1;
            $(MarioTrayNum).append("<div class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 MarioHole' id='MarioHole" + o + "' style='text-align: center'>" + MarioScore + "</div>");
            }
    }
    else if (holesValue === "18") {
        for (var o = 1; o <= holesValue / 2; o++) {
            var MarioScore = Math.ceil(Math.random()*4) + 2;
            if (MarioTrayNum === ".MarioTray2") {
                $(MarioTrayNum).append("<div class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 MarioHole' id='MarioHole" + (o+9) + "' style='text-align: center'>" + MarioScore + "</div>");
            }
            else {
                $(MarioTrayNum).append("<div class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 MarioHole' id='MarioHole" + o + "' style='text-align: center'>" + MarioScore + "</div>");
            }
        }
        $(MarioTrayNum).append("<div id='MarioTotal" + k + "'class='col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1 col-sm-2 col-md-2 col-lg-2 col-xs-2 score" + k + "'>Score</div>");

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
    $(menu).append("<button type='button' data-toggle='modal' data-target='#finalModal' class='col-sm-1 col-md-1 col-lg-1 col-xs-1 ' id= 'menuFinalScore'>Final Par</button>");

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
            $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + o + "'  class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id='menuObject" + o + "' style='text-align: center'> Hole " + o + " Info </button>");
            var holeModal = "holemodal" + o;
            var modalDialog = "modal-dialog" + o;
            var modalContent = "modal-content" + o;
            $(modalArea).append("<div id=" + holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + o + "</h4></div><div class = 'modal-body" + o + "'><div id='map" + o + "' class='map col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10'></div> <div class = 'modal" + o + " col-xs-12 col-sm-12 col-md-12 col-lg-12'></div> <div id = 'modalyards" + o + "' class = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");
        }
    }
    else if (holesValue === "18") {
        for (var o = 1; o <= holesValue / 2; o++) {
            if (menuTrayNum === ".menuTray2") {
                $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + (o + 9) + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id= 'menuObject" + (o + 9) + "' style='text-align: center'> Hole " + (o + 9) + " Info </button>");
                var holeModal = "holemodal" + (o + 9);
                var modalDialog = "modal-dialog" + o;
                var modalContent = "modal-content" + o;
                $(modalArea).append("<div id=" + holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + (o + 9) + "</h4></div><div class = 'modal-body" + (o + 9) + "'><div id='map" + (o + 9) + "' class='map col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10'></div> <div class = 'modal" + (o + 9) + " col-xs-12 col-sm-12 col-md-12 col-lg-12'></div><div id = 'modalyards" + (o+9) + "' class = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");


            }
            else {
                $(menuTrayNum).append("<button type='button' data-toggle='modal' data-target='#holemodal" + o + "' class = 'col-sm-1 col-md-1 col-lg-1 col-xs-1 menuObject' id = 'menuObject" + o + "' style='text-align: center'> Hole " + o + " Info </button>");
                var holeModal = "holemodal" + o;
                var modalDialog = "modal-dialog" + o;
                var modalContent = "modal-content" + o;
                $(modalArea).append("<div id=" + holeModal + " class='modal fade menuModal' tabindex='-1' role='dialog'><div id =" + modalDialog + " class='modal-dialog'><div id = " + modalContent + " class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Hole " + o + "</h4></div><div class = 'modal-body" + o + "'> <div id='map" + o + "' class='map col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10'></div><div class = 'modal" + o + " col-xs-12 col-sm-12 col-md-12 col-lg-12'></div><div id = 'modalyards" + o + "' class = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");

            }
        }
    }
    $(modalArea).append("<div id='finalModal' class='modal fade menuModal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>Final Par and Yards</h4></div><div id='finalModalBody' class='modal-body col-xm-12 col-sm-12 col-md-12 col-lg-12' ><div id='finalMenuBody'> <div class = 'finalMenuDiv col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div></div><div class = 'modal-footer" + o + "'> <button  type = 'button' class = 'btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");


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
            $("#weather").addClass('off-color');
            document.getElementById("cityName").innerHTML = object.name;
            document.getElementById("weatherStatus").innerHTML = object.weather[0].description;
            document.getElementById("weatherImage").src = "http://openweathermap.org/img/w/" + object.weather[0].icon + ".png";

        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",us&appid=a4e12bc54b22227bd03bb03c867242d7", true);
    xhttp.send();
}


//This populates the selection of courses to play on
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


//This Populates the amount of holes they can potentially play on the main menu
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


//This populates the info for the rest of the Card
function getGolfInfo(id) {
    var holesValue = document.getElementById('numHoles').value;
    var playersValue = document.getElementById('numPlayers').value;
    golfxhttp = new XMLHttpRequest();
    golfxhttp.onreadystatechange = function () {
        if (golfxhttp.readyState == XMLHttpRequest.DONE && golfxhttp.status == 200) {
            golfInfo = JSON.parse(golfxhttp.responseText);
            document.getElementById('title').innerHTML = "<h1>Welcome to Mario Golf</h1><h2>" + golfInfo.course.name + "</h2>";
            for (holeNum = 1; holeNum <= holesValue; holeNum++) {
                document.getElementsByClassName("modal" + holeNum)[0].innerHTML = "<p><strong>Par: </strong>" + golfInfo.course.holes[holeNum - 1].tee_boxes[0].par + "</p>" + "<p><strong>Handicap: </strong>" + golfInfo.course.holes[holeNum - 1].tee_boxes[0].hcp + "</p>";

                for (u = 0; u < golfInfo.course.holes[holeNum - 1].tee_boxes.length; u++) {
                    if (golfInfo.course.holes[holeNum - 1].tee_boxes[u].tee_type !== "auto change location") {
                        $("#modalyards" + holeNum).append("<div class= '"+ golfInfo.course.holes[holeNum - 1].tee_boxes[u].tee_type +" col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-lg-6 col-xs-6 col-sm-6 col-md-6'><p><strong>Tee Type: </strong><em>" + golfInfo.course.holes[holeNum - 1].tee_boxes[u].tee_type + "</strong></p>  <p>Yards: " + golfInfo.course.holes[holeNum - 1].tee_boxes[u].yards + "</p></div>");
                    }
                }
            }

            if (holesValue === "9") {
                totalPar = (+golfInfo.course.holes[0].tee_boxes[0].par + +golfInfo.course.holes[1].tee_boxes[0].par + +golfInfo.course.holes[2].tee_boxes[0].par + +golfInfo.course.holes[3].tee_boxes[0].par + +golfInfo.course.holes[4].tee_boxes[0].par + +golfInfo.course.holes[5].tee_boxes[0].par + +golfInfo.course.holes[6].tee_boxes[0].par + +golfInfo.course.holes[7].tee_boxes[0].par + +golfInfo.course.holes[8].tee_boxes[0].par);
                $('#finalMenuBody').append("<p><strong>Total Par: </strong>" + totalPar + "</p>");

                for (u = 0; u < golfInfo.course.holes[holeNum - 1].tee_boxes.length; u++) {
                        if (golfInfo.course.holes[holeNum - 1].tee_boxes[u].tee_type !== "auto change location") {
                            $('#finalMenuBody').append("<div class= '"+ golfInfo.course.holes[0].tee_boxes[u].tee_type +" col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-lg-6 col-xs-6 col-sm-6 col-md-6'> <p><strong>Tee Type: </strong><em>" + golfInfo.course.holes[0].tee_boxes[u].tee_type + "</em></p> <p>Total Yards: " + (+golfInfo.course.holes[0].tee_boxes[u].yards + +golfInfo.course.holes[1].tee_boxes[u].yards + +golfInfo.course.holes[2].tee_boxes[u].yards + +golfInfo.course.holes[3].tee_boxes[u].yards + +golfInfo.course.holes[4].tee_boxes[u].yards + +golfInfo.course.holes[5].tee_boxes[u].yards + +golfInfo.course.holes[6].tee_boxes[u].yards + +golfInfo.course.holes[7].tee_boxes[u].yards + +golfInfo.course.holes[8].tee_boxes[u].yards) + "</p></div>");
                        }
                }

            }
            else if (holesValue === "18") {
                totalPar = (+golfInfo.course.holes[0].tee_boxes[0].par + +golfInfo.course.holes[1].tee_boxes[0].par + +golfInfo.course.holes[2].tee_boxes[0].par + +golfInfo.course.holes[3].tee_boxes[0].par + +golfInfo.course.holes[4].tee_boxes[0].par + +golfInfo.course.holes[5].tee_boxes[0].par + +golfInfo.course.holes[6].tee_boxes[0].par + +golfInfo.course.holes[7].tee_boxes[0].par + +golfInfo.course.holes[8].tee_boxes[0].par + +golfInfo.course.holes[9].tee_boxes[0].par + +golfInfo.course.holes[10].tee_boxes[0].par + +golfInfo.course.holes[11].tee_boxes[0].par + +golfInfo.course.holes[12].tee_boxes[0].par + +golfInfo.course.holes[13].tee_boxes[0].par + +golfInfo.course.holes[14].tee_boxes[0].par + +golfInfo.course.holes[15].tee_boxes[0].par + +golfInfo.course.holes[16].tee_boxes[0].par + +golfInfo.course.holes[17].tee_boxes[0].par);
                $("#finalMenuBody").append("<p><strong>Total Par: </strong>" + totalPar + "</p>")
                for (u = 0; u < golfInfo.course.holes[0].tee_boxes.length; u++) {
                    if (golfInfo.course.holes[0].tee_boxes[u].tee_type !== "auto change location") {
                        $('#finalMenuBody').append("<div class= '"+ golfInfo.course.holes[0].tee_boxes[u].tee_type +" col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-lg-6 col-xs-6 col-sm-6 col-md-6'> <p><strong>Tee Type: </strong><em>" + golfInfo.course.holes[0].tee_boxes[u].tee_type + "</em><p>Total Yards: " + (+golfInfo.course.holes[0].tee_boxes[u].yards + +golfInfo.course.holes[1].tee_boxes[u].yards + +golfInfo.course.holes[2].tee_boxes[u].yards + +golfInfo.course.holes[3].tee_boxes[u].yards + +golfInfo.course.holes[4].tee_boxes[u].yards + +golfInfo.course.holes[5].tee_boxes[u].yards + +golfInfo.course.holes[6].tee_boxes[u].yards + +golfInfo.course.holes[7].tee_boxes[u].yards + +golfInfo.course.holes[8].tee_boxes[u].yards + +golfInfo.course.holes[9].tee_boxes[u].yards + +golfInfo.course.holes[10].tee_boxes[u].yards + +golfInfo.course.holes[11].tee_boxes[u].yards + +golfInfo.course.holes[12].tee_boxes[u].yards + +golfInfo.course.holes[13].tee_boxes[u].yards + +golfInfo.course.holes[14].tee_boxes[u].yards + +golfInfo.course.holes[15].tee_boxes[u].yards + +golfInfo.course.holes[16].tee_boxes[u].yards + +golfInfo.course.holes[17].tee_boxes[u].yards) + "</p></div>");
                    }

                }

            }

            for (playerNumber = 1; playerNumber <= playersValue; playerNumber++) {
                for (skill = 0; skill < golfInfo.course.holes[0].tee_boxes.length; skill++) {
                    if (golfInfo.course.holes[0].tee_boxes[skill].tee_type !== "auto change location") {
                        $("#selectSkill" + playerNumber).append("<option value='" + golfInfo.course.holes[0].tee_boxes[skill].tee_type + "'> " + golfInfo.course.holes[0].tee_boxes[skill].tee_type + "</option>");
                    }

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
    $("#player" + p).append("<select id='selectSkill" + p + "' class='col-sm-1 col-md-1 col-lg-1 col-xs-1 selectSkill'><option value='...'> Skill Level </option> </select>");

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


//validates that all players names aren't the same
var nameArray = [];
var otherArray = [];

function validateForm() {
    var mainForm = document.forms['scoreCard'];
    var playersValue = document.getElementById('numPlayers').value;
    nameArray = [];
    for (r = 1; r <= playersValue; r++) {
        nameArray.push(mainForm['name' + r].value);
    }
    try {
        var otherArray = [];
        nameArray.forEach(function (playerName, index, object) {
            var theResult = otherArray.indexOf(playerName);
            if (theResult == -1) {
                otherArray.push(playerName);
            }
            else {
                throw 'Please choose a different name for your player!';
            }
        })

    }
    catch (error) {
        $('#messageArea').empty();
        $('#messageArea').append(error);

    }
}

// This greets the player

function greetPlayer() {
    var wonderful = document.getElementById('MarioWonderful');
    wonderful.play()
}

var sounds = [];
function mockPlayer() {
    var index = Math.floor(Math.random() * 7);
    var soundPlayer = document.getElementsByClassName('soundPlayer')[index];
    soundPlayer.play();
}
