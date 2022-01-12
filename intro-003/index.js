// Rezultata pateikti tokiu sablonu:
// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

const s1 = 'mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder WomaN';
const s4 = 'Algimantas cekuolis';

function inicialai(pavadinimas) {
    const word = pavadinimas.split(' ');
    const vardas = word[0][0].toUpperCase();
    const pavarde = word[1][0].toUpperCase();

    console.log(`Legendines asmenybes ${word[0]} ${word[1]} trumpinys yra ${vardas}.${pavarde}.`);

}

inicialai(s1);
inicialai(s2);
inicialai(s3);
inicialai(s4);


// [Vardas] [Pavarde] yra [amzius] amziaus.
const jonas = {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 99,
}
const maryte = {
    name: 'Maryte',
    surname: 'Marytaite',
    age: 87,
}

function prisistatytas(pavadinimas) {
    const vardas = pavadinimas.name
    const pavarde = word[1][0].toUpperCase();

    console.log(`Legendines asmenybes ${word[0]} ${word[1]} trumpinys yra ${vardas}.${pavarde}.`);

}
function validatePIN (pin) {
    //return true or false
   
    if ( (typeof(pin) === 'number') && (pin.length === 4 || pin.length === 6 ) ) {
      return true
    } else {
      return false
    }
  }
  validatePIN('123')
  console.log(validatePIN('1234'))