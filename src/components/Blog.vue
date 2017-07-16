<!-- http.vue -->
<template>
	<div class="content-wrapper">
		<content-header v-bind:menuList="menuList"></content-header>
		<section class="content">
      <h4>技术博客</h4>
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
            text:"Blog",
            isActive:"true",
            url:"Blog",
          }
        ],
        items:[
          {
            fileName:"zepto_getScript",
            text:"zepto拓展getScript函数用作跨域",
            time:"2016-12-16",
            labels:[
              {
                text:"Js"
              }
            ]
          },
          {
            fileName:"Js_floatBug",
            text:"单精度计算时遇到的bug",
            time:"2016-12-15",
            labels:[
              {
                text:"Js"
              }
            ]
          },
          {
            fileName:"webpack_note",
            text:"webpack 笔记(一有机会就更新)",
            time:"2016-12-08",
            labels:[
              {
                text:"Js"
              }
            ]
          },
          {
            fileName:"Promise_return",
            text:"Promise对象的链式调用",
            time:"2016-12-06",
            labels:[
              {
                text:"Js"
              }
            ]
          },
          {
            fileName:"consolelog",
            text:"兼容IE8、使用log插件取代原始console.log",
            time:"2016-12-05",
            labels:[
              {
                text:"插件"
              }
            ]
          },
          {
            fileName:"JSONP_baidu",
            text:"使用JSONP 跨域调取百度API",
            time:"2016-12-02",
            labels:[
              {
                text:"Js"
              }
            ]
          },
          {
            fileName:"Sql_UUID",
            text:"MySql中声明变量和UUID相关函数的使用",
            time:"2016-11-28",
            labels:[
              {
                text:"MySql"
              }
            ]
          },
          {
            fileName:"mobile_or",
            text:"判断浏览器为PC还是移动端",
            time:"2016-11-23",
            labels:[
              {
                text:"Js"
              }
            ]
          },
          {
            fileName:"Js_toObj",
            text:"Js 将字符串对象转换成对象的三种方法",
            time:"2016-11-21",
            labels:[
              {
                text:"Js"
              }
            ]
          },
          {
            fileName:"vue_props",
            text:"使用Vue的props做父子组件的通信",
            time:"2016-11-18",
            labels:[
              {
                text:"Vue"
              }
            ]
          },
          {
            fileName:"Sql_groupIF",
            text:"MySql 聚合函数和IF的复杂嵌套",
            time:"2016-11-18",
            labels:[
              {
                text:"MySql"
              }
            ]
          },
          {
            fileName:"temp_table",
            text:"MySql 临时表的使用",
            time:"2016-11-15",
            labels:[
              {
                text:"MySql"
              }
            ]
          },
          {
            fileName:"upload_file",
            text:"使用「formidable」做node的文件上传，并利用iframe让表单提交不跳转",
            time:"2016-11-14",
            dec:"涉及到formidable包和iframe阻止form的action跳转",
            labels:[
              {
                text:"NodeJs"
              },
              
            ]
          },
        ],
      }
    },
    components:{
      contentHeader,
      contentList
    },
    
  }
</script>
