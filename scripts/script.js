// const headerContainer = document.getElementById('headerContainer');
// const bannerContainer = document.getElementById('bannerContainer');
// const learningContainer = document.getElementById('learningContainer');
// const faqConatiner = document.getElementById('faqContainer')
// const footerContainer = document.getElementById('footerContainer')

hideElementsByID('headerContainer');
hideElementsByID('learningContainer');
hideElementsByID('faqContainer')

document.getElementById('get-start').addEventListener('click', (e) => {
    event.preventDefault()
    const userName = document.getValueByID('inputName').value;
    console.log(userName)


})

