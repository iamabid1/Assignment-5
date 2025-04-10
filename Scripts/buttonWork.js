function clickHandle(button) {
    alert("You Have Completed The Task");

    let decreaseNumber = document.getElementById('decreaseNumber');
    let increaseNumber = document.getElementById('increaseNumber');

    let decrease = parseInt(decreaseNumber.textContent);
    let increase = parseInt(increaseNumber.textContent);

    
    decreaseNumber.textContent = decrease - 1;  
    increaseNumber.textContent = increase + 1;  

    if (decreaseNumber.textContent === '0') {
        alert("You have completed all tasks!");
    }

    button.disabled = true;

    let time = new Date();
    let timeStamp = time.toLocaleString();
    
    let historyList = document.getElementById('historyList');
    let newElement = document.createElement('li');
    newElement.textContent = `Task was completed at ${timeStamp}`;
    historyList.appendChild(newElement);

}

