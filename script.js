document.addEventListener('DOMContentLoaded', () => {
  const outputElement = document.getElementById('output');
  const item1 = document.getElementById('item1');
  const item2 = document.getElementById('item2');
  let count = 0;
  let additionResult = 0;

  const updateOutput = (message) => {
    outputElement.textContent = message;
    console.log(message);
  };

  const handleClick = (event) => {
    count++;
    additionResult = count + 5;

    let isEven = count % 2 === 0;
    if (isEven && count > 10) { // Using AND logical operator
      updateOutput(`Clicked ${event.target.textContent}: Count is even and greater than 10. Addition result: ${additionResult}`);
    } else {
      updateOutput(`Clicked ${event.target.textContent}: Condition not met. Addition result: ${additionResult}`);
    }
  };

  item1.addEventListener('click', handleClick);
  item2.addEventListener('click', handleClick);
});
