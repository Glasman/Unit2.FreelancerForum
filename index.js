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
const header = document.createElement('h1')
header.textContent = "Welcome to the Freelancer Forum"
header.setAttribute("style", "text-align:center")
body.appendChild(header)

const avgDeclare = document.createElement('h3')
avgDeclare.setAttribute("style", "text-align:center")
body.appendChild(avgDeclare)



function averageFinder(array) {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price, 0
  )
  const ave = sum / array.length
  console.log(ave)
  return ave
}
const average = averageFinder(freelancers)

avgDeclare.textContent = `The average starting price is ${average}`

