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
      if (!this.pattern.test(value)) return this.setErr();
      else return true;
   }

   setErr() {
      if (this.isFloat) this.errMsg = 'field should be only float numbers';
      else this.errMsg = 'field should be only numbers';

      return this.errMsg;
   }
}