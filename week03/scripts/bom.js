function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters')) || [];
}

function setChapterList(chaptersArray) {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        deleteChapter(item);
    });
}

function deleteChapter(chapter) {
    const newChaptersArray = chaptersArray.filter(item => item !== chapter);
    chaptersArray = newChaptersArray;
    setChapterList(chaptersArray);

    const items = list.querySelectorAll('li');
    items.forEach(item => {
        if (item.textContent.slice(0, -1) === chapter) {
            list.removeChild(item);
        }
    });
}

let chaptersArray = getChapterList();

const input = document.querySelector('#favoritechapter');
const button = document.querySelector('#addchapter');
const list = document.querySelector('#list');

document.addEventListener('DOMContentLoaded', function() {
    chaptersArray.forEach(chapter => displayList(chapter));

    button.addEventListener('click', function() {
        const chapterName = input.value.trim();
        if (chapterName !== '') {
            displayList(chapterName);
            chaptersArray.push(chapterName);
            setChapterList(chaptersArray);
            input.value = '';
            input.focus();
        }
    });

    input.focus();
});
