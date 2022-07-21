<template>
    <div class="layout-wrapper">
      <MainArticleBody :image="img" :description="description" :name="name"/>
      <AdditionalArticles @updateMainArticle="$emit('updateMainArticle',$event)" :additional-articles="additionalArticles"/>
    </div>
</template>

<script>
import AdditionalArticles from "./AdditionalArticles/AdditionalArticlesLayout.vue";
import MainArticleBody from "./MainArticle/MainArticleBody.vue";

export default {
  name: 'ArticlesBody',
  components:{
    AdditionalArticles,
    MainArticleBody
  },
  props: {
    allArticles: {
      type: Array
    },
    mainArticle: {
      type: Object
    },
  },
  computed: {
    name() {
      return this.mainArticle?.name;
    },
    img() {
      return this.mainArticle?.img;
    },
    additionalArticles(){
      return this.allArticles.filter((a)=>a.id !== this.mainArticle?.id )
    },
    description(){
      return this.mainArticle?.description;
    }
  },
}
</script>
<style lang="scss">
.layout-wrapper{
  display: flex;
  justify-content: center;
}
</style>