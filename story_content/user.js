function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6R41tBNBNIm":
        Script1();
        break;
      case "6NTi7a8pHyk":
        Script2();
        break;
      case "5f3W2hWN2Cc":
        Script3();
        break;
      case "5qKxWqsDZP8":
        Script4();
        break;
      case "6GNdcqa6HSX":
        Script5();
        break;
      case "6Ja6XwJ8DKK":
        Script6();
        break;
      case "6jfQ9CKOevd":
        Script7();
        break;
      case "5rurOjEKkbR":
        Script8();
        break;
      case "6JTBDiVY88H":
        Script9();
        break;
      case "5ugSyfiMqWL":
        Script10();
        break;
      case "6WwPgQBEfsP":
        Script11();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script10()
{
  $("#tab-customlink").show();
}

function Script11()
{
  window.print();
}

