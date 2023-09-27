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
      this.errMsg =  ['lang_has_to_be', this.length,'lang_characters'];
      return this.errMsg;
   }

}