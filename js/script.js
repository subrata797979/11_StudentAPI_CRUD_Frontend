function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


// get all the students records (GET students)

function renderData(data) {
  data.forEach(d => {
    ddom = `<tr><td>${d.id}</td><td>${d.studentname}</td><td>${d.course}</td><td>${d.fee}</td><td><a href="#">#</a></td><td><a href="#">X</a></td>`;
    const dom = document.querySelector('#students');
    dom.innerHTML += ddom;
    console.log(d);
    console.log('-------');
  });
}

const url1 = 'https://studentapibackend.herokuapp.com/students';
fetch(url1)
  .then((res) => res.json())
  .then((data) => renderData(data))
  .catch((error) => console.log(error));

