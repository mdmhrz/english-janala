
hideElementsByID('headerContainer');
hideElementsByID('learningContainer');
hideElementsByID('faqContainer')

document.getElementById('get-start').addEventListener('click', (event) => {
    event.preventDefault()
    const userName = getInputValueById('inputName');
    const password = getConInputValueByID('inputPassword');
    if (userName === '') {
        alert('Please Enter You Name')
    }
    else if (!password || isNaN(password)) {
        alert('Please enter your password')
    }
    else if (password === 123456) {
        hideElementsByID('bannerContainer')
        // showElementsByID('loginModal')
        showElementsByID('headerContainer')
        showElementsByID('learningContainer')
        showElementsByID('learningContainer')
        showElementsByID('faqContainer')
    }
    else {
        alert('Please enter your valid password')
    }
})


document.getElementById('logoutBtn').addEventListener('click', (event) => {
    showElementsByID('bannerContainer')
    hideElementsByID('headerContainer');
    hideElementsByID('learningContainer');
    hideElementsByID('faqContainer')
})

showElementsByID('loginModal')

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    const body = document.body;
    modal.classList.add('opacity-0');
    body.style.overflow = 'auto';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}









