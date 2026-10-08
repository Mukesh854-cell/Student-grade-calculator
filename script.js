const inputName = document.querySelector('.student-name');
const firstSub = document.querySelector('.sub1');
const secondSub = document.querySelector('.sub2');
const thirdSub = document.querySelector('.sub3');
const calculateResult = document.querySelector('.calculate-result');
const result = document.querySelector('.result');


calculateResult.addEventListener('click', () => {
    const inputNameValue = inputName.value;
    const firstSubValue = Number(firstSub.value); 
    const secondSubValue = Number(secondSub.value); 
    const thirdSubValue = Number(thirdSub.value); 
    
    const total = [];
    
    total.push(firstSubValue);
    total.push(secondSubValue);
    total.push(thirdSubValue);

    
    if (firstSubValue > 100 || secondSubValue > 100 || thirdSubValue > 100) {
        result.textContent = "Marks cannot be more than 100";
        return;
    }
    const totalResult = total.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);

    const percentage = (totalResult / 300) * 100;

    total.forEach((marks) => {
        const marksList = document.createElement('p');
        marksList.innerHTML = marks;
        result.appendChild(marksList);
    });

    result.textContent = `${percentage.toFixed(2)} %`

    inputName.value = '';
    firstSub.value = '';
    secondSub.value = '';
    thirdSub.value = '';
})