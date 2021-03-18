<template>
  <div>
    <h1>data()</h1>
    <p>
      {{ message }}
    </p>
    <hr />
    <br />
    <h1>Computed</h1>
    {{ user.name }}
    <br />
    <button @click="change">
      change
    </button>
    <br />
    {{ user.insertTime }}
    <br />
    <button @click="addAddress">
      addAddress
    </button>
    <br />
    {{ user.address }}
    <br />
    {{ isShow ? "为true显示" : "为false显示" }}
    <br />
    {{ reversMessage }}

    <br />
    {{ myDate }}
    <br />
    {{ myReplace(user.insertTime) }}
    <br />
    {{
      message
        .split("")
        .reverse()
        .join("")
    }}
    <br />
    join(' ')是重组的意思，把数组合成一个字符串<br />
    reverse()是翻转的意思，把数据反过来<br />
    split('')会把数据拆分为一个数组,括号里的''
    是把数据拆分为每个字符串的意思，如果不用就不会拆分成每个字符串
    <hr />
    <h1>watch</h1>
    <button @click="isShow = !isShow">watch</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    message: "hello",
    isShow: false,
    user: {
      name: "wei",
      insertTime: "2018-03-16T11:04:25",
      address: "东北林业大学"
    }
  }),
  methods: {
    change() {
      this.user.name = "ling";
    },
    addAddress() {
      this.user.address = "北京";
    }
  },
  computed: {
    reversMessage(): string {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    myDate(): string {
      return this.user.insertTime.replace("T", " ");
    },
    myReplace() {
      return (date: string) => date.replace("T", " ");
    }
  },
  watch: {
    isShow(newValues, oldValues) {
      alert(`新值为${newValues}`);
    }
  }
});
</script>
