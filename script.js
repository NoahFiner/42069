$(document).ready(function() {
  function inputValid(input) {
    return !isNaN(input) && input !== "";
  }

  $("#submit").click(function() {
    var input = $("#number").val();
    if(parseFloat(input) % 1 !== 0 && inputValid(input)) {
      $("#result").html(input+" = black magic, I don't know. Is it really that hard to put in a whole number?");
      return false;
    }

    if(!inputValid(input)) {
      $("#result").html("Whoah man, that's not a number. I worked really hard on this app and I feed my family with the ad revenue. We hardly get by and I don't appreciate you trying to break my livelihood by trying to put non-numbers or absolutely nothing into the field that explicitly says that it's supposed to be for a number.");
    } else {
      var add = {number: 420, amt: 0};
      var minus = {number: 69, amt: 0};

      if($("#reverse").is(":checked")) {
        add.number = 69;
        minus.number = 420;
      }

      var goal = parseInt(input);
      //special cases

      var snarkyPhrases = ["Obviously.",
                          "What were you expecting?",
                          "Why are you consulting this app for meaningless numbers like this?",
                          "You should be able to figure this out yourself, geeze.",
                          "Duh.",
                          "This should be obvious.",
                          "Were you expecting something else?",
                          "Don't waste my time on these dumb numbers.",
                          "You went to first grade math, figure this out yourself next time."];

      switch(goal) {
        case 0:
          $("#result").html("0 = 42069 - 42 - 69. "+snarkyPhrases[Math.floor(Math.random()*snarkyPhrases.length)]);
          return false;
        case 42:
          $("#result").html("42 = 420 - 0. "+snarkyPhrases[Math.floor(Math.random()*snarkyPhrases.length)]);
          return false;
        case 69:
          $("#result").html("69 = 42069 - 420. "+snarkyPhrases[Math.floor(Math.random()*snarkyPhrases.length)]);
          return false;
        case 96:
          $("#result").html("96 = 69 backwards. "+snarkyPhrases[Math.floor(Math.random()*snarkyPhrases.length)]);
          return false;
        case 420:
          $("#result").html("420 = 42069 - 69. "+snarkyPhrases[Math.floor(Math.random()*snarkyPhrases.length)]);
          return false;
        case 666:
          alert("whoah chill there man, I'm just trying to make a fun app and then you just go ahead and try and summon Satan on me. I'll redirect you to the website you're probably looking for.");
          location.href = "http://joyofsatan.org/";
          return false;
        case 6969:
          $("#result").html("6969 = 69 + 69. "+snarkyPhrases[Math.floor(Math.random()*snarkyPhrases.length)]);
          return false;
        case 42069:
          $("#result").html("42069 = 420 + 69. "+snarkyPhrases[Math.floor(Math.random()*snarkyPhrases.length)]);
          return false;
      }

      if(goal > 600000000) {
        $("#result").html(goal+" = a lot of 69s and 420s, what did you expect? Chill with the big numbers next time, man.");
        return false;
      }


      var num = 0;
      var tries = 0;

      var finalString = goal + " = ";


      if(goal > 0) {
        if(goal % 3 === 1) {
          num += 34; // this is fine since it's 4-2+0+6+9+4-2+0+6+9
          finalString += "4 - 2 + 0 + 6 + 9 + 4 - 2 + 0 + 6 + 9 + ";
        } else if(goal % 3 === 2) {
          num += 17; // this is fine since it's 4-2+0+6+9
          finalString += "4 - 2 + 0 + 6 + 9 + ";
        }
      } else {
        if(goal % 3 === -2) {
          num += 34;
          finalString += "4 - 2 + 0 + 6 + 9 + 4 - 2 + 0 + 6 + 9 + ";
        } else if(goal % 3 === -1) {
          num += 17;
          finalString += "4 - 2 + 0 + 6 + 9 + ";
        }
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
