export default class ValidateSpecialChar {
   errMsg;
   hasSpecialChar;
   pattern  = /^[a-zA-Z0-9_]+$/;

   constructor(hasSpecialChar = false) {
      this.hasSpecialChar = hasSpecialChar;
      if (this.hasSpecialChar === true) this.pattern = /^(?!.*')[A-Za-z0-9!@#$%^&*()-_+=,.?/;: ]*[!@#$%^&*()-_+=,.?/;:][A-Za-z0-9!@#$%^&*()-_+=,.?/;: ]*$/;
   }

   validate(value) {
      value = value.trim();
      if (!this.pattern.test(value)) return this.setErr();
      else return true;
   }

   setErr() {
      if (this.hasSpecialChar) this.errMsg = ['lang_not_has_special_chars_err'];
      else this.errMsg = ['lang_has_special_chars_err'];
      return this.errMsg;
   }
}