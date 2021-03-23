<template>
  <div>
    <p>
      <b> 一定在router配置声明启用props支持，否则无法获取数据</b>
    </p>
    studentID: {{ sid }}
    <br />
    homeworksID: {{ hid }}
    <br />
    <h1>router passing parameter</h1>
    student ID: {{ $route.params.sid }}
    <br />
    homeworks ID:{{ $route.params.hid }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["sid", "hid"],
  created() {
    this.init();
  },
  beforeUpdate() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.sid);
    }
  }
});
</script>
