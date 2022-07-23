const btn = document.getElementById("input-btn");

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-El");

let myLeads = [];

const message = document.getElementById("click");

const tabBtn = document.getElementById("save-tab");

// -- Save Curren Tab------
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    console.log("Tab saved Sucessfully!");
  });
});
//------------------------
//
// ------------------local storage--------------- //
const leadSavedfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadSavedfromLocalStorage) {
  myLeads = leadSavedfromLocalStorage;
  render(myLeads);
}

btn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
// -------------------------------
// local stoarage delete
// ---------------
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("dblclick", function () {
  console.log("double clicked!");

  localStorage.clear();
  console.log("local storage clear!");

  myLeads = [];
  console.log("my leads array clear");

  render(myLeads);
  console.log("DOM clear");
});
// -------------
//
//
// ----- Render leads----------

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    // first method //
    listItems += `<li>
    <a href='${leads[i]}' target='_blanck'>
      ${leads[i]}
    </a>
  </li>`;

    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
