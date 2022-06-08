const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = "";
};

const generateListQueue = () => {
  // ... your code goes here
  warningTopQueue.style.display = "none"
  warningBottomQueue.style.display = "none"
  let currentQueue = queue.display();
  console.log(currentQueue)
  if ( queueUL.hasChildNodes() ) queueUL.innerHTML = ""
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    let listItem = currentQueue[i] ?  currentQueue[i] : document.createElement("li")
    listItem.className = currentQueue[i]?.className ? currentQueue[i].className : "inactive"
    queueUL.appendChild(listItem)
  }
};

generateListQueue();

const generateWarningQueue = (type,error) => {
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

const addToQueue = () => {
  try {
    // ... your code goes here
    let listItem = document.createElement("li")
    listItem.innerText = queueInput.value;
    listItem.className = "active"
    queue.enqueue(listItem)
    clearQueueInput()
    generateListQueue()
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningQueue("overflow",error)
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    queue.dequeue();
    generateListQueue()
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue("underflow",error)
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
