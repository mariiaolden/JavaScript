let TemperatureConversion = function(){
    let temp=0;
    let endtemp=0;
    let menu=prompt("0 End of the program\n1 Celsius to Fahrenheit\n2 Celsius to Kelvin\n3 Fahrenheit to Celsius\n4 Fahrenheit to Kelvin\n5 Kelvin to Celsius\n6 Kelvin to Fahrenheit");
    menu=parseInt(menu);
    switch (menu) {
        case 1:
            temp=prompt("°C");
            endtemp = (temp*9/5) + 32;
            document.getElementById("result").innerHTML=endtemp+" °F";
            break;
        case 2:
            temp=prompt("°C");
            endtemp = parseFloat(temp) + 273.15;
            document.getElementById("result").innerHTML=endtemp+" K";
            break;
        case 3:
        temp=prompt("°F");
        endtemp = (temp - 32) / (9/5);
        document.getElementById("result").innerHTML=endtemp+" °C";
            break;
         case 4:
         temp=prompt("°F");
         endtemp = ((temp - 32) * (5/9)) + 273.15;
         document.getElementById("result").innerHTML=endtemp+" K";
            break;
        case 5:
        temp=prompt("K");
        endtemp = temp - 273.15;
        document.getElementById("result").innerHTML=endtemp+" °C";
            break;
        case 6:
        temp=prompt("K");
        endtemp = (temp* 9/5) - 459.67;
        document.getElementById("result").innerHTML=endtemp+" °F";
            break;
        default:
    };
};
