const msg = document.querySelector('.massege-input');

msg.addEventListener('input', (event) => {
  console.log('User is typing:', event.target.value);
});
