const minutesInput = document.querySelector('input[required="minutes"]');
const calculateButton = document.querySelector('input[type="submit"]');
const secondsOutput = document.querySelector('label[sec]');
calculateButton.addEventListener('click', () => {
    const minutes = parseFloat(minutesInput.value);
    if (!isNaN(minutes)) {
        const seconds = minutes * 60;
        secondsOutput.textContent = `${seconds} seconds`;
    } else {
        secondsOutput.textContent = 'Please enter a valid number of minutes.';
    }
});


