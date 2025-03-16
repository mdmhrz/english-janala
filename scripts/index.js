
// For loading Dynamic Buttons 3-29 line
const loadLevels = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/levels/all');
        const data = await response.json();
        showLessonButtons(data.data);
    } catch (error) {
        console.error('Error fetching levels:', error);
    }
};


const showLessonButtons = (buttons) => {
    const lessonContainer = document.getElementById('lessonContainer');
    buttons.forEach(button => {
        const newButton = document.createElement('button');
        newButton.innerHTML = `
            <i class="fa-solid fa-book-open"></i> Lesson-${button.level_no}
        `;

        newButton.setAttribute('onclick', `
            loadWords('${button.level_no}');
            hideElementsByID('default-dialogue-display');
        `);
        newButton.classList.add('btn', 'text-primary', 'border-primary', 'lesson-btn', 'px-6', 'border-2', 'hover:bg-primary', 'hover:text-white');

        newButton.addEventListener('click', function () {
            const allbtns = document.getElementsByClassName('lesson-btn');
            for (const otherBtn of allbtns) {
                otherBtn.classList.remove('text-white', 'bg-primary');
            }
            this.classList.add('text-white', 'bg-primary');
        });

        lessonContainer.appendChild(newButton);
    });
};



// For Loading Dynamic words 33 to 80 line
const loadWords = async (id) => {
    try {
        showElementsByID('loading')
        const response = await fetch(`https://openapi.programming-hero.com/api/level/${id}`);
        const data = await response.json();
        hideElementsByID('loading')
        showWords(data.data);
    } catch (error) {
        console.error('Error fetching words:', error);
        hideElementsByID('loading')
    }
};

const showWords = (words) => {
    hideElementsByID('loading')
    if (words === true) {
        document.getElementById('loading').classList.add('hidden')
    }
    // To show warning box
    if (words.length === 0) {

        showElementsByID('warning-dialogue-display')
        document.getElementById('words-container').style.display = 'none'
    }
    else {
        hideElementsByID('warning-dialogue-display')
        // hideElementsByID('words-container')
    }

    // To show words in container by making loop
    const wordsContainer = document.getElementById('words-container');
    wordsContainer.innerHTML = '';
    showElementsByID('words-container')

    words.forEach((word) => {
        // console.log(word)
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-white rounded-md shadow-md p-5 text-center hover:bg-violet-100 min-h-[260px]">
                <div class="mb-10">
                    <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
                    <p class="text-1xl font-semibold text-gray-500">Meaning / Pronunciation</p>
                    <h1 class="text-2xl font-bold mt-3">${word.meaning} / ${word.pronunciation}</h1>
                </div>
                <div class="flex items-center justify-between">
                    <div onclick="loadWordDetails('${word.id}')" class="w-12 h-12 cursor-pointer hover:bg-violet-300 rounded-sm bg-violet-200 flex items-center justify-center">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div onclick="pronounceWord('${word.word}')" class="w-12 h-12 cursor-pointer hover:bg-violet-300 rounded-sm bg-violet-200 flex items-center justify-center">
                        <i class="fa-solid fa-volume-high"></i>
                    </div>
                </div>
            </div>
        `;
        wordsContainer.appendChild(div);

    });
};





// For showing every single words details from API
const loadWordDetails = async (id) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/word/${id}`);
        const data = await response.json();
        showWordDetails(data.data)

    } catch (error) {
        console.error('Error fetching words:', error);
    }
}



const showWordDetails = (data) => {
    const modalDataContainer = document.getElementById('modalDataContainer');
    modalDataContainer.innerHTML = ''
    const div = document.createElement('div')

    // Function to check if a value exists, otherwise return 'Not found'
    const getValue = (value) => value || 'Not found';
    const getMeaning = (value) => value || 'কোনো অর্থ খুঁজে পাওয়া যায়নি'

    div.innerHTML = `
        <h1 class="text-3xl font-bold mb-8">${getValue(data.word)} (<span><i class="fa-solid fa-microphone-lines"></i></span> : <span>${getValue(data.pronunciation)}</span> )</h1>
        <p class="font-bold mb-2">Bengali Meaning</p>
        <p class="text-2xl mb-6">${getMeaning(data.meaning)}</p>
        <p class="font-bold mb-2">Example</p>
        <p class="mb-6">${getValue(data.sentence)}</p>
        <p class="font-semibold text-[16px] mb-2">Synomyms</p>
        <div class="flex gap-3 flex-wrap mb-4">
            ${data.synonyms && data.synonyms.length > 0 ? data.synonyms.map(synonym => `
                <button class="bg-violet-100 btn">${getValue(synonym)}</button>
            `).join('') : '<p>Nothing has found</p>'}
        </div>
    `;

    modalDataContainer.appendChild(div)
    // to call the modal
    my_modal_3.showModal()
}


// Making sound of words
function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-EN'; // English
    window.speechSynthesis.speak(utterance);
}






// dynamic buttons will be load at first
loadLevels();
