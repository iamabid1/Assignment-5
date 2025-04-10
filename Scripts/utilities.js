function getInputValuebyID(id) {
    const amount = document.getElementById(id).value; 
    const convertedAmount = parseFloat(amount);
    return convertedAmount;
}