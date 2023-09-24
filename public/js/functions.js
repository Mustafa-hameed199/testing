// ====================== Check If The Value Is Number ======================
function isNum(value) {
   return Number.isInteger(value);
}


// ====================== To Skip Argument By Insetting Argument Value As Undefined ( works only if arguments have default values) ======================
function skip(number) {
   return Array(number);
}


// ====================== Get Cookie Value By Name ======================
function getCookie(name) {
   if (document.cookie == '') return null;

   let cookies      = document.cookie.split(';');
   let cookiesName  = [];
   let cookiesValue = [];

   cookies.forEach(cookie => {
      cookiesName.push(cookie.split('=')[0].trim());
      cookiesValue.push(cookie.split('=')[1].trim());
   });

   if (cookiesName.includes(name)) {
      let index = cookiesName.indexOf(name);
      return cookiesValue[index];
   } 
   
   return null;
}


// ====================== Setting Cookies ======================
function setCookie(name, value, expirationNumber, expirationType = 'year') {
   let expirationDate = new Date();

   if (expirationType.trim().toLocaleLowerCase() == 'year') {
      expirationDate.setFullYear(expirationDate.getFullYear() + expirationNumber);

   } else if (expirationType.trim().toLocaleLowerCase() == 'day') {
      expirationDate.setDate(expirationDate.getDate() + expirationNumber);
   }

   let cookieString =
   name +
      '=' +
      encodeURIComponent(value) +
      '; expires=' +
      expirationDate.toUTCString() +
      '; path=/';

   document.cookie = cookieString;
}


// ====================== Make notifications ======================
function notifications(type = '', msg = '', noIcon = false, time = 1250, fontSize="fs-25", position = 'top-end', showConfirmBtn = false) {
   if (window.innerWidth <= 767) fontSize = 'fs-20';
   
   Swal.fire({
      icon: noIcon ? '' : type,
      position,
      title: `<span class="txt-cap ${fontSize}">${msg}</span>`,
      showConfirmButton: showConfirmBtn,
      timer: showConfirmBtn ? false : time,
   });

}


// ====================== Make Success Notification ======================
function success(msg = '', noIcon = false, time = 1250, fontSize = 'fs-25', position = 'top-end', showConfirmBtn = false) {
   if (window.innerWidth <= 767) fontSize = 'fs-20';
   
   Swal.fire({
      icon: noIcon ? '' : 'success',
      position,
      title: `<span class="txt-cap ${noIcon ? 'text-success' : ''} ${fontSize}">${msg}</span>`,
      showConfirmButton: showConfirmBtn,
      timer: showConfirmBtn ? false : time,
   });

}


// ====================== Make Waring Notification ======================
function warning(msg = '', noIcon = false, time = 1250, fontSize = 'fs-25', position = 'top-end', showConfirmBtn = false) {
   if (window.innerWidth <= 767) fontSize = 'fs-20';

   Swal.fire({
      icon: noIcon ? '' : 'warning',
      position,
      title: `<span class="txt-cap ${noIcon ? 'text-warning' : ''} ${fontSize}">${msg}</span>`,
      showConfirmButton: showConfirmBtn,
      timer: showConfirmBtn ? false : time,
   });

}


// ====================== Make Getting Fetch Data Short ======================
async function shortFetch(url, isHtml = false, headers = {}, body = null, method = 'GET', hasLoader = true) {
   if (hasLoader) {
      if (document.getElementById('loading-response')) document.getElementById('loading-response').classList.remove('d-none');
   }

   try {
      let data = await fetch(url, {
         method,
         headers: typeof headers != 'string' ? {} : {"Content-Type": headers},
         body
      });

      return isHtml ? data.text() : data.json();  

   } catch (error) {
      console.error(new Error(error));
   } finally {
      if (hasLoader) {
         if (document.getElementById('loading-response')) document.getElementById('loading-response').classList.add('d-none');
      }
   }

}


// ====================== To Format The Price And Put Currency Sign ======================
function int_format(number, currency_type) {
   let lang = getCookie('diamond_lang');

   if (number == 0) return 0;
   else if (currency_type == 'dollar') return parseFloat(number).toLocaleString() + ' $';
   else if (currency_type == 'dinar') {
         let sign = lang == 'ar' ? 'د.ع' : ' IQD';
         return parseFloat(number).toLocaleString() + " " + sign;
   }
}


// ====================== To Help Get Elements Shorter ======================
function el(name = '') {
   if (document.querySelector(name)) return document.querySelector(name);
   else return false;
}


// ====================== Validate The Inputs ======================
function validate(names) {
   let ValidateClass = new Validation();
   
   names.forEach(name => {
   
      if (name.empty === true)       ValidateClass  = ValidateClass.addRule(new ValidateEmpty());
      if (name.onlyNumber === true)  ValidateClass  = ValidateClass.addRule(new ValidateOnlyNumbers(name.float));
      if (isNum(name.length))        ValidateClass  = ValidateClass.addRule(new ValidateMustBeLength(name.length));
      if (isNum(name.max))           ValidateClass  = ValidateClass.addRule(new ValidateMaximum(name.max));
      if (isNum(name.min))           ValidateClass  = ValidateClass.addRule(new ValidateMinimum(name.min));
      if (name.specialChar === true) ValidateClass  = ValidateClass.addRule(new ValidateSpecialChar(name.hasSpecialChar));
      if (name.email === true)       ValidateClass  = ValidateClass.addRule(new ValidateEmail());

      if (name.showErrNextParent) ValidateClass.addErrNextParent();
      ValidateClass.validate(name.name);

   });
   
   if (ValidateClass.errorMsgs.length == 0) return true;
   else return false;

}

// ====================== Add Custom Error Message Like If Username Already Exits When Entering New User ======================
function addCustomErr(name, errMsg = '', errNextParent = false) {
   let ValidateClass = new Validation();

   if (errNextParent) ValidateClass.addErrNextParent();
   ValidateClass.addCustomErr(name, errMsg);
}


// ====================== Remove Error Messages From An Element ======================
function rmvCustomErr(name, errNextParent = false) {
   let ValidateClass = new Validation();

   if (errNextParent) ValidateClass.addErrNextParent();
   ValidateClass.removeErr(name);
}


// ====================== Simple Function That Take 2 Above Functions Mix Them To Reduce Repeating Code ======================
function customErr(condition, name, errMsg, errNextParent = false) {

   if (condition) {
      addCustomErr(name, errMsg, errNextParent);
      return true;
   } else {
      rmvCustomErr(name, errNextParent);
      return false;
   }

};


