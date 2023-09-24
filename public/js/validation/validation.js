class Validation {
   objects           = [];
   errorMsgs         = [];

   element           = '';
   elementValue      = '';
   nextElement       = '';
   
   classObject       = this;
   errMsgNextParent  = false; 

   inputErrClassName = 'is-invalid';
   errMsgClassName   = 'invalid-feedback';

   addRule(object) {
      this.objects.push(object);
      return this;
   }

   validate(name) {
      this.setProps(name);
      
      // loop on validation classes 
      for (let obj of this.objects) {

         // check each classes if they are valid .. if not then sent err and break loop
         if (obj.validate(this.elementValue) !== true) {
            this.classObject.setErr(name, obj); break;
            
         } else this.classObject.setValid();

      }

      this.reset();
   }

   setProps(name) {
      this.element       = document.querySelector(`[name="${name}"]`);
      this.nextElement   = this.errMsgNextParent ? (this.element.parentElement.nextElementSibling ? this.element.parentElement.nextElementSibling : false) : (this.element.nextElementSibling ? this.element.nextElementSibling : false);
      this.elementValue  = this.element.value.trim();
      this.classObject   = this;
   }

   setErr(name, obj = {}) {
      this.errorMsgs.push({name, 'err': obj.errMsg});

      let errEl = this.createErrElement(obj);

      this.addErrClasses();
      this.removeOldErr();
      this.appendErrElement(errEl)
   }

   setValid() {
      if (this.errMsgNextParent) this.element.parentElement.classList.remove(this.inputErrClassName);
      this.element.classList.remove(this.inputErrClassName);

      if (this.nextElement) {
         if (this.nextElement.classList.contains(this.errMsgClassName)) this.nextElement.remove();
      }
   }

   addErrNextParent() {
      this.errMsgNextParent = true;
   }

   createErrElement(obj) {
      let errEl = document.createElement('span');
      errEl.classList.add(this.errMsgClassName);
      errEl.textContent = obj.errMsg;

      return errEl;
   } 

   addErrClasses() {
      if (this.errMsgNextParent) this.element.parentElement.classList.add(this.inputErrClassName);
      this.element.classList.add(this.inputErrClassName);
   }

   removeOldErr() {
      if (this.nextElement) {
         if (this.nextElement.classList.contains(this.errMsgClassName)) this.nextElement.remove();
      }
   }

   appendErrElement(errEl) {
      if (this.errMsgNextParent) this.element.parentElement.insertAdjacentElement('afterend', errEl);
      else this.element.parentNode.insertBefore(errEl, this.element.nextElementSibling);
   }

   reset() {
      this.errMsgNextParent = false;
      this.nextElement      = this.element.nextElementSibling ? this.element.nextElementSibling : false;
      this.objects          = [];
   }

   // ====================================== custom errors can developer add on any input
   addCustomErr(name, errMsg) {
      let obj = {errMsg};
      this.setProps(name);
      this.setErr(name, obj);
   }

   removeErr(name) {
      this.setProps(name);
      this.setValid();
   }
}