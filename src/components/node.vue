<!-- node.vue -->
<template>
  <div class="content-wrapper">
    <content-header v-bind:menuList="menuList"></content-header>
    <section class="content">
      <h4>NodeJs相关问题</h4>
          <content-list :items="items"></content-list>
      </section>
  </div>
</template>

<script>
  import contentHeader from './content_header'
  import contentList from './content_list'
  export default{
    data(){
      return {
        menuList:[
          {
            text:"NodeJs",
            isActive:"true",
            url:"NodeJs"
          }
        ],
        items:[
          {
            fileName:"upload_file",
            text:"使用「formidable」做node的文件上传，并利用iframe让表单提交不跳转",
            time:"2016-11-14",
            dec:"涉及到formidable包和iframe阻止form的action跳转"
          },
        ]
      }
    },
    components:{
      contentHeader,
      contentList
    }
  }
</script>
