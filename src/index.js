import _ from 'lodash';

const storedNum = [];
let i = 0;

function addRandomNum() {
  let p = document.createElement('p');
  const randomNum = _.random(0, 10);
  p.innerHTML = "Random Number: " + randomNum.toString();
  document.body.appendChild(p);
  const recordNumber = () => storedNum.push(randomNum);
  if (i < 5) {
    recordNumber();
    i++;
  }
}

function sumNum() {
	let p = document.createElement('p');
	p.innerHTML = "Sum: " + _.sum(storedNum).toString();
	document.body.appendChild(p);
}

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");

  const button2 = document.getElementById('button2')
  button2.addEventListener("click", sumNum);
}
