console.clear();



// const fs = require('fs/promises');
// console.log(fs);
// function multiplay (a, b) {
//     return a * b;
// }
// multiplay(5,7);
// console.log(multiplay(10,145));
// console.log(`Bandau dauginti: ${multiplay(14,15)} , ar tenkina rezultatas?`);




// async function readTheFile() {

//     const content = await fs.readFile('./data/drinks.txt', 'utf-8');
//     console.log(content);
// }
// readTheFile();

const fs = require('fs/promises');

(async () => {

    const drinksContent = await fs.readFile('./data/drinks.txt', 'utf-8');
    const drinkList = drinksContent.split('\r\n');
    console.log(drinksContent);
    console.log(drinkList);
    let i = 0;

    for (drink of drinkList) {

        const drinkDetails = drink.split(' ');
        const drinkPrice = drinkDetails[1];
        const drinkName = drinkDetails[0];
        const count = drinkDetails[2];
        // const apyvarta = +count * +drinkPrice;
        const apyvarta = parseFloat(count) * parseInt(drinkPrice);
        
        console.log(`Pasirinkimas ${++i}: ${drinkName}, kurio kaina yra ${drinkPrice} EUR buvo parduota 
        už ${count} kiekis ir bendra apyvarta yra ${apyvarta} eurų`);
    }


    const a = '455676';
    const b = parseInt(a);
    console.log(typeof a);
    console.log(typeof b);
})();









// Pasirinkimas : [gerimo-pavadinimas] kurio kaina yra [kaina] Eur.
// Pasirinkimas: [gerimo-pavadinimas]
// Pasirinkimas: [gerimo-pavadinimas]

