function editStudent(id) {
  console.log("Edit : "+id)
  localStorage.setItem("sid", id)
  window.location.href = "./edit.html"
} 

function deleteStudent(id) {
  console.log("Delete : "+id)
  const URL = 'http://localhost:8000/student/delete/'+id;
  fetch(URL,{
    method: "DELETE",
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
  .then((res) => {
    if(res.ok) {
      alert("Record Deleted!")
    }
    else {
      alert("Error!")
    }
  })
  .then((data) => console.log(data))

  location.reload();
} 

// get all the students records (GET students)

function renderData(data) {
  data.forEach(d => {
    ddom = `<tr>
              <td class="id">${d.id}</td>
              <td class="studentname">${d.studentname}</td>
              <td class="course">${d.course}</td>
              <td class="fee">${d.fee}</td>
              <td>
                <button class="btn btn-warning" onclick="editStudent(${d.id})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </button>
              </td>
              <td>
                <button class="btn btn-danger" onclick="deleteStudent(${d.id})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </td>
            </tr>`;
    const dom = document.querySelector('#students');
    dom.innerHTML += ddom;
    // console.log(d);
    // console.log('-------');
  });
}

const URL = 'http://localhost:8000/students';
fetch(URL, {
  method: "GET",
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
.then((res) => res.json())
.then((data) => renderData(data))
.catch((error) => console.log(error));


