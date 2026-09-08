const dialog = document.getElementById('art-dialog');
document.getElementById('open-art').addEventListener('click', () => {
  dialog.showModal();
  document.body.classList.add('modal-open');
});
document.getElementById('close-art').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const b = dialog.getBoundingClientRect();
    if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom) dialog.close();
  }
});
