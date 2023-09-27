export default class ValidateMinimum {
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
      this.errMsg = ['lang_more_chars_err', this.min, 'lang_characters'];
      return this.errMsg;
   }

}