// Original Fruit / Vegetables Array
const fruitArray = [
    {
        name: 'apple',
        img: 'img/fruits/apple.jpg',
        textColor: '#be0018',
        regex: /^[Aa]pples?$/
    },
    {
        name: 'lemon',
        img: 'img/fruits/lemon.jpg',
        textColor: '#339933',
        regex: /^[Ll]emons?$/
    },
    {
        name: 'orange',
        img: 'img/fruits/orange.jpg',
        textColor: '#db5b00',
        regex: /^[Oo]ranges?$/
    },
    {
        name: 'grape',
        img: 'img/fruits/grape.jpg',
        textColor: '#779829',
        regex: /^[Gg]rapes?$/
    },
    {
        name: 'banana',
        img: 'img/fruits/banana.jpg',
        textColor: '#ebbc02',
        regex: /^[Bb]ananas?$/
    },
    {
        name: 'pear',
        img: 'img/fruits/pear.jpg',
        textColor: '#7e8f0a',
        regex: /^[Pp]ears?$/
    },
    {
        name: 'strawberry',
        img: 'img/fruits/strawberry.jpg',
        textColor: '#d84c51',
        regex: /^[Ss]trawberr(y|ies)$/
    },
    {
        name: 'pineapple',
        img: 'img/fruits/pineapple.jpg',
        textColor: '#eb9227',
        regex: /^[Pp]ineapples?$/
    }
];

// Duplicate array from original array. Changes everytime the page is reloaded
const fruitTempArray = Array.from(fruitArray);

// Shuffles duplicate array
for (let i = fruitTempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i - 1));
    [fruitTempArray[j], fruitTempArray[i]] = [fruitTempArray[i], fruitTempArray[j]];
}

// Function that makes first letter uppercase
const upperCaser = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Assigns value of the first element of the new array
let index = 0;
let selectedFruit = fruitTempArray[index].name;
let selectedImage = fruitTempArray[index].img;
let selectedTextColor = fruitTempArray[index].textColor;
let selectedRegex = fruitTempArray[index].regex;

const fruitChecker = (input) => input.match(selectedRegex) ? true : false;

// Goes forward in the shuffled array
const nextFruit = () => {
    if (index < fruitTempArray.length - 1) {
        index++;
        selectedFruit = fruitTempArray[index].name;
        selectedImage = fruitTempArray[index].img;
        selectedTextColor = fruitTempArray[index].textColor;
        selectedRegex = fruitTempArray[index].regex;
    }
}

// Goes backwards in the shuffled array
const previousFruit = () => {
    if (index > 0) {
        index--;
        selectedFruit = fruitTempArray[index].name;
        selectedImage = fruitTempArray[index].img;
        selectedTextColor = fruitTempArray[index].textColor;
        selectedRegex = fruitTempArray[index].regex;
    }
}

// Remaining elements
const remainingElem = (index) => {
    return `Element ${index + 1}/${fruitTempArray.length}`;
}

console.log(fruitTempArray);