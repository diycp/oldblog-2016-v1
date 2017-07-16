<!-- http.vue -->
<template>
	<div class="content-wrapper">
		<content-header v-bind:menuList="menuList"></content-header>
		<section class="content">
		  <h4>Http相关问题</h4>
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
            text:"Http",
            isActive:"true",
            url:"http",
          }
        ],
        items:[
          
        ],
      }
    },
    components:{
      contentHeader,
      contentList
    },
    
  }
</script>
