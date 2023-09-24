let func;

//▬▬▬▬▬▬▬▬ to force user write only numbers & points
func = el => {
   if (el.value.trim() == '.') el.value = '';
   el.value = el.value.replace(/[^0-9\.]/g, '');
}
action('input', 'data-float-int', func);


//▬▬▬▬▬▬▬▬ to force user write only numbers
func = el => el.value = el.value.replace(/[^0-9]/g, '');
action('input', 'data-only-int', func);



//▬▬▬▬▬▬▬▬ Show Password Icon
func = el => {
   let input = el.parentElement.querySelector('input');
   let attr  = input.getAttribute('type');
   
   if (attr == 'password') input.setAttribute('type', 'text');
   else input.setAttribute('type', 'password');
   
   el.classList.toggle('fa-eye-slash');
   el.classList.toggle('fa-eye');
}
action('click', 'data-show-pwd-icon', func);


// ▬▬▬▬▬▬▬▬ cancel autocomplete in input
document.querySelectorAll('input').forEach(input => {
   input.setAttribute('autocomplete', 'off');
});

