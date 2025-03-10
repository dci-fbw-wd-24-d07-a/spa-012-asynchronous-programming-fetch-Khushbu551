// Step 1 function definition
function processData() {
  console.log("Button Clicked! processData function is running...");
}

// step 2 Button par event listener
document.querySelector("button").addEventListener("click", processData);

//Task 2
function processData() {
  console.log("Fetching data...");
  fetch("data.txt")
    .then((response) => response.text()) // Convert reponse to text
    .then((text) => {
      console.log("Raw text data:", text); // Debugging

      //step 2 Convert text into an array(split by new line)
      let dataArry = text.split("\n").map((item) => item.trim());

      console.log("Arry before sorting:", dataArry); // Debugging

      //step 3 Sort the arry alphabethically
      dataArry.sort();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Function to disply data in ul

function displayData(dataArry) {
  const ul = document.querySelector("ul");
  ul.innerHTML = ""; // Clear pervious data

  //Step 5: Creat li element for each item
  dataArry.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// Event Listener for button Click
document.querySelector("button").addEventListener("click", processData);
