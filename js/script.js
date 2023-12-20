function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `username=${username}&password=${password}`
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('result').innerHTML = 'Error: ' + error;
            });
    } else {
        document.getElementById('result').innerHTML = 'Please fill in both fields.';
    }
}

async function loginUser() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginUsername && loginPassword) {
        await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `username=${loginUsername}&password=${loginPassword}`
            })
            .then(response => response.text())
            .then(data => {
                // console.log(data)

                if (data === 'Login successful.') {
                    // Redirect to the dashboard page on successful login
                    window.location.href = '../../index.html';
                } else {
                    document.getElementById('result').innerHTML = data;
                }
            })
            .catch(error => {
                document.getElementById('result').innerHTML = 'Error: ' + error;
            });
    } else {
        document.getElementById('result').innerHTML = 'Please fill in both fields.';
    }
}