<!-- aboutme.vue -->
<template>
  <div class="content-wrapper">
    <content-header v-bind:menuList="menuList"></content-header>
    <section class="content paddingLR">
      <section class="aboutMe borderBottom padding paddingLR">
        <h3 class="text-center">欢迎来到我的博客</h3>
      	<section class="text-center">这里用作记录笔记和在建站的过程中学习</section>
        <p class="marginTopMid">经历过很多人没有经历过的经历、那才是值得记忆的经历</p>
        <p class="text-right">——by liujians 2016-11-16</p>
      </section>
      <blockquote class="bg-white">
        <h3>个人介绍</h3>
        <ul class="list">
          <li>刘剑  23岁  立志成为一名JS的全栈开发者</li>
          <li>吉林长春人，成都读的大学，现在在成都工作</li>
          <li>喜欢吃、喜欢玩、喜欢没事儿唱歌</li>
          <li>别告诉别人、我离开电脑太久会疯</li>
          <li>一直在为全栈努力、node是吸引我的语言</li>
        </ul>
      </blockquote>
      <blockquote class="bg-white">
        <h3>技能清单</h3>
        <ul class="list">
          <li>Web框架：JQuery,BootStrap,AdminLte</li>
          <li>MVVM框架：Vue,Vue-router,AngularJs</li>
          <li>App相关：微信小程序,Ionic</li>
          <li>后端相关：NodeJs,MySql</li>
          <li>工具相关：Webpack,Babel,Gulp</li>
          <li>编辑器: Sublime Text3/WebStorm 11/Hbuilder</li>
          <li>其他工具: PS/Xmind/Axure/FSCapture/Gifcam</li>
          <li>版本控制：Svn,Git</li>
          <li>插件：Swiper,Pace,Moment,iCheck,fastClick</li>
        </ul>
      </blockquote>
      <blockquote class="bg-white">
        <h3>附加:</h3>
        <p>如果您手头有在成都的「web前端」工作岗位</p>
        <p>而且您认为我的能力能适应您的工作岗位</p>
        <p>可以发送邮件到邮箱：870891018@qq.com</p>
      </blockquote>
      <!-- <section class="playerBox">
        <iframe style="display:inline-block;" scrolling="auto" frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=350 src="http://music.163.com/outchain/player?type=0&id=512218513&auto=0&height=350"></iframe>
      </section> -->
      <div class="paddingTb10 paddingLR borderLeft bg-white marginTopMid">
        <h3>最近访客</h3>
        <ul class="ds-recent-visitors" data-num-items="12" data-avatar-size="56"></ul>
      </div>
      <div class="ds-thread" data-thread-key="message_board" data-title="留言板" data-url="http://liujians.me/#/aboutme"></div>
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
            text:"关于我",
            isActive:"true",
            url:"aboutme"
          }
        ],
      }
    },
    components:{
      contentHeader
    },
    mounted(){
    	if(window.DUOSHUO){
        	DUOSHUO.init()
      	}
    }
  }
</script>