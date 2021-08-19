<template>
  <div>
    <button @click="handleClick"><slot></slot></button>
    1
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
      evt.preventDefault();
    }
  }
}
</script>

<style>

</style>
