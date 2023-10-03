const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') { //make sure the input is not empty
        displayList(input.value);  //call the function that outputs the submitted 
        chaptersArray.push(input.value); //push the input value into the chapters array
        setChapterList(); // update the local storage to ne array
        input.value = ''; // clear input
        input.focus();// set the focus back to the input
    }
});

function displayList(item) {

    let li = document.createElement('li');
    let deleteButton = document.createElement('detlete');

    li.textContent = input.value;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();

    });
}

function setChapterList() {
    localStorage.setItem('BOMFaveList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('BOMFaveList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});