<template>
    <div>
        <p class="error-message">
            {{ message }}
        </p>
    </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>
.error-message {
    color: red;
}
</style>

