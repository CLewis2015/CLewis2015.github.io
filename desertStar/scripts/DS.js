$(document).ready(function () {
/*------Triggers calculation when user presses enter------*/
    $("#money").keypress(function (e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            $("#calc").click();
        }
    });
    
/*------Allows user to tab vertically instead of horizontally------*/
    $("tr").each(function () {
        $(this).find("td").each(function (i) {
            $(this).find("input").attr("tabindex", i + 1);
        });
    });
/*------Calculates the total amount of money------*/
    $("#calc").click(function () {
        var numberq = document.getElementById("numberq").value;
        var quarter = 0.25;
        var totalq = quarter * numberq;
        var amountq = document.getElementById("amountq");
        amountq.textContent = (totalq).toFixed(2);
        
        var numberd = document.getElementById("numberd").value;
        var dime = 0.1;
        var totald = Math.round((dime * numberd) * 100) / 100;
        var amountd = document.getElementById("amountd");
        amountd.textContent = (totald).toFixed(2);
        
        var numbern = document.getElementById("numbern").value;
        var nickel = 0.05;
        var totaln = Math.round((nickel * numbern) * 100) / 100;
        var amountn = document.getElementById("amountn");
        amountn.textContent = (totaln).toFixed(2);
        
        var numberp = document.getElementById("numberp").value;
        var penny = 0.01;
        var totalp = Math.round((penny * numberp) * 100) / 100;
        var amountp = document.getElementById("amountp");
        amountp.textContent = (totalp).toFixed(2);
        
        var totalCh = Math.round((totalq + totald + totaln + totalp) * 100) / 100;
        var totalChange =  document.getElementById("totalChange");
        totalChange.textContent = " $" + (totalCh).toFixed(2);
        
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
        total.textContent = " $" + (totalAll).toFixed(2);
    });
});
