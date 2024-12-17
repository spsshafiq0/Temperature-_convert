function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputScale = document.getElementById('inputScale').value;
    const outputScale = document.getElementById('outputScale').value;

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = "Please enter a valid number";
        return;
    }

    let celsiusValue;
    if (inputScale === 'celsius') {
        celsiusValue = inputValue;
    } else if (inputScale === 'fahrenheit') {
        celsiusValue = (inputValue - 32) * 5/9;
    } else if (inputScale === 'kelvin') {
        celsiusValue = inputValue - 273.15;
    }

    let result;

    if (outputScale === 'celsius') {
        result = celsiusValue;
    } else if (outputScale === 'fahrenheit') {
        result = (celsiusValue * 9/5) + 32;
    } else if (outputScale === 'kelvin') {
        result = celsiusValue + 273.15;
    }
    document.getElementById('result').innerText = inputValue + " " + inputScale.charAt(0).toUpperCase() + inputScale.slice(1) + " is equivalent to " + result.toFixed(2) + " " + outputScale.charAt(0).toUpperCase() + outputScale.slice(1);

}

function resetFields() {
    document.getElementById('inputValue').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('outputBox').style.display = 'none';
}

document.querySelector('button[onclick="convertTemperature()"]').addEventListener('click', function() {
    document.getElementById('outputBox').style.display = 'block';
});
