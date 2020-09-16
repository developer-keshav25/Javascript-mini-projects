// console.log('hello user');
showNotes();
let addbtn = document.getElementById('addBtn');
addbtn.addEventListener('click',function(e){
    let addtext = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value  = ""; 
    // console.log(notesobj);
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element,index){
        html+=`<div class="notecard my-2 mx-2 card" style ="width:18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}"onclick="deleteNote(this.id)"class="btn btn-primary">Delete</button>
        </div>
      </div>`;
    });
    let e = document.getElementById("notes");
    if(notesobj.length!=0)
    e.innerHTML = html;
    else
    e.innerHTML = `Nothing to Show here.   Add a note....`
 }
function deleteNote(index){
// console.log('i am deleting note ',index+1);
notes = localStorage.getItem("notes");
if(notes==null){
notesobj= [];
}
else{
notesobj = JSON.parse(notes);
}
notesobj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesobj));
showNotes();
 }
//  searchbtn = document.getElementById('searchbtn');
//  searchbtn.addEventListener('input',function(e){
//      console.log('input event initiated');

//  })
filter = document.getElementById('filter');
filter.addEventListener('input',function(e){
    let inputVal = filter.value.toLowerCase();
    // console.log('input event initiated');
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})