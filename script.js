

for (let i = 1; i <= 100; i++) { 

  let isBish = i % 3 == 0;
  let isBosh = i % 4 == 0;
  
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
    console.log(i); 
    result.innerHTML += `<p> ${i}</p>`; 
  }
}
 
 
 
  // gå igenom alla siffror från 1 till 100

  // kolla på siffran
  
  // om den är jämt delbar med 3 och 4, console.log('BishBosh')
  
  // om den är jämnt delbar med 3, console.log('Bish)
  
  // om den är jämt delbar med 4, console.log('Bosh'
  // och om den inte är delbar med någon, console.log(num)