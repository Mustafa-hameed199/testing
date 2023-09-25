export default class ValidateLength {
   length;
   errMsg;

   constructor(length = 0) {
      this.length = length;
   }

   validate(value) {
      if (value.length != this.length) return this.setErr();
      else return true;

   }
   
   setErr() {
      this.errMsg = `this field must be ${this.length} characters`;
      return this.errMsg;
   }

}