const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
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

const header2 = document.createElement('h1')
header2.textContent = "Available Freelancers"
header2.setAttribute("style", "text-align:center")
body.appendChild(header2)

const freelancerList = document.createElement("ol");
body.appendChild(freelancerList);
freelancers.forEach(freelancer => {
  const li = document.createElement("li");
  li.textContent = `${freelancer.name}, ${freelancer.occupation}: $${freelancer.price}`;
  freelancerList.appendChild(li);
});