const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
const buttonWrapper = document.getElementById("btnWrapper");
const kraken = document.getElementById("kraken");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};

function submitForms() {
  var element = document.getElementById("form");
  document.getElementById("kraken").disabled = true;
  document.getElementById("sasquatch").disabled = true;
  document.getElementById("mothman").disabled = true;
  document.getElementById("name").disabled = true;
  document.getElementById("address").disabled = true;
  document.getElementById("submit-form").disabled = true;
  element.insertAdjacentHTML("afterend", "<p>Thank You!</p>");
  return false;
}
