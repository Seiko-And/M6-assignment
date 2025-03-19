'use strict'
window.addEventListener('load', () =>{ // When the whole page has loaded
    // Shortcut function to select elements
    const $ = selector => document.querySelector(selector);

    // When the form has submitted 
    $('#empForm').addEventListener('submit',(e)=>{
        e.preventDefault(); // Prevent submitting the form by default

        // The inputs values and formated it to display
        let display = `ID : ${$('#id').value}\n`;  
        display += `Name : ${$('#name').value}\n`;
        display += `Extension : ${$('#ext').value}\n`;
        display += `Email : ${$('#email').value}\n`;
        display += `Department : ${$('#department').value}`;
        console.log(display); // Display the inputs value
        $('#empForm').reset(); // Reset the form after submitting
    });      
});

/*  ---- Another idea (More than 15 liens of codes)---------
window.addEventListener('load', () =>{
    const form = document.querySelector('form');
    const formElements = form.elements;
    const title = ['ID', 'Name', 'Extension', 'Email', 'Department'];
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let n = 0;
        for (let i = 0; i < formElements.length; i++){
            if (formElements[i].type !== 'submit'){
                const display = `${title[n]} : ${formElements[i].value}`;
                n++
                console.log(display); 
            }
        } 
        form.reset();
    });      
}); 
*/ 

 

 

   
 
  



