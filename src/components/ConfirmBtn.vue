<template>
   <div>
      <button
         class="btn txt-cap flex-center gap-2"
         :class="[
            btnBg != undefined ? btnBg : '', 
            mainBtnNoSm || false ? '' : 'btn-sm',
         ]"
         @click="showConfirmation($event)">
         {{ btnTxt }}
         <span v-if="btnIcon" v-html="btnIcon" :class="mainBtnIconFs != undefined ? `fs-${mainBtnIconFs}` : ''"></span>
      </button>
   </div>
</template>

<script>
   export default {
      name: 'ConfirmBtn',

      props: {
         successMsgAfterConfirm:         Boolean,
         hideSuccessIconAfterConfirm:    Boolean,
         successMsgFontSizeAfterConfirm: String,
         mainBtnTxt:                     String,
         mainBtnIcon:                    String,
         mainBtnIconFs:                  String,
         mainBtnBgClr:                   String,
         mainBtnNoSm:                    Boolean,
         title:                          String,
         text:                           String,
         icon:                           String,
         confirmBtnClr:                  String,
         cancelBtnClr:                   String,
         confirmBtnTxt:                  String,
         cancelBtnTxt:                   String,
         confirmSuccessTxt:              String,
         confirmSuccessTime:             Number,
         confirmSuccessPos:              String,
      },

      methods: {
         showConfirmation(event) {
            let el     = event.target;
            let title  = this.title == undefined ? 'Do you want to confirm ?' : this.title;
            let text   = this.text;
            let icon   = this.icon == undefined ? 'warning' : this.icon;

            let confirmButtonColor = this.confirmBtnClr == undefined ? (this.icon == 'success' ? '#333' : '#3085d6') : this.confirmBtnClr;
            let cancelButtonColor  = this.cancelBtnClr == undefined ? '#d33' : this.cancelBtnClr;
            let confirmBtnText     = this.confirmBtnTxt == undefined ? 'Yes' : this.confirmBtnTxt;
            let cancelBtnText      = this.cancelBtnTxt == undefined ? 'no' : this.cancelBtnTxt;
            let confirmSuccessTxt  = this.confirmSuccessTxt == undefined ? 'it is done !' : this.confirmSuccessTxt;
            let confirmSuccessTime = this.confirmSuccessTime == undefined ? 1250 : this.confirmSuccessTime;
            let confirmSuccessPos  = this.confirmSuccessPos == undefined ? 'top-end' : this.confirmSuccessPos;
            
            let hideSuccessIconAfterConfirm = this.hideSuccessIconAfterConfirm || false;
            let successMsgFontSizeAfterConfirm  = this.successMsgFontSizeAfterConfirm || 'fs-25';
            let titleFontSize = window.innerWidth <= 767 ? 'fs-22' : '';

            Swal.fire({
               title: `<span class="txt-cap ${titleFontSize}">${title}</span>`,
               text,
               icon,
               showCancelButton: true,
               confirmButtonColor,
               cancelButtonColor,
               confirmButtonText: `<span class="text-cap">${confirmBtnText}</span>`,
               cancelButtonText: `<span class="txt-cap">${cancelBtnText}</span>`
               
            }).then((result) => {
               let isConfirmed = false;
               
               if (result.isConfirmed) {
                  if (this.successMsgAfterConfirm) success(confirmSuccessTxt, hideSuccessIconAfterConfirm, confirmSuccessTime, successMsgFontSizeAfterConfirm, confirmSuccessPos);
                  isConfirmed = true;
               } else isConfirmed = false;
               
               this.$emit('make-confirmation', isConfirmed);
            });
         }
      },

      computed: {
         btnTxt() {
            if (this.mainBtnTxt == undefined) {
               if      (this.icon == 'error')   return 'delete';
               else if (this.icon == 'success') return 'update';
               else if (this.icon == 'warning') return 'change';
               else if (this.icon == 'info')    return 'confirm';
               else return 'show';
            }
            return this.mainBtnTxt != undefined ? this.mainBtnTxt : 'confirm'
         },
         btnBg () {
            if (this.mainBtnBgClr == undefined || this.mainBtnBgClr == '') {
               if      (this.icon == 'error')   return 'btn-danger';
               else if (this.icon == 'success') return 'btn-success';
               else if (this.icon == 'warning') return 'btn-warning';
               else if (this.icon == 'info')    return 'btn-primary';
               else return 'btn-dark';
            }
            
            return this.mainBtnBgClr != undefined ? this.mainBtnBgClr : 'btn-primary'
         },
         btnIcon () {
            if (this.mainBtnIcon == undefined || this.mainBtnIcon == '') {
               if      (this.icon == 'error')   return '<i class="fa-solid fa-trash"></i>';
               else if (this.icon == 'success') return '<i class="fa-solid fa-circle-check"></i>';
               else if (this.icon == 'warning') return '<i class="fa-solid fa-circle-exclamation"></i>';
               else if (this.icon == 'info')    return '<i class="fa-solid fa-circle-info"></i>';
               else return undefined
            }
            
            if (this.mainBtnIcon.trim() == 'delete') return '<i class="fa-solid fa-trash"></i>'
            if (this.mainBtnIcon.trim() == 'confirm') return '<i class="fa-solid fa-check"></i>'
         },
      }
   }
</script>