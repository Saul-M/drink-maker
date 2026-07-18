const base = ['Rebel', 'Lemonade', 'Green-Tea', 'Black-Tea', 'Lemonade Cut With Green Tea', 'Blended Rebel'];
const flavors = ['Pomegranate', 'Strawberry', 'Watermelon', 'Blue Raz', 'Red Raz', 'Blackberry', 'Coconut', 'Orange', 'Passion Fruit', 'Kiwi', 'Lime', 'GrapeFruit', 'Peach'];

function getFlavors(max, exclude) {
    const available = flavors.filter(f => !exclude || !exclude.includes(f));
    const list = [];
    for (let i = 0; i < max; i++) {
        const num = Math.floor(Math.random() * available.length);
        list.push(available[num]);
        available.splice(num, 1);
    }
    return list;
}

function createDrink() {
    const drinkBase = base[Math.floor(Math.random() * base.length)];
    const fl = getFlavors(Math.floor(Math.random() * 3) + 1);
    const hasDrizzle = Math.random() >= 0.5;

    document.getElementById('base').textContent = drinkBase;
    document.getElementById('flavors').textContent = fl.join(', ');
    document.getElementById('drizzle').textContent = hasDrizzle ? getFlavors(1, fl)[0] : 'None';
}

function savDrink() {
    document.getElementById('base').textContent = 'Black Tea';
    document.getElementById('flavors').textContent = 'Sf Strawberry, Sf Peach';
    document.getElementById('drizzle').textContent = 'None';
}

createDrink();
