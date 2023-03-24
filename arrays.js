//  Cuantas personas hay
// + de 1 imprimir solo los nombres en pantalla o en consola

const people = [
  {
    name: 'Chucho',
    lastName: 'ChupaPenes',
    fullName: null,
    email: 'chuchomaricon@gmail.com',
    age: 24,
    gay: true
  },
  {
    name: 'Manyion',
    lastName: 'Ng',
    fullName: null,
    email: 'NgManyion005@gmail.com',
    age: 21,
    gay: false
  },
  {
    name: 'Alejandro',
    lastName: 'Ng',
    fullName: null,
    email: 'NgManyion005@gmail.com',
    age: 8,
    gay: false
  }
]

const cats = [
  {
    name: 'Sunny',
    lastName: 'Ng',
    fullName: null,
    email: 'SunnyLagataGrrr@gmail.com',
    age: 1,
    human: false
  }
]

let peopleSize = people.length
let catsSize = cats.length



function ageVerify (arrSize, array) {
  for(let i = 0; i < arrSize; i++) {
  let person = array[i]
  if (person.age >= 18) {
    console.log(`${person.name} es mayor de edad, tiene ${person.age} años de edad`)
  } else {
    console.log(`${person.name} es menor de edad, tiene ${person.age} años de edad`)
    }
  }
}

ageVerify(peopleSize, people)

ageVerify(catsSize, cats)
