var getDayInMonth = function(month, year){return new Date(year, month, 0).getDate();};

for (var anio = 2020; anio <= 2022; anio++){
    document.write("<div style= ´clear:both;´></div>")
    document.write("<h1>Este es el año "+anio+" del año</h1><br>")
    for(var mes = 1;mes <=12;mes ++){
document.write("<div Style=´clear:both;´></div>")
document.write("<h2>Este es el mes "+mes+" del año </h2><br> ")
var cuentadia = 1;
var date = new Date(), y = anio, m = mes-1;
var firstDay = new Date(y, m, 1); 
for (var diaenblaco = 1; dianenblanco < firstDay.getDate();diaenblanco++){
    document.write("<div class=´dia´></div>")
}
for (var dia = 1; dia <=getDayInMonth(mes, anio);dia++){
    document.write("<div class=´dia´>"+dia+"</div>")
    if(cuentadia % 7 == 0){
        document.write("<div style=´clear:both;´></div>")
    }
    cuentadia++
}
    }

}