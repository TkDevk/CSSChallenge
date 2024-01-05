const printDate = () => {
    const inputDay = parseFloat(document.getElementById('inputDay').value);
    const inputMonth = parseFloat(document.getElementById('inputMonth').value);
    const inputYear = parseFloat(document.getElementById('inputYear').value);
    const currentDate = new Date();
    const todayDate = {
        currentYear: currentDate.getFullYear(),
        currentMonth: currentDate.getMonth() + 1, // Default value is 11
        currentDay: currentDate.getDate()
    };




    /*   Everything working so i'm going to use a Js's library to calculate the current date
    
        showDay.innerHTML = `<span>${Math.abs(currentDate.currentDay-inputDay)}</span>`;
        showMonth.innerHTML = `<span>${Math.abs(inputMonth%currentDate.currentMonth)}</span>`;
        showYear.innerHTML = `<span>${currentDate.currentYear-inputYear}</span>`;
    */
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    //Using Date() method Js
    //const currentDate = new Date();
    //Kuddos to youtube video : https://www.youtube.com/watch?v=w6-9PfboI2g

    if (inputDay > todayDate.currentDay) {
        todayDate.currentDay += month[todayDate.currentMonth - 1] // if today is less than bday so decrease 1 month //month[i]
        todayDate.currentMonth += -1;
    }

    if (inputMonth > todayDate.currentMonth) {
        todayDate.currentMonth += 12;
        todayDate.currentYear += -1;
    }
    /** Error Message logic*/

    const setError = (element, message) => {
        const list = element.closest('.list');
        const errorDisplay = list.querySelector('.error');
        // Set error message
        errorDisplay.innerHTML = message;
        // In case that error = true
        list.classList.add('error');
        list.classList.remove('success');
    }

    /**
     * Function to verify the input values
     */
    /*get id to show the output*/
    const showYear = document.getElementById('years')
    const showMonth = document.getElementById('months')
    const showDay = document.getElementById('days')

    /**Error Message */
    const errorYear = document.querySelector('.errorY');
    const errorMonth = document.querySelector('.errorM');
    const errorDay = document.querySelector('.errorD');

    /**Year */
    if (inputYear === '' || isNaN(inputDay)) {
        showError(errorYear, 'This field is required');
    } else if (inputYear > todayDate.currentYear) {
        showError(errorYear, 'Must be a valid value year');
    } else {
        hideError(errorYear);
        showYear.textContent = `${todayDate.currentYear - inputYear}`;
    }

    /**Month */
    if (inputMonth === '' || isNaN(inputMonth)) {
        showError(errorMonth, 'This field is required');
    } else if (inputMonth < 1 || inputMonth > 12) {
        showError(errorMonth, 'Must be a valid value month');
    } else {
        hideError(errorMonth);
        showMonth.innerHTML = `${todayDate.currentMonth - inputMonth}`;
    }

    /**Day */
    if (inputDay === '' || isNaN(inputDay)) {
        showError(errorDay, 'This field is required');
    } else if (inputDay < 1 || inputDay > 31) {
        showError(errorDay, 'Must be a valid value day');
    } else {
        hideError(errorDay);
        showDay.innerHTML = `${todayDate.currentDay - inputDay}`;
    }
 

    /**
     * Functions to hide and show error message
     */
    function showError(errorElement, errorMessage) {
        errorElement.style.display = 'flex';
        errorElement.innerHTML = errorMessage;
    }

    function hideError(errorElement) {
        errorElement.style.display = 'none';
    }
}