window.addEventListener('load', () =>{
    const form = document.querySelector('form');
    const formElements = form.elements;
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        for (let i = 0; i < formElements.length; i++){
            if (formElements[i].type !== 'submit'){
                const display = `${formElements[i].name} : ${formElements[i].value}`;
                console.log(display); 
            }
        } 
        form.reset();
    });      
});

    

 

 

   
 
  



