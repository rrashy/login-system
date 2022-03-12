function showPass() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPass = document.getElementById('field-password');

    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPass.type = 'text'
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPass.type = 'password'
    }
}

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Logou com sucesso!')
})