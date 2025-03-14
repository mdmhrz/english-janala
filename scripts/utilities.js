
// To hide elements
const hideElementsByID = (id) => {
    document.getElementById(id).classList.add('hidden')
}


// To show elements
const showElementsByID = (id) => {
    document.getElementById(id).classList.remove('hidden')
}


// Get Input Value
const getInputValueById = (id) => {
    document.getElementById('id').value;
}

// Get Converted Input Value By ID
const getConInputValueByID = (id) => {
    parseInt(document.getElementById('id').value);
}

// Get Elements by ID

const getEl = (id) => {
    document.getElementById(id);
}