# JavaScript Code Documentation

The following is the documentation for the provided JavaScript code:

> 💡 Code auto-documented by ChatGPT 🤖

> 👉 See : [index.html](./Readme.md)

> 👉 See : [styles.css](./styles.css.md)


```javascript
function showTab(tabId) {
  // Hide all tab contents
  const contents = document.getElementsByClassName('content');
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }

  // Deactivate all tabs
  const tabs = document.getElementsByClassName('tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // Show the selected tab content
  document.getElementById(tabId).style.display = 'flex';

  // Activate the clicked tab
  document.getElementById(tabId + '-tab').classList.add('active');
}
```

This function is responsible for displaying the selected tab and hiding other tab contents. It takes the `tabId` as a parameter and performs the following steps:
1. It hides all tab contents by setting their display style to 'none'.
2. It deactivates all tabs by removing the 'active' class from their classList.
3. It shows the selected tab content by setting its display style to 'flex'.
4. It activates the clicked tab by adding the 'active' class to its classList.

```javascript
document.getElementsByClassName('tab')[0].click();
```

This line of code sets the first tab as active by default. It selects the first element with the 'tab' class and triggers a click event on it.

```javascript
// Chat code
// ...
```

This comment section indicates the start of the chat code.

```javascript
const chatIcon = document.querySelector('.chat-icon');
const chatWindow = document.querySelector('.chat-window');
const closeBtn = document.querySelector('.close-btn');
const inputArea = document.querySelector('.input-area');
const sendBtn = document.querySelector('.send-btn');
```

These lines of code select various elements from the document using their class names to handle the chat window interaction.

```javascript
chatIcon.addEventListener('click', () => {
  chatWindow.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  chatWindow.style.display = 'none';
});

sendBtn.addEventListener('click', () => {
  sendMessage();
});

inputArea.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
```

These event listeners handle the interaction with the chat window. They listen for click and keyup events on the chat icon, close button, send button, and input area, and perform corresponding actions such as displaying or hiding the chat window and sending a message.

```javascript
function sendMessage() {
  // ...
}

function replyMessage(message) {
  // ...
}

function addMessage(content, type) {
  // ...
}

function scrollToBottom() {
  // ...
}
```

These functions are related to sending and replying to messages, adding messages to the chat window, and scrolling to the bottom of the messages container.

```javascript
function getReplyMessage(message) {
  const questions = {
    '1': 'What are the admission requirements?',
    '2': 'What are the available undergraduate programs?',
    '3': 'What are the fees for postgraduate programs?',
    '4': 'How can I apply for international admissions?',
    '5': 'What are the research areas for PhD programs?',
  };

  const replies = {
    '1': 'The admission requirements vary based on the program you are applying to. Please visit our website for detailed information.',
    '2': 'We offer various undergraduate programs including Computer Science, Engineering, Business, and more. You can find the complete list on our website.',
    '3': 'The fees for postgraduate programs

 differ depending on the specific program. Please check our website for the details regarding the fees.',
    '4': 'To apply for international admissions, you can visit our website and follow the application process mentioned for international students.',
    '5': 'Our PhD programs cover research areas such as Artificial Intelligence, Data Science, Robotics, and more. You can explore the research areas on our website.',
  };

  return replies[message] || "I'm sorry, I don't have the answer to that question.";
}
```

This function takes a message as a parameter and returns a reply message based on the provided message. It uses a predefined set of questions and replies to generate the response.

```javascript
// Chatbot UI interaction
// ...
```

This comment section indicates the start of the chatbot UI interaction code, which handles selecting chips and sending/receiving messages.

```javascript
function selectChip(index) {
  const chip = document.querySelector(`.chips .chip:nth-child(${index})`);
  const message = chip.textContent;
  addMessage(message, 'outgoing');
  scrollToBottom();
  setTimeout(() => {
    replyMessage(index);
  }, 500);
}
```

This function is called when a chip is selected in the chat window. It takes the index of the selected chip as a parameter and performs the following steps:
1. It selects the chip element using a query selector and the provided index.
2. It retrieves the text content of the selected chip.
3. It adds the outgoing message to the chat window.
4. It scrolls to the bottom of the messages container.
5. It waits for 500 milliseconds and then triggers the reply message with the index as a parameter.

This concludes the documentation of the provided JavaScript code.