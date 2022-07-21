<template>
  <v-app>
    <div class="articles-wrapper">
    <ArticlesBody @updateMainArticle="updateMainArticle" :all-articles="articles" :main-article="mainArticle"/>
    </div>
  </v-app>
</template>

<script>

import ArticlesBody from './components/ArticlesLayout/ArticlesBody'
import {getAllArticles, getArticleById} from "@/api/articles-api";

export default {
  name: 'App',
  components: {
    ArticlesBody
  },
  data() {
    return {
      mainArticle:{},
      articles: [],
    }
  },
  methods: {
    async updateMainArticle(id) {
        this.mainArticle = this.articles.find((a)=>a.id === id)
        this.updateSearchParam(id)
    },
    updateSearchParam(id){
      const url = new URL(window.location.toString());
      url.searchParams.set('article', id);
      window.history.pushState(null, '', url.toString());
      return id;
    }
  },
  computed: {
    articleSearchParam() {
      const searchParams = new URLSearchParams(window.location.search)
      const articleSearchParam =  searchParams.get('article');
      return articleSearchParam? articleSearchParam: this.updateSearchParam(0);
    }
  },
  async created(){
    const articleParam = this.articleSearchParam;
    try{
      this.articles = await getAllArticles();
      this.mainArticle = await getArticleById(articleParam);
    }catch(e){
      console.error('Could not load articles...')
      this.articles = []
      this.mainArticle = {}
    }
  }
}
</script>
<style>
.articles-wrapper{
  margin-left:92px;
  margin-right:85px;
  margin-top: 24px;
}
@media only screen and (max-width: 375px) {
  body {
    background-color: lightblue;
  }
}
</style>