function initialize()
{
    console.log("Initializing")
    message = document.getElementById('message');
}

function react(e, color)
{
    if (e.type == 'contextmenu')
    {
        // prevents default opening the context menu
        e.preventDefault();
    }
    console.log("You clicked me!");
    var str = "(" + e.clientX + "," + e.clientY + ")" + "<br>";
    str += "target=" + e.target + "<br>";
    // only works with onmouse events
    str += "button=" + e.button + "<br>";
    e.target.style.backgroundColor = color;
    message.innerHTML = str;
}