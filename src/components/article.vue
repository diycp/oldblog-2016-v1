<!-- article.vue -->
<template>
	<section class="content-wrapper">
		<content-header v-bind:menuList="menuList"></content-header>
		<article class="content article">
			
    </article>
    <section class="content">
      <div class="bdsharebuttonbox">
        <a href="#" class="fa fa-qq bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
        <a href="#" class="fa fa-weixin bds_weixin" data-cmd="weixin" title="分享到微信"></a>
        <a href="#" class="fa fa-weibo bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
        <a href="#" class="fa fa-files-o bds_copy" data-cmd="copy" title="分享到复制网址"></a>
        <a href="#" class="fa fa-envelope-o bds_mail" data-cmd="mail" title="分享到邮件分享"></a>
        <a href="#" class="fa fa-share-alt bds_more" data-cmd="more"></a>
      </div>
      <div class="ds-thread" :data-thread-key="$route.params.fileName" :data-title="data_title" :data-url="data_url"></div>
    </section>
	</section>
</template>


<script>
  var md = require("markdown-it")();
  import contentHeader from './content_header'
  
  export default{
    data(){
      return {
        menuList:[
          {
          	text:"article",
            isActive:"false",
            url:""
          }
        ],
        data_url:window.location.href,
        data_title:""
      }
    },
    components:{
      contentHeader
    },
    methods:{

    },
    mounted(){
      var _self = this;
      console.log(this.$route.params.fileName)
    	var file = require("../md/"+this.$route.params.fileName+".md");
    	this.menuList.push({
    		text:this.$route.params.fileName,
    		isActive:"true",
    		url:""
    	})
    	$.get(file).success(text=>{
    		$(".article").html(md.render(text));
        $('.article img').addClass('img-maxWidth');
        _self.data_title = $(".article>h3").eq(0).html()
        console.log(_self.data_title)
        // _self.data_title+" | by liujians"
        window._bd_share_config.common.bdText="分享：「"+_self.data_title+"」 | by liujians";
        window._bd_share_config.share.bdText="分享：「"+_self.data_title+"」 | by liujians";
        
        console.log(window._bd_share_config)
        if(window._bd_share_main){
          window._bd_share_main.init();
        }
    	})
      if(window.DUOSHUO){
        DUOSHUO.init()
      }

      
    }
  }

</script>

