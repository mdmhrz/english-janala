
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







