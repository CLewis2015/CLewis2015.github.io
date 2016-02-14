$(document).ready(function(){

$("#calc").click(function(){
var numberq = document.getElementById("numberq").value;
var quarter = 0.25;    
var totalq = quarter * numberq;
var amountq = document.getElementById("amountq");
amountq.textContent = totalq;

numberd = document.getElementById("numberd").value;  
var dime = 0.1;    
var totald = Math.round((dime * numberd) * 100) / 100;
var amountd = document.getElementById("amountd");
amountd.textContent = totald;
    
numbern = document.getElementById("numbern").value;  
var nickel = 0.05;    
var totaln = Math.round((nickel * numbern) * 100) / 100;
var amountn = document.getElementById("amountn");
amountn.textContent = totaln;
    
numberp = document.getElementById("numberp").value;  
var penny = 0.01;    
var totalp = Math.round((penny * numberp) * 100) / 100;
var amountp = document.getElementById("amountp");
amountp.textContent = totalp;    
    
var totalCh = Math.round((totalq + totald + totaln + totalp) * 100) / 100;
var totalChange =  document.getElementById("totalChange");
totalChange.textContent = " $" + totalCh; 
    
var numbertw = document.getElementById("numbertw").value;
var twenty = 20;    
var totaltw = twenty * numbertw;
var amounttw = document.getElementById("amounttw");
amounttw.textContent = totaltw;
    
var numbertn = document.getElementById("numbertn").value;
var ten = 10;    
var totaltn = ten * numbertn;
var amounttn = document.getElementById("amounttn");
amounttn.textContent = totaltn;  
    
var numberf = document.getElementById("numberf").value;
var five = 5;    
var totalf = five * numberf;
var amountf = document.getElementById("amountf");
amountf.textContent = totalf;    
    
var numbero = document.getElementById("numbero").value;
var one = 1;    
var totalo = one * numbero;
var amounto = document.getElementById("amounto");
amounto.textContent = totalo;
    
var totalCsh = totaltw + totaltn + totalf + totalo;
var totalCash =  document.getElementById("totalCash");
totalCash.textContent = " $" + totalCsh + ".00";

var totalAll = totalCsh + totalCh;
var total = document.getElementById("total");
total.textContent = " $" + totalAll;   
});
});
