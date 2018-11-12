<template>
<div>
  <div class="logo">
    <img src="/logo.png">
  </div>

  <div class="enter">
    <router-link to="/docs/">
      <button>快速开始</button>
    </router-link>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.logo  {
  text-align: center;
  img {

  }
}
.enter {
  text-align: center;
  // margin: 60px 0;
}
.enter button {
  border-radius: 28px;
  width: 150px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  color: #fff;
  margin-top: 48px;
  background: #4990E2;
  cursor: pointer;
  border: 0;
  font-size: 14px;
}
</style>