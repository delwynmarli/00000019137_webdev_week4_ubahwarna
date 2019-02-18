function gantiatribut(){
    color = getComputedStyle(document.getElementById('button1')).getPropertyValue("background-color");
    if(color == "rgb(135, 205, 235)"){
        document.getElementById('button1').style.backgroundColor = "rgb(211, 211, 211)";
    }
    else {
        document.getElementById('button1').style.backgroundColor = "rgb(135, 205, 235)";
    }
}
function ganticlass(){
    kelas = document.getElementById('button2').className;
    if(kelas=="button"){
        document.getElementById('button2').className = "buttons";
    }
    else {
        document.getElementById('button2').className = "button";
    }
}