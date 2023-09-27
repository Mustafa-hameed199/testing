export default class ValidateOnlyNumbers {
   errMsg;
   pattern = /^[0-9]+$/;
   isFloat = false;

   constructor(isFloat) {
      if (isFloat === true) {
         this.isFloat = true;
         this.pattern     = /^[0-9]+\.[0-9]+$/g;
      }
   }

   validate(value) {
      if (!this.pattern.test(value) && value != '') return this.setErr();
      else return true;
   }

   setErr() {
      if (this.isFloat) this.errMsg = ['lang_only_float_numbers'];
      else this.errMsg = ['lang_only_numbers'];

      return this.errMsg;
   }
}