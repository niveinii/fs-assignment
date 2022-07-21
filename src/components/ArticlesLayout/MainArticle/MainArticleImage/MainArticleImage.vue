<template>
  <img alt="image" :src=image class="image" width="300" height="259">
</template>

<script>


export default {
  name: 'MainArticleImage',
  props: {
    image: {
      type: String
    },
  },
}
</script>
<style lang="scss">
.image{
  border-radius: 8px;
}
</style>