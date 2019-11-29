<template>
  <div class="list container">
    <h3 class="center-align">
      Total Calories:
      <span class="total-calories">{{getTotalCalories}}</span>
    </h3>
    <ul class="collection">
      <li class="collection-item" v-for="(elem, index) in array" :key="index">
        <strong>
          {{ elem.title }}
          <em>{{ elem.calories }}</em>
        </strong>
        <a href="#" class="secondary-content" @click.prevent="editElement(elem, index)">
          <i class="material-icons">edit</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["array", "getTotalCalories"],
  methods: {
    editElement(elem, index) {
      this.$emit("editTask", elem, index);
    },
  },
  computed: {

  }
};
</script>

<style lang="scss" scoped>
em {
  color: grey;
}
li {
  font-size: 1.2rem;
}
</style>