//Inköpslista / To Do List

const vara = document.querySelector('#vara');
const btnAdd = document.querySelector('#btnAdd');
const add = document.querySelector('#add');
const buy = document.querySelector('#buy');
const lista = document.querySelector('#lista');

const inputholder = document.querySelector('#inputHolder');

btnAdd.addEventListener('click', function(e) {
    
    let li = document.createElement('li');
    console.log(vara.value)
    if(!controll(li)){
        return;
    }

    lista.classList.add('ruta2');
   
    li.innerText = vara.value;
    let b = document.createElement('button');
    b.classList.add('btn-danger');
    b.textContent = 'Ta bort';
    b.addEventListener('click', function (e) {
        this.parentNode.remove();
        if (add.childElementCount == 0) {
            lista.classList.remove('ruta2');
        }
 })
    li.appendChild(b); 

    li.classList.add('listStyle');
    li.addEventListener('click', (e) => {
        
        li.classList.toggle('textChange');
    }); 

    add.appendChild(li);
    
    vara.value = null;
    
})

// Kontrollera user input.
function controll(li){
  
    if (vara.value === ''){
      alert('Du lade inte till något.');
      return false;
    }
    
    return true;
    
  }

