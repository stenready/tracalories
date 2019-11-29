<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <span class="card-title">{{getTitle}}</span>
        <form class="col">
          <div class="row">
            <!-- add field -->
            <div class="add-fields" v-if="!editionElement">
              <div class="input-field col s6">
                <input type="text" id="item-name" v-model="title" />
                <label for="item-name">Meal</label>
              </div>
              <div class="input-field col s6">
                <input type="number" id="item-calories" v-model="calories" />
                <label for="item-calories">Calories</label>
              </div>
              <div class="col s12 wrap-button">
                <button class="btn add-btn red lighten-1 z-depth-2" @click.prevent="addTask">
                  <i class="material-icons">add</i>
                  <span>Add Meal</span>
                </button>
              </div>
            </div>

            <!-- update -->
            <div class="update" v-else>
              <div class="input-field col s6">
                <input type="text" ref="title" id="item-name" :value="editionElement.elem.title" />
                <label class="active" for="item-name">Meal</label>
              </div>
              <div class="input-field col s6">
                <input
                  type="number"
                  ref="calories"
                  id="item-calories"
                  :value="editionElement.elem.calories"
                />
                <label for="item-calories" class="active">Calories</label>
              </div>
              <div class="col s12 wrap-button">
                <button class="btn add-btn amber darken-4" @click.prevent="update">
                  <i class="material-icons">update</i>
                  <span>Update</span>
                </button>
                <button
                  class="btn add-btn grey darken-2"
                  @click.prevent="$emit('deleteElem', editionElement)"
                >
                  <i class="material-icons">delete</i>
                  <span>Delete</span>
                </button>
                <button class="btn add-btn grey darken-2" @click.prevent="$emit('back')">
                  <i class="material-icons">arrow_back</i>
                  <span>Back</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["editionElement"],
  data() {
    return {
      title: "",
      calories: "",
      edit: false
    };
  },
  methods: {
    addTask() {
      if (this.title && this.calories) {
        let obj = {
          id: new Date(),
          title: this.title,
          calories: Number(this.calories)
        };
        this.$emit("add-task", obj);
        this.title = "";
        this.calories = "";
      } else {
        this.$emit('haveError', 'Please Enter All Filends')
      }
    },
    update() {
      const title = this.$refs.title.value;
      const calories = this.$refs.calories.value;
      const idx = this.editionElement.index;
      const id = this.editionElement.elem.id
      if (title && calories) {
        this.$emit("update", { title, calories, idx, id });
      } else {
        this.$emit('haveError', 'Please Enter All Filends')
      }
    }
  },
  computed: {
    getTitle(){
      return this.editionElement ?  'Setting Meal | Food Item'  :'Add Meal | Food Item'
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap-button {
  display: flex;
  justify-content: space-between;
}
.btn {
  display: flex;
  span {
    margin-left: 3px;
  }
}
</style>