const FORWARD = 38, BACKWARD = 40;
function intialize()
{
    keyLogOut = document.getElementById("log");
    purpleCar = document.getElementById("pcar");
    speedInput = document.getElementById('speedometer');
    keyLog = "";
    xCoord = 250;
    yCoord = 340;

}
function display()
{
    keyLogOut.innerHTML = keyLog;
    purpleCar.style.top = yCoord + "px";
    purpleCar.style.left = xCoord + "px";
}
function logKey(e)
{
    var speed = parseInt(speedInput.value)
    var dir = "";
    if (e.which == FORWARD)
    {
        yCoord-=speed;
        dir = "foward";
    }
    else
    {
        if (e.which == BACKWARD)
        {
            yCoord+=speed;
            dir = "backward";
        }
    }

    if (dir != "")
    {
        var str = "which: " + e.which + "<br>";
        str += "key: " + e.key + "<br>";
        str += "code: " +  e.code + "<br>";
        keyLog = "The car moved " + dir + "<hr>" + keyLog   ; 
    }
   
    display();

}