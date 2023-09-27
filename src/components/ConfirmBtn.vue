<template>
   <div>
      <button
         class="btn txt-cap flex-center gap-2"
         :class="[
            btnBg != undefined ? btnBg : '', 
            mainBtnSm ?? false ? 'btn-sm' : '',
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
         mainBtnSm:                      Boolean,
         title:                          String,
         text:                           String,
         icon:                           String,
         confirmBtnBgClr:                String,
         cancelBtnBgClr:                 String,
         confirmBtnTxt:                  String,
         cancelBtnTxt:                   String,
         confirmSuccessTxt:              String,
         confirmSuccessTime:             Number,
         confirmSuccessPos:              String,
      },

      methods: {
         showConfirmation(event) {
            let el     = event.target;
            let title  = this.title == undefined ? (this.icon == 'error' ? this.$t('lang_you_sure_confirm_deleting') : this.$t('lang_you_want_to_confirm_action')) : this.title;
            let text   = this.text;
            let icon   = this.icon == undefined ? 'warning' : this.icon;

            let confirmButtonColor = this.confirmBtnBgClr    || (this.icon == 'success' ? '#333' : '#3085d6');
            let cancelButtonColor  = this.cancelBtnBgClr     || '#d33';
            let confirmBtnText     = this.confirmBtnTxt      || this.$t('lang_yes');
            let cancelBtnText      = this.cancelBtnTxt       || this.$t('lang_no');
            let confirmSuccessTxt  = this.confirmSuccessTxt  || this.$t('lang_deleted');
            let confirmSuccessTime = this.confirmSuccessTime || 1250;
            let confirmSuccessPos  = this.confirmSuccessPos  || 'top-end';
            
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
                  if (this.successMsgAfterConfirm || true) success(confirmSuccessTxt, hideSuccessIconAfterConfirm || false, confirmSuccessTime, successMsgFontSizeAfterConfirm, confirmSuccessPos);
                  isConfirmed = true;
               } else isConfirmed = false;
               
               this.$emit('make-confirmation', isConfirmed);
            });
         }
      },

      computed: {
         btnTxt() {
            if (this.mainBtnTxt == undefined) {
               if      (this.icon == 'error')   return this.$t('lang_delete');
               else if (this.icon == 'success') return this.$t('lang_update');
               else if (this.icon == 'warning') return this.$t('lang_confirm');
               else if (this.icon == 'info')    return this.$t('lang_confirm');
               else return this.$t('lang_show');
            }
            return this.mainBtnTxt != undefined ? this.mainBtnTxt : this.$t('lang_confirm')
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