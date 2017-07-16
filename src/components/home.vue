<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <content-header v-bind:menuList="menuList"></content-header>
    <!-- Main content -->
    <section class="content text-center">
      <img class="img-responsive" style="width:60%;margin:0 auto" src="http://www.dabaoku.com/gif/biaoshi/051/134fd.gif" alt="">
      <h3>这里是liujians个人主页</h3>
      <h4>用作记录demo开源里程碑和遇到的问题记录</h4>
    </section>
  </div>
</template>
<script>
  import contentHeader from './content_header'
  export default{
    data(){
      return {
        menuList:[
          {
            text:"home",
            isActive:"true",
            url:"home"
          }
        ]
      }
    },
    components:{
      contentHeader
    }
  }
</script>