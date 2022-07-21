<template>
  <div class="main-article-wrapper">
    <MainArticleImage class='image-wrapper' :image="image"/>
    <MainArticleContent class='content-wrapper' :description="description" :name="name"/>
  </div>
</template>

<script>
import MainArticleContent from "./MainArticleContent/MainArticleContent.vue";
import MainArticleImage from "./MainArticleImage/MainArticleImage.vue";

export default {
  name: "MainArticleBody",
  components:{
    MainArticleContent,
    MainArticleImage,
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image:{
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>
.main-article-wrapper{
  display: flex;
}
.content-wrapper{
  margin-left:16px
}
</style>