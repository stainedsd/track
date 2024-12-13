// Function to generate a random package number
function generateRandomPackageNumber() {
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
  document.getElementById("packageNumber").textContent = randomNumber;
}

// Function to switch pages
function showPage(pageNumber) {
  document.querySelectorAll(".container").forEach((container) => {
    container.classList.add("hidden");
  });
  document.getElementById(`page${pageNumber}`).classList.remove("hidden");
}

// Function to handle address form submission
function handleAddressSubmit(event) {
  event.preventDefault();
  alert("Address submitted successfully!");
  showPage(3);
}

// Function to handle payment form submission
function handlePaymentSubmit(event) {
  event.preventDefault();
  alert("Payment submitted successfully!");
}

// Generate a random package number on page load
generateRandomPackageNumber();
