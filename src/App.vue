<template>
  <div>
    {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', { account: 'zz' })">1</button>
  </div>
</template>

<script>
export default {
  name: "App",

  setup(props) {},
};
</script>
<style lang="scss" scoped></style>
