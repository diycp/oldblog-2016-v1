<!-- mysql.vue -->
<template>
	<div class="content-wrapper">
		<content-header v-bind:menuList="menuList"></content-header>
		<section class="content">
			<h4>MySql相关问题</h4>
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
            text:"MySql",
            isActive:"true",
            url:"MySql"
          }
        ],
        items:[
          {
            fileName:"temp_table",
            text:"MySql 临时表的使用",
            time:"2016-11-15"
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