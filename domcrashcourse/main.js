var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter')

// FORM SUBMIT EVENT
form.addEventListener('submit', addItem);

//Delete item
itemList.addEventListener('click', removeItem);

//filter items
filter.addEventListener('keyup', filterItems);

// Add item function
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.querySelector('#item').value;
    //Create new li
    var li = document.createElement('li');
    //Add class
    li.className = "list-group-item";
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button
    var del = document.createElement('button');
    del.className = "btn btn-danger btn-sm float-right delete"
    del.appendChild(document.createTextNode('X'))

    //Append button to li
    li.appendChild(del);

    //Add li to list
    itemList.appendChild(li);
}

//Remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items function
function filterItems(e) {
    //convert text to lower case 
    var text = e.target.value.toLowerCase();
    //Get li within the itemlist
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}