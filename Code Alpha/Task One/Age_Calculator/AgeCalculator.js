//  defining errors message by calling HTML Element using DOM
let errors = document.getElementById('errors')
//Using Event Handller for button that has id with (calculate)
calculate.addEventListener('click', () => {
    // conditional statements, if user didn't fill date, month and year errors should display
    if (dob.value === '') {
        errors.innerHTML = 'Please enter your date of birth'
        errors.style.color = 'red';
        errors.style.display = 'block'
        return
    
     }else {         //else if user fill required field, it should display Date, month and year
        let birthDate = new Date(document.getElementById('dob').value); //declaring birthDate and assigned it to dob
        let currentDate = new Date(); //declaring current date 
        let age = currentDate.getFullYear() - birthDate.getFullYear(); // assigned age to currentDate.getFullYear and minus it from birthDate.FullYear
        const monthDiv = currentDate.getMonth() - birthDate.getMonth(); //assigned monthdiv to currentDate.getMonth and minus it from birthdate.get
        if (monthDiv < 0 || (monthDiv === 0 && currentDate.getDate() < birthDate.getDate())) { //conditional statements
            age--; //decreament by 1 
        }
        let months = monthDiv < 0 ? 12 + monthDiv : monthDiv; // assigned months to monthDiv and used ternary operator
        let days = currentDate.getDate() - birthDate.getDate(); //assigned days to currentDate.getDate minus it from birthday.getDate
        if (days < 0) {     //conditional statements
              const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            days += lastDayOfMonth;
        }          
        
                //getting listed element below by using DOM method and adding it to innerHTML for each element
        document.getElementById('months').innerHTML = months; 
        document.getElementById('days').innerHTML = days;
        document.getElementById('year').innerHTML = age;
        errors.style.display = 'none'  //if user fill the input field errors message should display none
        document.getElementById('dob').innerHTML = ''; //filled input box should clear after calculate event handdler has perfom the operation at a time 
    }
})