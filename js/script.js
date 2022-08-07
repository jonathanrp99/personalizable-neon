
let darkMode = localStorage.getItem('darkMode');
let colorChoice = localStorage.getItem('input[type=color]')
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const colorInput = document.querySelector('input[type=color]')
const colorVariable = '--clr-neon'

colorInput.addEventListener('change', (e) => {
    document.documentElement.style.setProperty(colorVariable, e.target.value)  

})

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};


const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'null');
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
