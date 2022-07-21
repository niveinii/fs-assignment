<template>
  <div class="main-wrapper">
    <div class="header">
  {{name}}
    </div>
    {{descriptionDisplay}}
    <div :class="{'read-more-wrapper':!this.readMore}">
    <v-btn depressed class="btn-style" color="white" @click="toggleReadMore">{{ btnText }}</v-btn>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MainArticleContent',
  props: {
    name: {
      type: String
    },
    description: {
      type: String
    },
  },
  data() {
    return {
      readMore: false
    }
  },
  methods: {
    toggleReadMore() {
      this.readMore = !this.readMore
    }
  },
  computed: {
    btnText(){
      return this.readMore ? 'Read Less' :'Read More'
    },
    descriptionDisplay() {
      return this.readMore ? this.description : this.description.slice(1,2500)
    }
  },
}
</script>
<style lang="scss">
.main-wrapper{
  width: 520px;
  height:968px;
}
.header{
  margin-bottom: 11px;
  font-weight: 500;
  font-size: 32px;
  font-style: normal;
  line-height: 39px;
}
.read-more-wrapper{
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  width: 520px;
  height: 308px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
}
.btn-style{
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.15);
  border-radius: 16px !important;
}
</style>