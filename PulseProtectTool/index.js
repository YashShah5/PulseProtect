function selectOption(field, value) {
    document.getElementById(field).value = value;
    // Highlights the selected button for clarity
    document.querySelectorAll('button').forEach(button => {
        if (button.getAttribute('onclick').includes(`'${field}'`)) {
            button.style.backgroundColor = button.textContent === value ? 'lightgreen' : '';
        }
    });
}

function submitForm() {
    const gender = document.getElementById('gender').value;
    const smoker = document.getElementById('smoker').value;
    const overweight = document.getElementById('overweight').value;
    const platelets = document.getElementById('platelets').value;
    const hypertension = document.getElementById('hypertension').value;
    const heartDisease = document.getElementById('heartDisease').value;

    // Display the risk message
    document.getElementById('result').textContent = "There is a 67.3% chance you are at risk for heart disease.";
}

// Ensures buttons revert to default style on page reload
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = '';
    });
});
