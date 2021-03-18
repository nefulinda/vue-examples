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
        <router-link to="/example03" >Example02</router-link>
      </li>
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
