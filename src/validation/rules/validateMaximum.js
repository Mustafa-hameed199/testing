import i18n from '../../language/i18n';

export default class ValidateMaximum {
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
      this.errMsg = ['lang_less_chars_err', this.max, 'lang_characters'];
      return this.errMsg;
   }

}