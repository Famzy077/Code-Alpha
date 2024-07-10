let errors = document.getElementById('errors')
calculate.addEventListener('click', () => {
    if (dob.value === '') {
        errors.innerHTML = 'Please enter your date of birth'
        errors.style.color = 'red';
        errors.style.display = 'block'
        return
    
    }else {
        const birthDate = new Date(document.getElementById('dob').value);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiv = currentDate.getMonth() - birthDate.getMonth();
        if (monthDiv < 0 || (monthDiv === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        const months = monthDiv < 0 ? 12 + monthDiv : monthDiv;
        const days = currentDate.getDate() - birthDate.getDate();
        if (days < 0) {
              const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            days += lastDayOfMonth;
        }
        document.getElementById('months').innerHTML = months;
        document.getElementById('days').innerHTML = days;
        document.getElementById('year').innerHTML = age;
        errors.style.display = 'none'
        document.getElementById('dob').innerHTML = '';
    }
})