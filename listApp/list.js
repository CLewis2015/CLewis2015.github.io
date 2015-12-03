window.onload = function() {
    
//---------check for event object and get target of event
function getEventTarget (e) {
    e = e || window.event;  
    return e.target || e.srcElement;
    }
    
var $list, $newItemForm; 
var item = '';      //empty string
$list= $('ul');     //cache unordered list
       
var deleteItem = document.getElementById("delete");
var add = document.getElementById("add"); 
var done =  document.getElementById("done");
var removable = document.getElementsByTagName("span");   
    
function updateCount() {
    var items = $('li[class != complete]').length;    //number of items in list
    $('#counter').text(items);  //added to counter
}
updateCount();
   
//remove list item and place at the bottom
$list.on('click', 'li', function() {
    var $this= $(this);	
    item = $this.text();
    $this.prev().remove();
    $this.remove();
    $list.append('<span class= "removable">X</span><li class=\"complete\">' + item + '</li>');
    updateCount();
});   
    
//-------makes X visible for deleting items
function removeItem (e) {
    for (var i = 0; i < removable.length; i++){
        removable[i].style.visibility = "visible";
        }  
    }
    
deleteItem.addEventListener('click', function(e){ removeItem(e);}, false);    
       
//------delete list item   
$list.on('click', 'span', function() {
    var $this= $(this);	
    item = $this.text();
    $this.next().remove();
    $this.remove();
    updateCount();
});
    
//-----make add form visible
function addItem(){ 
    document.getElementById("addBox").style.visibility = "visible";
}
    
//----add items   
$newItemForm = $('#newItemForm');  //cache form to add new items    
$newItemForm.on('submit', function(e) {
    e.preventDefault(); 
    var text= $('input:text').val();    //get value of input
    $list.prepend('<span class= "removable">X</span><li>' +text+ '</li>');    //add item to the end of the list
    $('input:text').val('');    //empty text input
    updateCount();
});    
    
add.addEventListener('click', function(e){ addItem(e);}, false);

//-----remove add and delete functions    
function doneAll() {
    document.getElementById("addBox").style.visibility = "hidden"; 
    for (var i = 0; i < removable.length; i++){
        removable[i].style.visibility = "hidden";
    }
    document.getElementById("counter").style.visibility = "visible";
}
    
done.addEventListener('click', function(e){ doneAll(e);}, false);
}
