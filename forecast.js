
function forecast () {
                                                       //Catch Input from Screen
  var value = document.getElementById('value').value;
      value = Number(value);
    console.log(value);
  var savings = document.getElementById('savings').value;
      savings = Number(savings);
    console.log(savings);
  var raise = document.getElementById('raise').value;
      raise = Number(raise);
    console.log(raise);
  var date = document.getElementById('enddate').value;
    console.log(date);
                                                         //End of Catching Input

    var date = new Date(date);
        time1 = date.getTime();        //Universal Time for Date Entered by User
    var today = new Date();
        time2 = today.getTime();                      //Universal Time for Today
    var oneDay = 24*60*60*1000;                        //Milliseconds in One Day
  var numDays = Math.round((time1-time2)/oneDay);  //Number of Days Between Today and Date Entered by User

  var numChecks = numDays / 14;                     //Bi-Weekly Checks = 14 Days
  var totSavings = savings * numChecks;   //Savings per Check * Number of Checks
  var endSavings = totSavings + value; //Final Value = Total Savings + Original Account Value

    endSavings = endSavings.toFixed(2);
    
    endSavings = '$ ' + endSavings;

    document.getElementById('final').textContent = endSavings;
}
