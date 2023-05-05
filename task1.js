const form = document.getElementById("form");
const entries = document.getElementById("entries");

let data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value;
  const course = document.getElementById("course").value;

  const student = { name, email, phone, dob, gender, address, course };
  data.push(student);

  form.reset();

  displayData();
});

function displayData() {
  entries.innerHTML = "";

  data.forEach((student, index) => {
    const entry = document.createElement("div");
    entry.classList.add("entry");

    const title = document.createElement("h3");
    title.innerText = `Student ${index + 1}`;

    const info = document.createElement("ul");

    const name = document.createElement("li");
    name.innerText = `Name: ${student.name}`;

    const email = document.createElement("li");
    email.innerText = `Email: ${student.email}`;

    const phone = document.createElement("li");
    phone.innerText = `Phone: ${student.phone}`;

    const dob = document.createElement("li");
    dob.innerText = `Date of Birth: ${student.dob}`;

    const gender = document.createElement("li");
    gender.innerText = `Gender: ${student.gender}`;

    const address = document.createElement("li");
    address.innerText = `Address: ${student.address}`;

    const course = document.createElement("li");
    course.innerText = `Course: ${student.course}`;

    info.appendChild(name);
    info.appendChild(email);
    info.appendChild(phone);
    info.appendChild(dob);
    info.appendChild(gender);
    info.appendChild(address);
    info.appendChild(course);

    entry.appendChild(title);
    entry.appendChild(info);

    entries.appendChild(entry);
  });
}