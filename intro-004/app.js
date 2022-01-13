console.log(`Pradedame naują pamoką`);

const jonas = {
    name: 'Jonas',
    lastname: 'Jonaitis',
    age: 99,
    childrenCount: 3,
    children: [
        {
            name: 'Ona',
            dob: 2000
        },
        {
            name: 'One',
            dob: 2001
        },
        {
            name: 'Petriukas',
            dob: 2010
        }
    ]
}

const kaNoriuSuzinoti = 'childrenCount';
const atsakymasIManoNora = jonas[kaNoriuSuzinoti];
console.log(atsakymasIManoNora);