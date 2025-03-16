
hideElementsByID('headerContainer');
hideElementsByID('learningContainer');
hideElementsByID('faqContainer')

document.getElementById('get-start').addEventListener('click', (event) => {
    event.preventDefault()
    const userName = getInputValueById('inputName');
    const password = getConInputValueByID('inputPassword');
    if (userName === '') {
        Swal.fire({
            title: "Username can't be empty",
            text: "Please type your name",
            icon: "error"
        });
    }
    else if (!password || isNaN(password)) {

        Swal.fire({
            title: "Password can't be empty",
            text: "Please type your password",
            icon: "error"
        });
    }
    else if (password === 123456) {
        // Login Success Alert
        Swal.fire({
            title: "Welcome",
            text: "You've successfully logged In",
            icon: "success"
        });

        hideElementsByID('bannerContainer')
        showElementsByID('headerContainer')
        showElementsByID('learningContainer')
        showElementsByID('learningContainer')
        showElementsByID('faqContainer')
    }
    else {
        Swal.fire({
            title: "Wrong Password",
            text: "Please enter your valid password",
            icon: "error"
        });
    }
})


document.getElementById('logoutBtn').addEventListener('click', (event) => {
    showElementsByID('bannerContainer')
    hideElementsByID('headerContainer');
    hideElementsByID('learningContainer');
    hideElementsByID('faqContainer')
})










