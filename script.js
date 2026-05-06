/* NAVIGATION */
function goTo(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screen).classList.add('active');
}

/* FLOW AUTO */
setTimeout(() => {
    goTo('loading');

    setTimeout(() => {
        goTo('welcome');
    }, 3000);

}, 2000);

/* SIMULATION LOGIN */
function login() {
    alert("Connexion réussie (simulation)");
}

/* SIMULATION REGISTER */
function register() {
    alert("Compte créé (simulation)");
}
