class ValidateMaximum {
   max;
   errMsg;

   constructor(max) {
      this.max = max;
   }

   validate(value) {
      if (value.length > this.max) return this.setErr();
      else return true;

   }
   
   setErr() {
      this.errMsg = `must be smaller than ${this.max} characters`;
      return this.errMsg;
   }

}