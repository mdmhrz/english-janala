
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
        newButton.classList.add('btn', 'btn-outline', 'btn-primary', 'lesson-btn', 'px-6', 'border-2');
        lessonContainer.appendChild(newButton);
    });
};



// For Loading Dynamic words 33 to 80 line
const loadWords = async (id) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/level/${id}`);
        const data = await response.json();
        showWords(data.data);

    } catch (error) {
        console.error('Error fetching words:', error);
    }
};

const showWords = (words) => {
    // To show warning box
    if (words.length === 0) {
        showElementsByID('warning-dialogue-display')
    }
    else {
        hideElementsByID('warning-dialogue-display')
    }

    // To show words in container by making loop
    const wordsContainer = document.getElementById('words-container');
    wordsContainer.innerHTML = '';

    words.forEach((word) => {
        // console.log(word)
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-gray-100 rounded-md shadow-md p-5 text-center hover:bg-violet-100">
                <div class="mb-10">
                    <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
                    <p class="text-1xl font-semibold text-gray-500">Meaning / Pronunciation</p>
                    <h1 class="text-3xl font-bold mt-3">${word.meaning} / ${word.pronunciation}</h1>
                </div>
                <div class="flex items-center justify-between">
                    <div onclick="loadWordDetails('${word.id}')" class="w-12 h-12 cursor-pointer hover:bg-violet-300 rounded-sm bg-violet-200 flex items-center justify-center">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="w-12 h-12 cursor-pointer hover:bg-violet-300 rounded-sm bg-violet-200 flex items-center justify-center">
                        <i class="fa-solid fa-volume-high"></i>
                    </div>
                </div>
            </div>
        `;
        wordsContainer.appendChild(div);

    });
};

// my_modal_3.showModal()

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
    console.log(data.word)
    const modalDataContainer = document.getElementById('modalDataContainer');
    modalDataContainer.innerHTML = ''
    const div = document.createElement('div')
    div.innerHTML = `
        <h1 class="text-3xl font-bold mb-8" >${data.word} (<span><i class="fa-solid fa-microphone-lines"></i></span> : <span>${data.pronunciation}</span> )</h1>
        <p class="font-bold mb-2">Meaning</p>
        <p class="text-2xl mb-6">${data.meaning}</p>
        <p class="font-bold mb-2">Example</p>
        <p class="mb-6">${data.sentence}</p>
        <p class="font-semibold text-[16px] mb-2">সমার্থক শব্দগুলো</p>
        <div class="flex gap-3 flex-wrap">
            <button class="bg-violet-100 btn ">${data.synonyms[0]}</button>
            <button class="bg-violet-100 btn ">${data.synonyms[1]}</button>
            <button class="bg-violet-100 btn ">${data.synonyms[2]}</button>
        </div>
    `
    modalDataContainer.appendChild(div)
    my_modal_3.showModal()

}





/*





*/










loadLevels();