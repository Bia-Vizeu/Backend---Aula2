document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const correctUsername = 'usuario'; // Defina o nome de usuário correto
    const correctPassword = 'senha123'; // Defina a senha correta

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'welcome.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        errorMessage.style.display = 'block';
    }
});
