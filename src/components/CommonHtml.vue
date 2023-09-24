<template>
   <div>
      <div id="loading-response" class="d-none">
         <lord-icon
            src="https://cdn.lordicon.com/dpinvufc.json"
            trigger="loop"
            colors="primary:#121331,secondary:#08a88a"
            style="width:100px;height:100px">
         </lord-icon>
      </div>
   </div>
</template>

<script>

   export default {
      name: 'commonHtml',
   }

</script>

<style scoped lang="scss">
   #loading-response {
      position: absolute;
      inset: 0;
      z-index: 1000;
      display: grid;
      place-items: center;
      pointer-events: none;
   }
</style>