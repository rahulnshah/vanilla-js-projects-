//create a table out of this Array indside the div by the id of 'mountains':
const M = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

let mDiv = document.getElementById('mountains');
let table = mDiv.appendChild(document.createElement('TABLE'));

for(let i = 0; i < M.length + 1; i++)
{
  table.appendChild(document.createElement('TR')); 
}

let row1  = table.getElementsByTagName('tr')[0];

for(let key of Object.keys(M[0])) // need atleast 1 object in the array
{
  let tableHeading = row1.appendChild(document.createElement('TH'));
  tableHeading.innerText = key;
}

for(let i = 1; i < table.getElementsByTagName('tr').length; i++)
{
  for(let value of Object.values(M[i-1]))
  {
      let tableData = table.getElementsByTagName('tr')[i].appendChild(document.createElement('TD'));
      tableData.innerText = value;
      if(typeof value === "number")
      {
        tableData.style.textAlign = 'right';
      }
  }
}

let para2 = document.getElementsByTagName('p')[1];
let documentBody = document.querySelector('body');
documentBody.insertBefore(mDiv, para2);
console.log(mDiv);


// create a table
// 1. get the <table></table> element inside the div tag
// 2. get the <tr></tr> tag inside the <table></table> tag
// 3. then using a for loop, loop through the keys of a mountain object, and for each iteration, 
// append the <th></th> tag inside the first <tr></tr> and set the innerHTML of each <th></th> tag to the key name
//4. Write a second for loop to loop through the array of mountain objects.
// 5. for every iteration, append 3 <td></td> tags in the <tr></tr> tag and set the innerHTML of each <tr></tr> tag.





