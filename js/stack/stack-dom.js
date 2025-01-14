const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const stackContainer = document.querySelector('#stack-container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = "";
};

const renderListStack = () => {
  // ... your code goes here
  //Renderizar la lista con elementos en gris
  warningTopStack.style.display = "none"
  warningBottomStack.style.display = "none"
  let currentStack = newStack.display();
  console.log(currentStack)
  if ( stackList.hasChildNodes() ) stackList.innerHTML = ""
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    let listItem = currentStack[i] ?  currentStack[i] : document.createElement("li")
    listItem.className = currentStack[i]?.className ? currentStack[i].className : "inactive"
    stackList.appendChild(listItem)
  }
};

renderListStack();

const generateWarningStack = (type,error) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.style.display = "block"
    warningBottomStack.innerText = error.message
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.style.display = "block"
    warningTopStack.innerText = error.message
  }
};

const addToStack = () => {
  try {
    let listItem = document.createElement("li")
    listItem.innerText = stackInput.value;
    listItem.className = "active"
    newStack.push(listItem)
    clearStackInput()
    renderListStack()
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningStack("overflow",error)
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
    newStack.pop()
    renderListStack()

  } catch (error) {
    // there was an underflow error, handle it
    generateWarningStack("underflow",error)
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
