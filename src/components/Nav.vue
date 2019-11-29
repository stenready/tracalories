<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Tracalorie | Meal & Caloria Tracer</a>
      <ul class="right">
        <li>
          <a href="#" class="btn btn blue lighten-1" @click="$emit('clearAll')">Clear All</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>