// Example: Basic validation
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const emailOrPhone = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (emailOrPhone === '' || password === '') {
      alert('Please fill in all fields');
  } else {
      alert('Login button clicked');
  }
});
