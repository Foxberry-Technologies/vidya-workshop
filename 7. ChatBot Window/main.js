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

// Set the first tab as active by default
document.getElementsByClassName('tab')[0].click();


// Chat code
// Chatbot UI interaction
const chatIcon = document.querySelector('.chat-icon');
const chatWindow = document.querySelector('.chat-window');
const closeBtn = document.querySelector('.close-btn');
const inputArea = document.querySelector('.input-area');
const sendBtn = document.querySelector('.send-btn');

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

function sendMessage() {
  const input = document.querySelector('.input-area input');
  const messageContent = input.value.trim();

  if (messageContent !== '') {
    addMessage(messageContent, 'outgoing');
    input.value = '';
    scrollToBottom();
    setTimeout(() => {
      replyMessage(messageContent);
    }, 500);
  }
}

function replyMessage(message) {
  const replyMessage = getReplyMessage(message);
  addMessage(replyMessage, 'incoming');
  scrollToBottom();
}

function addMessage(content, type) {
  const messages = document.querySelector('.messages');
  const messageWrapper = document.createElement('div');
  const message = document.createElement('p');
  message.textContent = content;
  messageWrapper.classList.add('message', type);
  messageWrapper.appendChild(message);
  messages.appendChild(messageWrapper);
}

function scrollToBottom() {
  const messages = document.querySelector('.messages');
  messages.scrollTop = messages.scrollHeight;
}

// Chatbot logic
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
    '3': 'The fees for postgraduate programs differ depending on the specific program. Please check our website for the details regarding the fees.',
    '4': 'To apply for international admissions, you can visit our website and follow the application process mentioned for international students.',
    '5': 'Our PhD programs cover research areas such as Artificial Intelligence, Data Science, Robotics, and more. You can explore the research areas on our website.',
  };

  return replies[message] || "I'm sorry, I don't have the answer to that question.";
}


// Chatbot UI interaction
// ...

function selectChip(index) {
  const chip = document.querySelector(`.chips .chip:nth-child(${index})`);
  const message = chip.textContent;
  addMessage(message, 'outgoing');
  scrollToBottom();
  setTimeout(() => {
    replyMessage(index);
  }, 500);
}
