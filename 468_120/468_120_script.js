/**
 * Created by gerhatmark on 2017.03.27..
 */
setTimeout(valtas, 3000);
var cucc = document.getElementById("szoveg");
var cucc2 = document.getElementById("lanyok");
var cucc3 = document.getElementById("szurkolas");
var cucc4 = document.getElementById("idopont");
var cucc5 = document.getElementById("sponsors");
var cucc6 = document.getElementById("sponsorheader");
var cucc7 = document.getElementById("logo1");
var cucc8 = document.getElementById("logo2");
cucc2.style.backgroundImage = "url('468_120_dia1_lanyok.png')";

function valtas() {

    cucc.className += "szoveg animated zoomOut";

    cucc2.className = "lanyok animated zoomOut";

    cucc3.style.visibility="visible";

    cucc3.className = "szurkolas animated zoomIn";

    setTimeout(valtas2, 3000);
}

function valtas2() {
    cucc3.className="szurkolas animated zoomOut";
    cucc4.style.visibility="visible";
    cucc4.className="idopont animated zoomIn";
    cucc2.style.backgroundImage = "url('468_120_dia3_lanyok.png')";
    cucc2.className="lanyok animated zoomIn";
    cucc8.className="logo2 animated zoomOut";
    cucc7.className="logo1 animated zoomOut";
    setTimeout(function () {
        cucc2.className="lanyok animated zoomOut";
        cucc4.className="idopont animated zoomOut";
        cucc7.className="logoanimate1 animated zoomIn";
        cucc8.className="logoanimate2 animated zoomIn";
        cucc6.style.visibility="visible";
        cucc6.className="sponsorheader animated zoomIn";
        cucc5.style.visibility="visible";
        cucc5.className="sponsors animated zoomIn";
        setTimeout(function () {
            cucc7.className="logo1";
            cucc8.className="logo2";
            cucc2.style.backgroundImage = "url('468_120_dia1_lanyok.png')";
            cucc2.className="lanyok animated zoomIn";
            cucc.className += "szoveg animated zoomIn";
            //cucc6.style.visibility="visible";
            cucc6.className="sponsorheader animated zoomOut";
            cucc5.className="sponsors animated zoomOut";
            setTimeout(valtas, 3000);
        },3000);
    },3000);
}
