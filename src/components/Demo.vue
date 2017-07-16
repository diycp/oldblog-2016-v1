<!-- Demo.vue -->
<template>
	<div class="content-wrapper">
		<content-header v-bind:menuList="menuList"></content-header>
		<section class="content">
			<h4>开源Demo</h4>
      		<content-list :items="items"></content-list>
    	</section>
	</div>
</template>
<script>
  import contentHeader from './content_header'
  import contentList from './demo_list'
  export default{
    data(){
      return {
        menuList:[
          {
            text:"Demo",
            isActive:"true",
            url:"Demo"
          }
        ],
        items:[
	        {
	        	text:"vue+adminLte+vue-router",
	        	time:"2016-11-02",
	        	dec:"SPA about vue-cli+adminLte+vue-router",
	        	url:"https://github.com/liujians/vue-adminLte-vue-router"
	        },
	        {
        		text:"Wa-UI",
	        	time:"2016-10-19",
	        	dec:"针对微信小程序整合的一套UI库",
	        	url:"https://github.com/liujians/Wa-UI"
        	},
        	{
        		text:"WeApp-server",
	        	time:"2016-10-09",
	        	dec:"WeApp的依赖server和数据",
	        	url:"https://github.com/liujians/WeApp-server"
        	},
        	{
        		text:"WeApp",
	        	time:"2016-09-29",
	        	dec:"基于微信小程序开发的仿微信Demo",
	        	url:"https://github.com/liujians/WeApp"
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