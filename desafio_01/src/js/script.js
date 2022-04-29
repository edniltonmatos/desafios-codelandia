//LOADING
document.body.insertAdjacentHTML('beforeend', `
  <div id="loading">
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
    </svg>
  </div>
`)
window.addEventListener('load', () => {
  setTimeout(() => {
    loading.remove()
    app.removeAttribute('style')
  }, 300);

})