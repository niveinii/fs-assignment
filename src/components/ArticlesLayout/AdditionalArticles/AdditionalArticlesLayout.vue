<template>
  <div class="additional-articles-wrapper">
    <div class="small-header">More Stuff</div>
<div v-for="article in additionalArticles" :key="article.id" >
  <ArticleCard class="clickable" @click.native="$emit('updateMainArticle',article.id)" :header="article.name" :image="article.img" :description="article.description"/>
</div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard/ArticleCard";
export default {
  name: "AdditionalArticles",
  components:{
    ArticleCard
  },
  props: {
    additionalArticles: {
      type: Array,
      default: ()=>[]
    },
  },
}
</script>

<style scoped>
.small-header{
  margin-bottom:16px
}
.additional-articles-wrapper{
  margin-left: 50px;
  margin-right:85px
}
.clickable{
  cursor:pointer;
}
</style>