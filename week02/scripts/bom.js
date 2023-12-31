const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    if (input.value != ''){
        console.log("");
    }else {
        console.log("Please remember to enter a book and a chapter")
    };

    let li = document.createElement('li');
    let deleteButton = document.createElement('detlete');

    li.textContent = input.value;
    deleteButton.textContent = '❌';
    
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });
    
    input.focus();
    input.value = '';
    
});

