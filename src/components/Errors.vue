<template>
  <div class="container">
    <div class="orange darken-4">{{msg}}</div>
  </div>
</template>

<script>
export default {
   props: ['msg']
};
</script>

<style lang="scss" scoped>
   .orange{
      padding: 15px 7px;
      margin: 15px 0;
      font-size: 1.2rem;
      border-radius: 4px;
   }
</style>