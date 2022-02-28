// TEACHER'S CODE USED AS A REFERENCE 

const out = document.querySelector(".results ul");
const url = "https://kimiquotes.herokuapp.com/quotes";

fetch(url)
  .then((response) => response.json())
  .then(data => listData(data))
  .catch(error => out.innerHTML = "Something is wrong!");

function listData(list) {
  console.log(list.length);
  out.innerHTML = "";
  for (let item of list) {
    console.log(item);
    out.innerHTML += `
    <li>
        <a href="details.html?id=${item.id}">
            ${item.quote}
        </a>
    </li>`;

  }
}