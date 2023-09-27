export default class ValidateEmpty {
   errMsg;

   validate(value) {
      if (value == '') return this.setErr();
      else return true;
   }

   setErr() {
      this.errMsg = ['lang_empty_field_err'];
      return this.errMsg;
   }
}