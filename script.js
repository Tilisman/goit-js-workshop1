"use strict"
// let age;

// const yearOfBirth = 2006;
// console.log(yearOfBirth);

// let a = 27 % 6;
// console.log(a);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
// }


// const courseTopic = 'JavaSript для начинающих';
// console.log(courseTopic.length);

/* function getShippingCost(country) {
    let message;
    // Пиши код ниже этой строки
    let price;
    switch (country) { // Дополни эту строку
        case 'Китай': // Дополни эту строку
            price = 100; // Дополни эту строку
            break;

        case 'Чили': // Дополни эту строку
            price = 250; // Дополни эту строку
            break;

        case 'Австралия': // Дополни эту строку
            price = 170; // Дополни эту строку
            break;
        case 'Ямайка': // Дополни эту строку
            price = 120; // Дополни эту строку
            break;

        default:
            console.log('Извините, в вашу страну доставки нет');
    }
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    console.log(message);

// Пиши код выше этой строки
return message;
}
getShippingCost('111');

 */ //* #33
/* function formatMessage(message, maxLength) {
    let result;
    // Пиши код ниже этой строки
    result = message.length;
    if (result > maxLength) {
        result = message.slice(0, maxLength) + '...';
    } else { result = message };

    console.log(result);
    // Пиши код выше этой строки

    return result;
}

formatMessage('Curabitur ligula sapien', 12); */

//* #36
/* function checkForSpam(message) {
    let result;
    // Пиши код ниже этой строки

    message = message.toLowerCase();
    if (message.includes('spam')) {
        result = true;
    } else if (message.includes('sale')) {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
    // Пиши код выше этой строки
    return result;
}
checkForSpam('Get best sale offers now!'); */
// checkForSpam('Latest technology news');
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Get best sale offers now!');


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//     const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//     console.log(message);
//     return message;
// }
// makeOrderMessage(2, 100, 50);

//! ============MODULE-2============== *//
//* #9
/* function getExtremeElements(array) {
    
    const answerArray = [];
    answerArray.push(array[0], array[array.length - 1]);

    console.log(answerArray);
    return answerArray;
    
}

getExtremeElements([1, 2, 3, 4, 5]); */

//* #11

/* function calculateEngravingPrice(message, pricePerWord) {
    // Пиши код ниже этой строки
    let wordsCounter = message.split(' ');
    const totalPrice = wordsCounter.length * pricePerWord;

    console.log(totalPrice);
    return totalPrice
        // Пиши код выше этой строки
}

calculateEngravingPrice('JavaScript у меня в крови', 10); */
/* function splitMessage(message, delimeter) {
    let words;
    // Пиши код ниже этой строки
    words = message.split(delimeter);
    // words = toString(words);
    console.log(typeof(words));
    console.log(words);


    // Пиши код выше этой строки
    return words;
}
splitMessage('Mango'); */

/* function makeStringFromArray(array, delimeter) {
    let string;
    // Пиши код ниже этой строки
    console.log(array);
    string = array.join(delimeter);
    console.log(string);

    // Пиши код выше этой строки
    return string;
}

makeStringFromArray(['лучшее', 'за', 'неделю'], '_');
 */

//* #13

/* function slugify(title) {
    // Пиши код ниже этой строки
    const array = title.split(' ');
    const slugString = array.join('-');

    console.log(slugString.toLowerCase());
    return slugString.toLowerCase();
    // Пиши код выше этой строки
}

slugify('Английский для разработчика'); */

//*  #18
/*const arr = [15, 27, 32, 4];

 function calculateTotalPrice(order) {
    // Пиши код ниже этой строки

    let sum = 0;
    for (let i = 0; i < order.length; i++)
        sum += order[i];
    console.log(sum);

    // Пиши код выше этой строки
}
calculateTotalPrice(arr); */

//! !!!#21!!! TODO: Разобраться почему [1]

/* function findLongestWord(string) {
    // Пиши код ниже этой строки
    let strArr = string.split(' ');
    let wordLength = 0;
    let longestWord;
    console.table(strArr);
    for (let i = 0; i < strArr.length; i++) {
        wordLength = strArr[1].length;
        // console.log(wordLength);
        if (strArr[i].length > wordLength) {
            longestWord = strArr[i];

            return longestWord;
        }



    }
    // Пиши код выше этой строки
}

console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
 */
//* #22

/* function createArrayOfNumbers(min, max) {
    let numbers = [];
    // Пиши код ниже этой строки
    for (let i = min; i <= max; i++)
        numbers.push(i);
    // Пиши код выше этой строки
    console.log(numbers);
    return numbers;
}
createArrayOfNumbers(1, 3); */

//* #23

/* function filterArray(numbers, value) {
    // Пиши код ниже этой строки
    let arrayChecked = [];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > value) {
            arrayChecked.push(numbers[i]);
        }
    }
    console.log(numbers);
    console.log(arrayChecked);
    return arrayChecked;
    // Пиши код выше этой строки
}

filterArray([12, 24, 8, 41, 76], 20); */

//* 25

/* function getCommonElements(array1, array2) {
    // Пиши код ниже этой строки
    let array3 = [];
    for (let index = 0; index < array1.length; index++) {
        console.log(array2.includes(array1[index]));
        if (array2.includes(array1[index])) {
            array3.push(array1[index])
        }
    }




    // Пиши код выше этой строки
}

getCommonElements([1, 3, 5], [0, 8, 5, 3]) */

//* 26

/* function calculateTotalPrice(order) {
    let total = 0;
    // Пиши код ниже этой строки

    for (const ordered of order) {
        total += ordered;
    }
    console.log(total);
    // Пиши код выше этой строки
    return total;
}

calculateTotalPrice([12, 85, 37, 4]); */
// ===============================================
// const planets = ['Земля', 'Марс', 'Венера'];

// for (const planet of planets) {
//     console.log(planet);
// }
// ===============================================

/* console.log(3 % 1);
console.log(4 % 3);
console.log(11 % 4);
console.log(12 % 7);
console.log(8 % 3); */

//* #29

/* function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
    let array = [];
    for (let i = start; i <= end; i++) {
        console.log(i);
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    console.log(array);
    return array;


    // Пиши код выше этой строки
}

getEvenNumbers(2, 4); */

//* #32
/* 
function includes(array, value) {
    // Пиши код ниже этой строки

    let result = false;
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i] === value) {
            result = true;
            break;
        }
    }

    console.log(result);
    return result;
    // Пиши код выше этой строки
}
includes([1, 2, 3, 4, 5], 3); */




//! ============MODULE-3============== !//
//* #7

/* const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
        name: 'Генри Сибола',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com'
    }
};

// Пиши код ниже этой строки
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Ямайка';
apartment.location.city = 'Ямайка';





console.log(apartment); */

//* #10/11

/* const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
for (const key in apartment) {
    if (apartment.hasOwnProperty(key)) {
        keys.push(key);
        values.push(apartment[key]);
    }
}
console.table(keys);
console.table(values);
console.log(apartment); */

//* #12

/* function countProps(object) {
    let propCount = 0;
    // Пиши код ниже этой строки
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            propCount++;
        }
    }
    // Пиши код выше этой строки
    console.log(propCount);
    return propCount;
}


countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); */

//* #13

/* const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for(const key of keys){
values.push(apartment[key]);
} */

//* #14

/* function countProps(object) {
    // Пиши код ниже этой строки
    let propCount = 0;

    const keys = Object.keys(object)
    propCount = keys.length;

    return propCount;

}

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); */

//* #16

/* function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
    const values = Object.values(salaries);
    for (const value of values) {
        totalSalary += value;
    }
    // Пиши код выше этой строки
    console.log(totalSalary);
    return totalSalary;
}

countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); */


//* #17

/* const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}

console.table(hexColors);
console.table(rgbColors); */

//* #18

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
];
/*
function getProductPrice(productName) {
    // Пиши код ниже этой строки
    let productPrice = null;
    let values = Object.values(products)
    for (const value of values) {
        console.log(value);
        if (value.name === productName) {
            productPrice = value.price;
        }

    }
    console.log(`${productName} price: ${productPrice}`);
    return productPrice;
    // Пиши код выше этой строки
}
getProductPrice('Радар');
getProductPrice('Сканер');
getProductPrice('Дроид');
getProductPrice('Захват'); */

//* #19

/* function getAllPropValues(propName) {
    // Пиши код ниже этой строки
    let propValues = [];
    let keys = [];

    for (const value of products) {
        keys = Object.keys(value);
        if (keys.includes(propName)) {
            for (const value of products) {
                propValues.push(value[propName]);
            }
        }
        console.table(propValues);

        return propValues;
    }
    // Пиши код выше этой строки
}
getAllPropValues('name');
getAllPropValues('price');
getAllPropValues('category'); */

//* #20
/* function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    let totalPrice = 0;
    for (const value of products) {
        console.log(value);
        if (value.name === productName) {
            totalPrice = value.price * value.quantity;
        }
    }
    console.log(totalPrice);
    return totalPrice;
    // Пиши код выше этой строки
}

calculateTotalPrice('Дроид'); */

//* #26

// Пиши код ниже этой строки
/* function calculateMeanTemperature(forecast) {
    const {
        today: { low: todayLow, high: todayHigh },
        tomorrow: { low: tomorrowLow, high: tomorrowHigh },
    } = forecast;
    console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
    // Пиши код выше этой строки
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
 */

//* #30

/* function makeTask(data) {
    const completed = false;
    const category = 'Общее';
    const priority = 'Обычный';
    // Пиши код ниже этой строки
    const taskCard = { category: category, priority: priority, ...data, completed };
    console.log(taskCard);
    return taskCard;
    // Пиши код выше этой строки
}

makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' });
makeTask({ text: 'Купить хлеб' }); */

//* #31

/* // Пиши код ниже этой строки
function add(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];

    }
    console.log(sum);
    return sum;
}

add(12, 4, 11, 48); */

//* #32

/* // Пиши код ниже этой строки
function addOverNum(value, ...args) {
  let total = 0;

  for (const arg of args) {
    if(value >= arg){
	continue;
    }else{
        total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
}

addOverNum(23, 17, 42, 12, 3, 45, 67, 1, 23); */

//* #33

/* // Пиши код ниже этой строки
function findMatches(arr, ...args) {
    const matches = []; // Не изменяй эту строку
    // const args = Array.from(arguments);
    for (let i = 0; i < args.length; i++) {
        if (arr.includes(args[i])) {
            matches.push(args[i])
        } else {
            continue;
        }

    }
    // Пиши код выше этой строки

    return matches;
}


console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); */

//* #35

/* const bookShelf = {
    books: ['Последнее королевство', 'Мгла', 'Страж снов'],
    updateBook(oldName, newName) {
        // Пиши код ниже этой строки
        const oldNameIndex = this.books.indexOf(oldName);
        this.books.splice(oldNameIndex, 1, newName);




        // Пиши код выше этой строки
    },
};
bookShelf.updateBook('Мгла', 'wqeqwe'); */

//* #36
/*
const atTheOldToad = {
    // Пиши код ниже этой строки
    potions: [],
    // Пиши код выше этой строки
};
console.log(typeof(atTheOldToad.potions)); */

//* #39

/* const atTheOldToad = {
    potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
    removePotion(potionName) {
        // Пиши код ниже этой строки
        console.log(this.potions);
        const potionNameIndex = this.potions.indexOf(potionName);
        console.log(`index of potionName in potions: ${potionNameIndex}`);
        this.potions.splice(potionNameIndex, 1);
        console.log(this.potions);
        // Пиши код выше этой строки
    },
    //* #40
    updatePotionName(oldName, newName) {
        // Пиши код ниже этой строки
        const potionNameIndex = this.potions.indexOf(oldName);
        this.potions.splice(potionNameIndex, 1, newName);
        // Пиши код выше этой строки
    },

};

atTheOldToad.removePotion("Дыхание дракона");
atTheOldToad.removePotion("Зелье скорости"); */


//* #41

/* const atTheOldToad = {
    potions: [
        { name: 'Зелье скорости', price: 460 },
        { name: 'Дыхание дракона', price: 780 },
        { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
        console.table(this.potions);
        return this.potions;
    },
    addPotion(potionName) {
        const values = Object.values(this.potions);
        for (const value of values) {
            console.log(typeof(value.name));
            if (value.name === potionName.name) {

                return console.log(`Зелье '${potionName.name}' уже есть в инвентаре!`);
            }
            this.potions.push(potionName);
            return console.table(this.potions);

        }



    },
    removePotion(potionName) {
        const names = [];
        const keys = Object.keys(this.potions);
        for (const key of keys) {

            names.push(this.potions[key].name);
        }
        if (names.indexOf(potionName) === -1) {
            return console.log(`Зелья ${potionName} нет в инвентаре!`);
        }
        potionIndex = names.indexOf(potionName);
        this.potions.splice(potionIndex, 1);
        return console.table(this.potions);
    },
    updatePotionName(oldName, newName) {
        let obj = this.potions.find(x => x.name === oldName);
        let index = this.potions.indexOf(obj);
        if (index === -1) {
            return console.log(`Зелья ${oldName} нет в инвентаре!`);
        }
        this.potions.fill(obj.name = newName, index, index++);

        return console.table(this.potions);
        // const names = [];
        // const keys = Object.keys(this.potions);
        // for (const key of keys) {

        //     names.push(this.potions[key].name);
        // }
        // if (names.indexOf(oldName) === -1) {
        //     return console.log(`Зелья ${potionName} нет в инвентаре!`);
        // }
        // oldPotionIndex = names.indexOf(oldName);
        // this.potions.splice(oldPotionIndex, 1, newName);
        // return console.table(this.potions);
    },
    // Пиши код выше этой строки
};
atTheOldToad.getPotions();

atTheOldToad.addPotion({ name: 'awef', price: 620 });

atTheOldToad.removePotion('Дыхание дракона');
atTheOldToad.removePotion('Дыхание дракона');
atTheOldToad.updatePotionName('Зелье скорости', 'Зелье неуязвимости') */


//! ============MODULE-4============== !//

//* #3

/* function makePizza(pizzaName, callback) {
    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
    callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {
    console.log(`Доставляем пиццу ${pizzaName}.`);
});
// Пиши код ниже этой строки

makePizza('Ультрасыр', function eatPizza(pizzaName) {
    console.log(`Едим пиццу ${pizzaName}`)
}); */

//* #4
/* const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
        for (const pizza of pizzaPalace.pizzas) {
            if (pizza === pizzaName) {
                return onSuccess(pizzaName);
            }
        }
        return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
    },
};

// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
    return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
console.log(pizzaPalace.order('Венская', makePizza, onOrderError)); */

//* #7

/* const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
};
const messages = [];
for (let i = 0; i < orders.length; i++) {
    let msg = composeMessage.call(orders[i], i + 1);
    messages.push(msg);

}
console.table(messages); */

//* #8

/* const orders = [
    { email: "solomon@topmail.ua", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
    const msg = composeMessage.apply(orders[i], [i + 1]);
    messages.push(msg);
}

console.table(messages); */

//* #9

/* const pizzaPalace = {
    company: 'Pizza Palace',
};

const burgerShack = {
    company: 'Burger Shack',
};

function composeMessage(customerName) {
    return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');

console.log(pizzaPalaceMessage);
console.log(burgerShackMessage); */

//* #10

/* const service = {
    mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    subscribe(email) {
        this.mailingList.push(email);
        return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe(email) {
        this.mailingList = this.mailingList.filter((e) => e !== email);
        return `Почта ${email} удалена из рассылки.`;
    },
};
// console.log(service.subscribe('tilis@mail.com'));
// console.log(service.mailingList);

// console.log(service.unsubscribe('tilis@mail.com'));
// console.log(service.mailingList);

function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);

const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk'] */


//! ============MODULE-5============== !//

//* #3
/* 
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;

}
const Audi = new Car('Audi', 'Q3', 36000);
console.log(Audi); */

//* #6

/* function Storage(items) {
    this.items = items;
}
Storage.prototype.getItems = function() {
    return this.items;
}

Storage.prototype.addItem = function(newItem) {
    if (this.items.includes(newItem)) {
        return console.log('This item is already exist in Storage!');
    };
    this.items.push(newItem);
}
Storage.prototype.removeItem = function(oldItem) {
        if (this.items.includes(oldItem)) {
            this.items = this.items.filter((e) => e !== oldItem);
            return;
        }
        return console.log("Sorry! I can't find this item in Storage...")
    }
    // Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);

console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Нанитоиды');
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Проло');
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"] */

//* #7
/* function StringBuilder(baseValue) {
    this.value = baseValue;
}
StringBuilder.prototype.getValue = function() {
    return this.value;
}

StringBuilder.prototype.padStart = function(str) {
    return this.value = str + this.value;
}

StringBuilder.prototype.padEnd = function(str) {
    return this.value = this.value + str;
}

StringBuilder.prototype.padBoth = function(str) {
    return this.value = str + this.value + str;
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^=' */

//* #10

/* class Car {
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    changePrice(newPrice) {
        return this.price = newPrice;
    }
} */
// ! # - problem jshint
/* class Car {

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    getBrand() {
        return this.brand;
    }
    changeBrand(newBrand) {
        return this.brand = newBrand;
    }
}

const carInstance = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 36000
});

const carInstance1 = new Car();


console.log(Object.getPrototypeOf(carInstance) === Car.prototype);

console.log(carInstance1);

class Car1 {
    brand = 'Brand';

    constructor({ brand, model, price } = {}) {

    }

    getBrand() {
        return this.brand;
    }
}
const BMW = new Car1({ brand: 'BMW', model: 'X5', price: 39700 });

console.log(BMW.getBrand());

// console.count(23);
console.log(`Car`, Car1); */


//* #12
/* class Storage {
    #items;

    constructor(items) {
        this.#items = items
    }

    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(item) {
        const itemIndex = this.#items.indexOf(item);
        this.#items.splice(itemIndex, 1);
    }

};

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"] */

//* #13 
/* class StringBuilder {
    #value;

    constructor(baseValue) {
        this.#value = baseValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str;
    }
    padStart(str) {
        this.#value = str + this.#value;
    }
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }

}

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^=' */

//* #14

/* class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
} */

//* #15

/* class Car {
    // Пиши код ниже этой строки
    static MAX_PRICE = 50000;
    #price;

    constructor({ price }) {
        this.#price = price;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
            if (newPrice > Car.MAX_PRICE) {
                return;
            }
            this.#price = newPrice;
        }
        // Пиши код выше этой строки
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 */

//* #16 
/* class Car {
    static #MAX_PRICE = 50000;
    // Пиши код ниже этой строки
    static checkPrice(price) {
            if (price > Car.#MAX_PRICE) {
                return 'Внимание! Цена превышает допустимую.'
            }
            return 'Всё хорошо, цена в порядке.'
        }
        // Пиши код выше этой строки
    constructor({ price }) {
        this.price = price;
    }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую. */

//* #17

/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User {
static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
} */

/* //* #18
class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin extends User {
    // Пиши код ниже этой строки
  
    static AccessLevel = {
      BASIC: 'basic',
      SUPERUSER: 'superuser'
    };
    accessLevel;
    constructor({ email = 'mail@mail.com', accessLevel }){
        super(email);
      this.email = email;
      this.accessLevel = accessLevel;
    }
  
    // Пиши код выше этой строки
  }
  
  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER
  });
  
  console.log(mango.email); // mango@mail.com
  console.log(mango.accessLevel); // superuser */

//* #19

/* class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Пиши код ниже этой строки
  
    static AccessLevel = {
      BASIC: 'basic',
      SUPERUSER: 'superuser'
    };
  
    accessLevel;
    blacklistedEmails = [];
    
    blacklist(email) {
    this.blacklistedEmails.push(email);
    }
    
    isBlacklisted(email) {
     return this.blacklistedEmails.includes(email);
    }
  
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }
  
    // Пиши код выше этой строки
  }
  
  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER
  });
  
  console.log(mango.email); // mango@mail.com
  console.log(mango.accessLevel); // superuser
  mango.blacklist('poly@mail.com');
  console.log(mango.blacklistedEmails); // 'poly@mail.com'
  console.log(mango.isBlacklisted('mango@mail.com')); //  false
  console.log(mango.isBlacklisted('poly@mail.com')); // true  */

  //! ============MODULE-6============== !//

//* #1
/* function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
  

    orderedItems.forEach(item => {
        return totalPrice += item;
        
    });
    
    // Пиши код выше этой строки
    return totalPrice;
  }

  calculateTotalPrice([1,2,3,4,5]); */

//* #3

  /* function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
     firstArray.forEach(item => {
      if (secondArray.includes(item)) {
        commonElements.push(item);
      }
     });
  
    return commonElements;
    // Пиши код выше этой строки
  } */

//* #9

/* function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  let newNumbers = [];
    numbers.forEach(number => {
      if (number % 2 === 0) {
        newNumbers.push(number + value);
      }
      if (number % 2 !== 0) {
        newNumbers.push(number);
      }
    });
    console.log(newNumbers);
  return newNumbers;
    // Пиши код выше этой строки
  }

  changeEven([2, 8, 3, 7, 4, 6], 10); */


 //* #10
/*   const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length); */

 

//* #16
//* Используя array.indexOf(genre) выполняем поиск первого совпадения текущего
//* элемента course и получаем его индекс в оригинальном массиве всех курсов. 
//* В параметре index хранится индекс текущего элемента genre при переборе массива 
//* методом filter.

//* Если результат indexOf() и значение index равны - это уникальный элемент, потому 
//* что это первый раз когда такое значение встречается в массиве и на текущей итерации 
//* фильтр обрабатывает именно его.
/* const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index); */
//* #17

//* EXAMPLE
/* const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Поли и Хьюстон */
// ==================
/* const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
  const MIN_RATING = 8;
  const AUTHOR = 'Бернард Корнуэлл';
  // Пиши код ниже этой строки
  
  const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
  const booksByAuthor = books.filter(book => book.author === AUTHOR); */

//* #20 
// Пиши код ниже этой строки
/* const getUsersWithFriend = (users, friendName) => {
    const usersWithFriend = users.filter(user => user.friends.includes(friendName))
    return usersWithFriend;
  }; */
  // Пиши код выше этой строки

//* #21

  /* const getFriends = (users) => {
    const allFriends = users.flatMap(user => user.friends);
    const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index)
  return uniqueFriends;
    }; */
//* #31
/*     const players = [
        { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
        { name: 'Поли', playtime: 469, gamesPlayed: 2 },
        { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
        { name: 'Киви', playtime: 241, gamesPlayed: 1 },
      ];
      // Пиши код ниже этой строки
      
      const totalAveragePlaytimePerGame = players.reduce((a, b) => a + (b.playtime / b.gamesPlayed), 0);
      console.log(totalAveragePlaytimePerGame); */

     const users = [
        {
          name: 'Moore Hensley',
          email: 'moorehensley@indexia.com',
          eyeColor: 'blue',
          friends: ['Sharron Pace'],
          isActive: false,
          balance: 2811,
          gender: 'male'
        },
        {
          name: 'Sharlene Bush',
          email: 'sharlenebush@tubesys.com',
          eyeColor: 'blue',
          friends: ['Briana Decker', 'Sharron Pace'],
          isActive: true,
          balance: 3821,
          gender: 'female'
        },
        {
          name: 'Ross Vazquez',
          email: 'rossvazquez@xinware.com',
          eyeColor: 'green',
          friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
          isActive: false,
          balance: 3793,
          gender: 'male'
        },
        {
          name: 'Elma Head',
          email: 'elmahead@omatom.com',
          eyeColor: 'green',
          friends: ['Goldie Gentry', 'Aisha Tran'],
          isActive: true,
          balance: 2278,
          gender: 'female'
        },
        {
          name: 'Carey Barr',
          email: 'careybarr@nurali.com',
          eyeColor: 'blue',
          friends: ['Jordan Sampson', 'Eddie Strong'],
          isActive: true,
          balance: 3951,
          gender: 'male'
        },
        {
          name: 'Blackburn Dotson',
          email: 'blackburndotson@furnigeer.com',
          eyeColor: 'brown',
          friends: ['Jacklyn Lucas', 'Linda Chapman'],
          isActive: false,
          balance: 1498,
          gender: 'male'
        },
        {
          name: 'Sheree Anthony',
          email: 'shereeanthony@kog.com',
          eyeColor: 'brown',
          friends: ['Goldie Gentry', 'Briana Decker'],
          isActive: true,
          balance: 2764,
          gender: 'female'
        }
      ]
//* #33
      // Пиши код ниже этой строки
/* const getTotalFriendCount = users => {
    const totalFriends = users.reduce((total, user) => {
        return total + user.friends.length;
    }, 0);
   return totalFriends;
 };
 getTotalFriendCount(users); */
 // Пиши код выше этой строки

//* #36

 /* const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
  
  const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a)); */


  //* #37
  /* const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const sortedByAuthorName = [...books].sort((fB,sB) => fB.author.localeCompare(sB.author));
  
  const sortedByReversedAuthorName = [...books].sort((fB,sB) => sB.author.localeCompare(fB.author));
  
  const sortedByAscendingRating = [...books].sort((fB,sB) => fB.rating - sB.rating);
  
  const sortedByDescentingRating = [...books].sort((fB,sB) => sB.rating - fB.rating); */


//* #40
  const sortByName = users => {
    const A = [...users].sort((a, b) => a.name.localeCompare(b.name));
    return A;
  };

//* #41
  /* const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
    { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
  ];
  const MIN_BOOK_RATING = 8;
  // Пиши код ниже этой строки
  
  const names = books
          .filter(e => e.rating > MIN_BOOK_RATING)
          .map(e => e.author)
          .sort((a,b) => a.localeCompare(b)); */

//* #41
/* const getNamesSortedByFriendCount = users => {
    const a = [...users]
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(e => e.name)
    return a;
}; */


//* #43
/* const getSortedFriends = users => {
    const a = users
    .flatMap(e => e.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
    return a;
  }; */

/* const getTotalBalanceByGender = (users, gender) => {
    const a = users
        .filter(e => e.gender === gender)
        .reduce((total, balance) => {return total + balance.balance}, 0) 
    
    return a;
};

getTotalBalanceByGender (users, 'male');
getTotalBalanceByGender (users, 'female'); */