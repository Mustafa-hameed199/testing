import ValidateEmpty from './rules/validateEmpty';
import ValidateEmail from './rules/validateEmail';
import ValidateMaximum from './rules/validateMaximum';
import ValidateMinimum from './rules/validateMinimum';
import ValidateOnlyNumber from './rules/validateOnlyNumber';
import ValidateSpecialChar from './rules/validateSpecialChar';
import ValidateLength from './rules/validateLength';

import Validation from './rules/validation';


export class ValidationTrigger {

   validating(names) {
      
      let ValidateClass = new Validation();

      names.forEach( name => {
      
         if (name.notEmpty === true)    ValidateClass  = ValidateClass.addRule(new ValidateEmpty());
         if (name.onlyNumbers === true) ValidateClass  = ValidateClass.addRule(new ValidateOnlyNumber(name.float));
         if (isNum(name.length))        ValidateClass  = ValidateClass.addRule(new ValidateLength(name.length));
         if (isNum(name.max))           ValidateClass  = ValidateClass.addRule(new ValidateMaximum(name.max));
         if (isNum(name.min))           ValidateClass  = ValidateClass.addRule(new ValidateMinimum(name.min));
         if (name.specialChar === true) ValidateClass  = ValidateClass.addRule(new ValidateSpecialChar(name.hasSpecialChar));
         if (name.email === true)       ValidateClass  = ValidateClass.addRule(new ValidateEmail());
   
         if (name.showErrNextParent) ValidateClass.addErrNextParent();
         ValidateClass.validate(name.name);
      });
      
      if (ValidateClass.errorMsgs.length == 0) return true;
      else return false;
   
   }

   addCustomErr(name, errMsg = [], errNextParent = false) {
      let ValidateClass = new Validation();
   
      if (errNextParent) ValidateClass.addErrNextParent();
      ValidateClass.addCustomErr(name, errMsg);
   }

   rmvCustomErr(name, errNextParent = false) {
      let ValidateClass = new Validation();
   
      if (errNextParent) ValidateClass.addErrNextParent();
      ValidateClass.removeErr(name);
   }

   customErr(condition, name, errMsg = [], errNextParent = false) {

      if (condition) {
         this.addCustomErr(name, errMsg, errNextParent);
         return true;
      } else {
         this.rmvCustomErr(name, errNextParent);
         return false;
      }
   
   }
   

}