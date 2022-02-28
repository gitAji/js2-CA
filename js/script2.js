// TEACHER'S CODE USED AS A REFERENCE 

const out = document.querySelector(".detail");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);


const url = "https://kimiquotes.herokuapp.com/quote/" + id + "";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    listData(data);
  })
  .catch(error => out.innerHTML = "Something is wrong!");

function listData(quote) {

  out.innerHTML = `
        <div class="head"><h3>Your Quote:${quote.quote}</h3></div>
        <div class="cart"><p><strong>Quote: </strong>${quote.quote}</p>
        <p><strong>ID:</strong> ${quote.id}</p>
        <p><strong>Year:</strong> ${quote.year}</p>
        </div>`;

}