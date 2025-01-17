const msg = document.querySelector('.massege-input');
const btn = document.querySelector('.button');
const remove = document.querySelector('.button-restart');



remove.addEventListener('click', () => {
  const output = document.querySelector('.message-output');
  if (output.children.length>0) {
    output.removeChild(output.lastElementChild);

  }
  // output.innerHTML = '';
});


btn.addEventListener('click', () => {
  const output = document.querySelector('.message-output');
  if (msg.value.trim() !== "") {
    const li = document.createElement('li')
    li.textContent =msg.value
    output.appendChild(li);
    msg.value = "";
  }
  // output.innerHTML = msg.value;
  //  msg.value = "";
 });
