
// For loading Dynamic Buttons
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



// For Loading Dynamic words
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

    const wordsContainer = document.getElementById('words-container');
    wordsContainer.innerHTML = '';
    words.forEach((word) => {

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-gray-100 rounded-md shadow-md p-5 text-center hover:bg-violet-100">
                <div class="mb-10">
                    <h1 class="text-3xl font-bold mb-5">${word.word}</h1>
                    <p class="text-1xl font-semibold text-gray-500">Meaning / Pronunciation</p>
                    <h1 class="text-3xl font-bold mt-3">${word.meaning} / ${word.pronunciation}</h1>
                </div>
                <div class="flex items-center justify-between">
                    <div class="w-12 h-12 cursor-pointer hover:bg-violet-300 rounded-sm bg-violet-200 flex items-center justify-center">
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






loadLevels();