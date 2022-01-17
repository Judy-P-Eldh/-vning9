//bishsbosh.js för Bish-Bosh 2.0


let loopMax = document.querySelector('#loopMax');
const btn = document.querySelector('#btnLoop');
let tal1E = document.querySelector('#tal1');
let tal2E = document.querySelector('#tal2');
const result = document.querySelector('#result');
const btn2 = document.querySelector('#btnReload');


btn.addEventListener ('click', (e) => {   //Något är fel!!
  let num = loopMax.value;
  //console.log(tal1E);
  let tal1 = tal1E.value; 
  let tal2 = tal2E.value;

  

  if(!controll(tal1, tal2, num)){
    return;
  }
  
  result.classList.add('ruta');

  for (let i = 1; i <= num; i++) { 

    let isBish = i % tal1 == 0;
    let isBosh = i % tal2 == 0;
    
    if (isBish && isBosh) {
     result.innerHTML += `<p> ${'Bish-Bosh'}</p>`;
  }

   else if (isBish) {
        result.innerHTML += `<p> ${'Bish'}</p>`;
      }
   else   if (isBosh) {
          result.innerHTML += `<p> ${'Bosh'}</p>`;
      }
    else{            
      
      result.innerHTML += `<p> ${i}</p>`; 
    }
 }

});

btn2.addEventListener ('click', (e) => {
  window.location.reload(true);
});

//Kontrollera user input.
function controll(tal1, tal2, num){
  
  if ((num < 0) || (tal1 < 0) || (tal2 < 0)){
    alert('Alla tal måste vara större än 0.');
    return false;
  }
  return true;
  
}


