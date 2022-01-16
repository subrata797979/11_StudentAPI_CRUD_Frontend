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

const url1 = 'http://localhost:8000/students';
fetch(url1)
  .then((res) => res.json())
  .then((data) => renderData(data))
  .catch((error) => console.log(error));


// store a student (POST studnet/store)

// const url2 = 'http://localhost:8000/student/delete/'+id;
// console.log(url2);
console.log('non-blocking test');

// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   console.log(data.studentname);

//   let td = createNode('td');
//   const tr = document.getElementById('students');
//   td.innerHTML=`${data.studentname}`;
//   append(tr, td);
// })

// .catch(function(error) {
//   console.log('Here, error : ');
//   console.log(error);
// });