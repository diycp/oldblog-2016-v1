<!-- createNote.vue -->
<template>
  <div class="content-wrapper">
    <content-header v-bind:menuList="menuList"></content-header>
    <section class="content">
      <h4>建站笔记</h4>
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
            text:"建站笔记",
            isActive:"true",
            url:"createNote"
          }
        ],
        items:[
          {
            fileName:"simscroll",
            text:"使用jquery插件「simscroll」美化滚动条",
            time:"2016-11-17",
            labels:[
              {
                text:"Jquery"
              }
            ]
          },
          {
            fileName:"duoshuo_init",
            text:"单页应用中「多说」插件的重载插件",
            time:"2016-11-16",
            labels:[
              {
                text:"其他插件"
              }
            ]
          },
          {
            fileName:"$get_file",
            text:"前端巧用$.get()将markdown文件内容读取，并直接显示再页面上",
            time:"2016-11-14",
            dec:"使用读取markdown的技术搭建自己的技术博客、使得以后写博客更加简单方便",
            labels:[
              {
                text:"Jquery"
              }
            ]
          }
        ]
      }
    },
    components:{
      contentHeader,
      contentList
    }
  }
</script>