<template>
  <div>
    <h1>侧边</h1>
    <ul>
      <li>
        <router-link to="/Sidebar">sidebar</router-link>
      </li>
      <li>
        <router-link to="/example01" id="viewApp01">Example01</router-link>
      </li>
      <li>
        <router-link to="/example02" id="viewApp02">Example02</router-link>
      </li>
      <li>
        router with param
        <ul>
          <li>
            <router-link to="/example03/students/2018/homeworks/0">
              sid:2018;hid:0
            </router-link>
          </li>
          <li>
            <router-link to="/example03/students/2020/homeworks/3">
              sid:2022;hid:3
            </router-link>
          </li>
        </ul>
      </li>
      <ul>
        <li><router-link to="/example03-02">keep-alive</router-link></li>
      </ul>
    </ul>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
ul li {
  margin: 30px;
}
div h1 {
  padding: 20px;
}

#viewApp01 {
  padding: 16px;
}
#viewApp02 {
  padding: 16px;
  margin: 12px;
}
</style>
