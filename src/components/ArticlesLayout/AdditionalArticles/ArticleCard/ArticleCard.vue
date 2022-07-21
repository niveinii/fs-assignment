<template>
  <div class="card-wrapper">
    <div class="d-flex card">
      <img :src=image class="image" width="108" height="108">
      <div class="content"></div>
      <div class="mini-header">{{header}}
        <br>
      <p class="mini-description">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    header: {
      type: String,
      default: ''
    },
    image:{
      type: String,
      default: ''
    },
    description:{
      type: String,
      default : ''
    }
  },
}
</script>

<style scoped>
.content{
  margin-left:18px
}
p {
  margin-top:10px;
  display: -webkit-box;
  max-width: 110px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card{
  padding: 10px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width:268px;
  height:128px;
}
.card-wrapper{
  margin-bottom:10px
}
.mini-header{
  font-weight: 500;
  font-size: 16px;
}
.mini-description{
  font-weight: 300;
  font-size: 13px;
}
</style>