// Function to generate a random 9-digit package number
function generateRandomPackageNumber() {
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
  document.getElementById('packageNumber').textContent = randomNumber;
}

// Function to show the specified page
function showPage(pageNumber) {
  // Hide all containers
  document.querySelectorAll('.container').forEach(page => page.classList.add('hidden'));
  // Show the selected container
  document.getElementById(`page${pageNumber}`).classList.remove('hidden');
}

// Function to handle address form submission
function handleAddressSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  showPage(3); // Navigate to the next page
}

// Function to handle payment form submission
function handlePaymentSubmit(event) {
  // Allow Netlify to handle submission naturally
  console.log("Submitting payment form...");
  // Remove event.preventDefault() so Netlify can process the form
}

// Generate a random package number on page load
generateRandomPackageNumber();
