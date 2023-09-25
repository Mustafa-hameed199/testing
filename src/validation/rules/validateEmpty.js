export default class ValidateEmpty {
   errMsg;

   validate(value) {
      if (value == '') return this.setErr();
      else return true;
   }

   setErr() {
      this.errMsg = 'please fill this field';
      return this.errMsg;
   }
}