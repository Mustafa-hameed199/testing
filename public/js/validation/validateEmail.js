class ValidateEmail {
   errMsg;
   pattern  = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

   validate(value) {
      if (!this.pattern.test(value)) return this.setErr();
      else return true;
   }

   setErr() {
      this.errMsg = 'please inter a valid email';
      return this.errMsg;
   }
}