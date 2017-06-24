<template>
    <div>
        <abbr>{{item.description}}</abbr>
    </div>
</template>

<script>
  export default {
    props: { item: { required: true } }
  }
</script>
