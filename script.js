$(document).ready(function() {
  function inputValid(input) {
    return !isNaN(input) && input !== "";
  }

  $("#submit").click(function() {
    var input = $("#number").val();
    if(!inputValid(input)) {
      $("#result").html("invalid input");
    } else {
      var add = {number: 420, amt: 0};
      var minus = {number: 69, amt: 0};

      if($("#reverse").is(":checked")) {
        add.number = 69;
        minus.number = 420;
      }

      var goal = parseInt(input);
      var num = 0;
      var tries = 0;

      var finalString = goal + " = ";

      if(goal % 3 === 1) {
        num += 34; // this is fine since it's 4-2+0+6+9+4-2+0+6+9
        finalString += "4 - 2 + 0 + 6 + 9 + 4 - 2 + 0 + 6 + 9 + ";
      } else if(goal % 3 === 2) {
        num += 17; // this is fine since it's 4-2+0+6+9
        finalString += "4 - 2 + 0 + 6 + 9 + ";
      }


      //number must be divisible by 3 for this to work.
      while(num != goal && tries < 10000000) {
        tries++;
        if(num < goal) {
          num += add.number;
          add.amt++;
        } else if (num > goal) {
          num -= minus.number;
          minus.amt++;
        }
      }
      if(tries >= 9999999) {
        $("#result").html("took too many tries, i guess your number is just lame");
        return false;
      }

      for(i = 0; i < add.amt; i++) {
        finalString += add.number + " + ";
      }
      finalString = finalString.substring(0, finalString.length - 2) + "- ";
      for(i = 0; i < minus.amt; i++) {
        finalString += minus.number + " - ";
      }
      finalString = finalString.substring(0, finalString.length - 2);
      $("#result").html(finalString);
    }
  });
});
