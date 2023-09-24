class ValidateMinimum {
   min;
   errMsg;

   constructor(min) {
      this.min = min;
   }

   validate(value) {
      if (value.length <= this.min) return this.setErr();
      else return true;

   }
   
   setErr() {
      this.errMsg = `must be larger than ${this.min} characters`;
      return this.errMsg;
   }

}