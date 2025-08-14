const container = document.getElementById('container');
    
// Botones del Overlay
const signUpOverlayBtn = document.getElementById('signUpOverlay');
const signInOverlayBtn = document.getElementById('signInOverlay');

// Links de texto
const signUpLink = document.getElementById('signUpLink');
const signInLink = document.getElementById('signInLink');

const toggleToSignUp = (e) => {
    e.preventDefault();
    container.classList.add("right-panel-active");
};

const toggleToSignIn = (e) => {
    e.preventDefault();
    container.classList.remove("right-panel-active");
};

// Listeners para los botones del overlay
signUpOverlayBtn.addEventListener('click', toggleToSignUp);
signInOverlayBtn.addEventListener('click', toggleToSignIn);

// Listeners para los links de texto
signUpLink.addEventListener('click', toggleToSignUp);
signInLink.addEventListener('click', toggleToSignIn);

// Funcionalidad mostrar/ocultar contraseña
document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const input = toggle.previousElementSibling; // El input justo antes del icono
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);

        // Cambiar icono
        if (type === 'password') {
            toggle.classList.remove('ri-eye-line');
            toggle.classList.add('ri-eye-off-line');
        } else {
            toggle.classList.remove('ri-eye-off-line');
            toggle.classList.add('ri-eye-line');
        }
    });
});