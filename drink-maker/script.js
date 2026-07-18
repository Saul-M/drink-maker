var base = ['Rebel','Lemonade','Green-Tea','Black-Tea','Lemonade Cut With Green Tea', 'Blended Rebel'];
var numOfFlavors = [1 , 2 , 3 , 4];

    



function getFlavor(max) {
    var flavors = ['Pomegranate', 'Strawberry', 'Watermelon','Blue Raz', 'Red Raz','Blackberry', 'Coconut', 'Orange', 'Passion Fruit', 'Kiwi','Lime','GrapeFruit', 'Peach'];

    var list = [];
    for (var index = 0; index < max; index++) {
        var num = Math.floor(Math.random() * flavors.length);
        list.push(flavors[num])
        flavors.splice(num, 1);        
    }
    return list;
}



var drinkBase = base[Math.floor(Math.random() * 5)]
var fl = getFlavor(Math.floor(Math.random() * 3+1));

var drizzle = Math.random() >= 0.5;

if (drizzle){
    var drinkDrizzle = getFlavor(1);
    console.log(drinkBase);
    console.log(fl);
    console.log(drinkDrizzle);
    document.getElementById('drizzle').innerHTML = drinkDrizzle;
}else{
    console.log(drinkBase);
    console.log(fl);
    document.getElementById('base').innerHTML = drinkBase;
    document.getElementById('flavors').innerHTML = fl;
}



function createDrink(){
    var drinkBase = base[Math.floor(Math.random() * 6)]
    var fl = getFlavor(Math.floor(Math.random() * 3+1));
    
    var drizzle = Math.random() >= 0.5;
    
    if (drizzle){
        var drinkDrizzle = getFlavor(1);
        console.log(drinkBase);
        console.log(fl);
        console.log(drinkDrizzle);
        document.getElementById('drizzle').innerHTML = drinkDrizzle;
        document.getElementById('base').innerHTML = drinkBase;
        document.getElementById('flavors').innerHTML = fl;
    }else{
        console.log(drinkBase);
        console.log(fl);
        document.getElementById('base').innerHTML = drinkBase;
        document.getElementById('flavors').innerHTML = fl;
        document.getElementById('drizzle').innerHTML = 'None';
    }
        
        
}
function savDrink() {
    document.getElementById('base').innerHTML = 'Black Tea';
    document.getElementById('flavors').innerHTML = 'Sf Strawberry, Sf Peach';
    document.getElementById('drizzle').innerHTML = 'None';

}