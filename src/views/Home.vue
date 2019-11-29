<template>
  <div class="app">
    <Nav @clearAll="clearAll" />
    <Errors :msg="errorMessage" v-if="hasError" />
    <Card
      @add-task="addTask"
      :editionElement="editionElement"
      @deleteElem="deleteElem"
      @back="back"
      @update="update"
      @haveError="haveError"
    />
    <List :array="array" :getTotalCalories="getTotalCalories" @editTask="editTask" />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Card from "@/components/Card.vue";
import List from "@/components/List.vue";
import Errors from "@/components/Errors.vue";

export default {
  name: "home",
  components: {
    Nav,
    Card,
    List,
    Errors
  },
  data() {
    return {
      array: [],
      editionElement: false,
      hasError: false,
      errorMessage: ""
    };
  },
  created() {
    this.array = this.checkLocalStorage;
  },
  methods: {
    clearAll() {
      this.array = [];
      localStorage.clear();
    },
    addTask(task) {
      let array = this.checkLocalStorage;
      array.push(task);
      this.array = array;
      localStorage.setItem("tasks", JSON.stringify(array));
    },
    editTask(elem, index) {
      const obj = { elem, index };
      this.editionElement = obj;
    },
    back() {
      this.editionElement = !this.editionElement;
    },
    deleteElem(obj) {
      const ls = this.checkLocalStorage;
      const res = ls.filter(element => element.id != obj.elem.id);
      localStorage.setItem("tasks", JSON.stringify(res));
      this.array = res.map(el => el);
      this.back();
    },
    update(obj) {
      const ls = this.checkLocalStorage;
      ls.forEach((element, index) => {
        if (element.id === obj.id) {
          ls[index] = obj;
        }
      });
      this.array = ls.map(el => el);
      localStorage.setItem("tasks", JSON.stringify(ls));

      this.back();
    },
    haveError(msg) {
      this.hasError = true;
      this.errorMessage = msg;
      setTimeout(() => {
        this.hasError = false;
      }, 1500);
    }
  },
  computed: {
    getTotalCalories() {
      let sum = 0;
      this.array.map(cost => {
        sum += Number(cost.calories);
      });
      return sum;
    },
    checkLocalStorage() {
      let tasks;
      if (localStorage.getItem("tasks") === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }
      return tasks;
    }
  }
};
</script>
