<template>
  <div>
    <h1>homework01</h1>
    <p style="font-weight:bold">
      <span :style="{ color: point >= requiredPoint ? 'green' : 'red' }">
        {{ point }}
      </span>
      /{{ requiredPoint }}
    </p>
    <div class="course">
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="courseSelected" :value="c" />
          {{ c.name }}-{{ c.term }}({{ c.point }})
        </label>
        <br />
      </template>
    </div>
    <div class="course">
      <template v-for="(c, index) of courseSelected" :key="index">
        {{ c.name }}-{{ c.term }}({{ c.point }})
        <br />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { listCourses, Course } from "./homework01";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const requiredPoint = 12;
    const point = ref(0);
    const c2 = listCourses().sort((a, b) => a.term - b.term);
    const courses = ref<Course[]>(c2);
    const courseSelected = ref<Course[]>([]);
    watch(courseSelected, () => {
      let count = 0;
      courseSelected.value.forEach(c => {
        count = count + c.point;
      });
      point.value = count;
      courseSelected.value.sort((a, b) => a.term - b.term);
    });
    return {
      requiredPoint,
      point,
      courses,
      courseSelected
    };
  }
});
</script>
<style scoped>
.course {
  border: 1px solid red;
  padding: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>
