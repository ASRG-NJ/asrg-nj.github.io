
(function(){
  const btn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');
  if(btn && menu){
    btn.addEventListener('click', function(){
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  const form = document.querySelector('[data-signin-form]');
  const error = document.querySelector('[data-login-error]');
  const forgot = document.querySelector('[data-forgot]');
  function showError(message){
    if(error){
      error.textContent = message;
      error.classList.add('show');
      error.setAttribute('role','alert');
    }
  }
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      showError('Incorrect email or username.');
    });
  }
  if(forgot){
    forgot.addEventListener('click', function(e){
      e.preventDefault();
      showError('Enter valid email or username.');
    });
  }
})();
