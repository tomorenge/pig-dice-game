var turnScore = 0;
var turnScore2 = 0;
var playerOne = [];
var playerTwo = [];
var score = 0;
var score2 = 0;

function playertwo(){

}

$(document).ready(function() {
  $("#roll").click(function() {
    var roll = Math.floor(Math.random() * 6 + 1);
    turnScore += roll;
    document.getElementById('dice').innerHTML = roll;
    document.getElementById('turnscore').innerHTML = turnScore;
    if (roll == 1) {
      playerOne=[];
      $("#roll").hide();
      $("#hold").hide();
      $("#roll2").show();
      $("#hold2").show();
      turnScore = 0;
      document.getElementById('turnscore').innerHTML = turnScore;

    } else {
        turnScore += roll;
        playerOne.push(roll);
    }
  });
  $("#hold").click(function() {
    $("#roll").hide();
    $("#hold").hide();
    $("#roll2").show();
    $("#hold2").show();
    playerOne.forEach(function(playerone) {
      return score+= playerone;
    });
    document.getElementById('score').innerHTML = score;
    playerOne = [];
    turnScore = 0;
    document.getElementById('turnscore').innerHTML = turnScore;
  });
  $("#roll2").click(function() {
    var roll2 = Math.floor(Math.random() * 6 + 1);
    turnScore2 += roll2;
    document.getElementById('dicetwo').innerHTML = roll2;
    document.getElementById('turnscore2').innerHTML = turnScore2;
    if (roll2 == 1) {
      playerTwo=[];
      $("#roll").show();
      $("#hold").show();
      $("#roll2").hide();
      $("#hold2").hide();
      turnScore2 = 0;
      document.getElementById('turnscore2').innerHTML = turnScore2;

    } else {
        turnScore2 += roll2;
        playerTwo.push(roll2);
    }
  });
  $("#hold2").click(function() {
  $("#roll").show();
  $("#hold").show();
  $("#roll2").hide();
  $("#hold2").hide();
    playerTwo.forEach(function(playertwo) {
      return score2+= playertwo;
    });
    document.getElementById('scoretwo').innerHTML = score2;
    playerTwo = [];
    turnScore2 = 0;
    document.getElementById('turnscore2').innerHTML = turnScore2;
  });
});
