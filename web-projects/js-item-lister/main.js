function addTheItemToList(e)
{
    e.preventDefault(); //prevents reload of index.html
    let inputText = document.querySelector('input[type="text"]');
    if(document.querySelector('input[type="text"]').value.length > 0 && document.querySelector('input[type="text"]').value.length < 8)
    {
        let listEle = document.createElement('LI');
        listEle.style.backgroundColor = 'lightgreen';
        listEle.style.listStyleType = 'circle';
        listEle.appendChild(document.createTextNode(inputText.value));
        document.querySelector('ol').appendChild(listEle);
    }
    inputText.value = "";
}

function replaceH3(e)
{
    let h3 = document.getElementsByTagName('h3')[0];
    h3.innerText = e.target.value;
}

function runEvent(e)
{   
    let para = document.getElementById('demo');
    para.innerText = `(${e.offsetX}, ${e.offsetY})`;
    let box = document.getElementById('aBox');
    box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

function endEvent()
{
    let box = document.getElementById('aBox');
    box.style.backgroundColor = 'lightgray';
    let para = document.getElementById('demo');
    para.innerText = `Ended`;
}

function selectionSortIt()
{
    let items = document.getElementsByTagName('ol')[0].children; // An HTMLCollection
    for(let i = 0; i < items.length - 1; i++)
    {
        let min = items[i].innerText;
        let minIndex = i;
        // search for a min string that alphabetically comes first in the list 
        for(let j = i + 1; j < items.length; j++)
        {
            if(items[j].innerText.toLowerCase().localeCompare(min.toLowerCase()) < 0)
            {
                min = items[j].innerText;
                minIndex = j;
            }
        }   
        //swap the min with the string at index i
        let temp = items[i].innerText;
        items[i].innerText = min;
        items[minIndex].innerText = temp;
    }
}

let button = document.getElementById('button');
let divBox = document.getElementById('aBox');

divBox.addEventListener('mousemove', runEvent);
divBox.addEventListener('mouseleave', endEvent);

let inputEle = document.querySelector('input[type="text"]');
let formEle = document.querySelector('form');

button.addEventListener('click', selectionSortIt);
inputEle.addEventListener('keyup', replaceH3);
formEle.addEventListener('submit', addTheItemToList);

//para.addEventListener('ArrowDown', shirnk);









