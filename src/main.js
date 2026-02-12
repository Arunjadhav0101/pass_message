const messageInput = document.querySelector('.message-input');
const addBtn = document.querySelector('.btn-add');
const clearBtn = document.querySelector('.btn-clear');
const messageList = document.querySelector('.message-list');

Add message function
function addMessage() {
  const message = messageInput.value.trim();
  
  if (message === '') {
    messageInput.focus();
    return;
  }
  
  const li = document.createElement('li');
  li.innerHTML = `<span>${message}</span><button class="remove-btn">×</button>`;
  messageList.appendChild(li);
  
  messageInput.value = '';
  messageInput.focus();
}

Clear all messages function
function clearMessages() {
  messageList.innerHTML = '';
  messageInput.focus();
}

// Event listeners
addBtn.addEventListener('click', addMessage);
clearBtn.addEventListener('click', clearMessages);

// Remove single message
messageList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    e.target.parentElement.remove();
  }
});

// Enter key support
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addMessage();
  }
});

Focus input on page load
messageInput.focus();
