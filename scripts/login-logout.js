
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
        // // Login Success Alert
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Welcome!",
            text: "You've been successfully logged-in",
            showConfirmButton: false,
            timer: 2000

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



// dynamic logout button fot two ID
const primaryLogoutBtn = document.getElementById('logoutBtn');
const logoutBtnSecondary = document.getElementById('logoutBtnSecondary');
const array = [primaryLogoutBtn, logoutBtnSecondary]

array.forEach((btns) => {

    btns.addEventListener('click', () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out of your account.",
            icon: "warning", // Warning icon
            showCancelButton: true, // Show cancel button
            confirmButtonText: "Yes, log me out", // Confirm button text
            cancelButtonText: "No, stay logged in", // Cancel button text
            confirmButtonColor: "#3085d6", // Confirm button color
            cancelButtonColor: "#d33", // Cancel button color
        }).then((result) => {
            if (result.isConfirmed) {
                showElementsByID('bannerContainer')
                hideElementsByID('headerContainer');
                hideElementsByID('learningContainer');
                hideElementsByID('faqContainer')
                // User clicked "Yes, log me out"
                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been successfully logged out.",
                    icon: "success", // Success icon
                    showConfirmButton: false,
                    timer: 1500
                    // confirmButtonText: "OK"
                })
                // .then(() => {
                //     hideElementsByID('side-drawer')
                // });

            } else if (result.isDismissed) {
                // User clicked "No, stay logged in" or dismissed the dialog
                Swal.fire({
                    title: "Cancelled",
                    text: "You are still logged in.",
                    icon: "info", // Info icon
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });


    })
})











