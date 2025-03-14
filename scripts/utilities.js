
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
    const data = document.getElementById(id).value;
    return data;
}

// Get Converted Input Value By ID
const getConInputValueByID = (id) => {
    const data = parseInt(document.getElementById(id).value);
    return data

}

// Get Elements by ID

const getEl = (id) => {
    document.getElementById(id);
}