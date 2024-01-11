function toggleForms() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
  }

  function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Replace this alert with your signup logic
    alert(`Signup with Email: ${email}, Password: ${password}`);
  }

  function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Replace this alert with your login logic
    alert(`Login with Email: ${email}, Password: ${password}`);
  }

  document.getElementById('signupBtn').addEventListener('click', function() {
    toggleForms();
    document.getElementById('signupForm').style.display = 'block';
  });

  document.getElementById('loginBtn').addEventListener('click', function() {
    toggleForms();
    document.getElementById('loginForm').style.display = 'block';
  });