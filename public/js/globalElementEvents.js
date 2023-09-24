//▬▬▬▬▬▬▬▬ to force user write only numbers & points
if (el('[data-float-int]')) {

   el('[data-float-int]').addEventListener('input', function() {
      if (this.value.trim() == '.') this.value = '';
      this.value = this.value.replace(/[^0-9\.]/g, '');
   });

}

//▬▬▬▬▬▬▬▬ to force user write only numbers 
if (el('[data-only-int]')) {

   el('[data-only-int]').addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, '');
   });

}


//▬▬▬▬▬▬▬▬ Show Password Icon
if (el('[data-show-pwd-icon]')) {

   el('[data-show-pwd-icon]').addEventListener('click', function() {
      let input = this.parentElement.querySelector('input');
      let attr  = input.getAttribute('type');

      if (attr == 'password') input.setAttribute('type', 'text');
      else input.setAttribute('type', 'password');
      
      this.classList.toggle('fa-eye-slash');
      this.classList.toggle('fa-eye');
   });

}

// ▬▬▬▬▬▬▬▬ cancel autocomplete in input 
document.querySelectorAll('input').forEach(input => {
   input.setAttribute('autocomplete', 'off');
});

