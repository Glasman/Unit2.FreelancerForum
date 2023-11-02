const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const body = document.body
const head = document.createElement('h1')
head.textContent = "Welcome to the Freelancer Forum"


body.appendChild(head)
function averageFinder(array) {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price, 0
  )
  const ave = sum / array.length
  console.log(ave)
  return ave
}
averageFinder(freelancers)

