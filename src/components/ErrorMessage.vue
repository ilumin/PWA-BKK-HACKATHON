<template>
  <b-alert dismissible :show="show == 'true'" variant="danger" class="error-message">
    <slot></slot>
  </b-alert>
</template>

<script>
export default {
  props: ['show']
}
</script>

<style>
.error-message {
  color: red;
}
</style>
