/**
 * Created by loganhendricks on 5/18/16.
 */

var scoreCard = document.getElementById('scoreCard');
var courseSelect = document.getElementById('courseSelect');

var courseValue = courseSelect.value;

function addPlayers() {
    var holesValue = document.getElementById('numHoles').value;
    var playersValue = document.getElementById('numPlayers').value;
    $(scoreCard).empty();
    for (p = 1; p <= playersValue; p++) {
        $(scoreCard).append("<form id = 'player" + p + "' class = 'jumbotron player col-sm-12 col-md-12 col-lg-12 col-xs-12" + p + "'></form>");
    }
    addTrays();

}
function addTrays() {
    var playersValue = document.getElementById('numPlayers').value;
    var holesValue = document.getElementById('numHoles').value;
    for (p = 1; p <= playersValue; p++) {
        var playerNum = "#player" + p;
        $(playerNum).empty();
        for (i = 1; i <= (holesValue/ 9); i++) {
            $(playerNum).append("<div class='col-sm-5 col-md-5 col-lg-5 col-xs-5 tray" + i + "'></div>");
            addHoles()
        }
    }

}

function addHoles() {
    var holesValue = document.getElementById('numHoles').value;
    var trayNum = ".tray" + i;
    $(trayNum).empty();
    if ( holesValue === "9") {
        for (h = 1; h <= holesValue; h++) {
            $(trayNum).append("<input type='number'  min = '1' placeholder='"+ h + "' class = 'hole'> </input>");
        }
   // div to show total value     $(trayNum).append("<div class = 'hole'> </div>");
    }
    else if ( holesValue === "18") {
        for (h = 1; h <= holesValue/2; h++) {
            $(trayNum).append("<input type='number' min = '1'  placeholder='"+ h + "' class = 'hole'> </input>");
        }
    }
}

function addPlayer() {
    var holesValue = document.getElementById('numHoles').value;
    $(scoreCard).append("<form class = 'jumbotron extraPlayer col-sm-12 col-md-12 col-lg-12 col-xs-12'></form>");
    var extraPlayer = ".extraPlayer";
    $(extraPlayer).append("<div class='col-sm-5 col-md-5 col-lg-5 col-xs-5 extraTray1'> </div>");
    $(extraPlayer).append("<div class='col-sm-5 col-md-5 col-lg-5 col-xs-5 extraTray2'> </div>");

    if ( holesValue === "9") {
        for (h = 1; h <= holesValue; h++) {
            $(".extraTray1").append("<input type='number' class = 'hole'> </input>");
        }
    }
    else if ( holesValue === "18") {
        for (h = 1; h <= holesValue/2; h++) {
            $(".extraTray1").append("<input type='number' min = '1' class = 'hole'> </input>");
            $(".extraTray2").append("<input type='number' min = '1' class = 'hole'> </input>");
        }
    }

}
