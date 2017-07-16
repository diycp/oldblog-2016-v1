<!-- index.vue -->
<template>
  <div id="app" class="wrapper">
    <header class="main-header">

      <!-- Logo -->
      <a href="http://liujians.me" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>L</b>JS</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>liujians</b>.me</span>
      </a>
      
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account Menu -->
          <li>
            <a target="_blank" href="https://github.com/liujians">
              <i class="fa fa-github" style="font-size: 18px"></i>
              <!-- <span class="label label-success">4</span> -->
            </a>
          </li>
          <li>
            <a target="_blank" href="http://weibo.com/JanLLLLL">
              <i class="fa fa-weibo" style="font-size: 18px"></i>
              <!-- <span class="label label-success">4</span> -->
            </a>
          </li>
          <li>
            <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=9bcf9f7be59b471456c1feec466dab4d54da7ab35c834b8e821ec17177fb33b3">
              <i class="fa fa-qq" style="font-size: 18px"></i>
              <!-- <span class="label label-success">4</span> -->
            </a>
          </li>
          <li class="playbox-mini">
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=50 src="http://music.163.com/outchain/player?type=0&id=512218513&auto=0&height=32"></iframe>
          </li>
          <li class="dropdown user user-menu">
            <!-- Menu Toggle Button -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <!-- The user image in the navbar-->
              <img src="./dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <!-- hidden-xs hides the username on small devices so only the image appears. -->
              <span class="hidden-xs">liujians</span>
            </a>
            <ul class="dropdown-menu">
              <!-- The user image in the menu -->
              <li class="user-header">
                <img src="./dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  liujians - 前端开发者
                  <small>Sichuan Chengdu</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a target="_blank" href="https://github.com/liujians">
                    <img width="30px" src="./img/github_icon.png" alt="">
                    </a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a target="_blank" href="http://weibo.com/JanLLLLL">
                    <img width="30px" src="./img/sina_icon.png" alt=""></a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=9bcf9f7be59b471456c1feec466dab4d54da7ab35c834b8e821ec17177fb33b3">
                    <img width="30px" src="./img/qq_icon.png" alt=""></a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <!-- <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li> -->
            </ul>
          </li>
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="./dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>liujians</p>
            <p>唯有积累，没有捷径</p>
          </div>
        </div>
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
          <li class="header">MENU</li>
          <li class="treeview">
            <router-link :to="{ path:'/' }">
              <i class="glyphicon glyphicon-home"></i> <span>home</span>
            </router-link>
            <ul class="treeview-menu"></ul>
          </li>
          <li class="treeview">
            <router-link to="/createNote">
              <i class="ion ion-ios-bookmarks"></i>
              <span>建站笔记</span>
              <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
                <small class="label pull-right bg-green">new</small>
              </span>
            </router-link>
            <ul class="treeview-menu"></ul>
          </li>
          <li class="treeview">
            <router-link to="/aboutme">
              <i class="fa fa-clipboard"></i>
              <span>关于我&留言板</span>
              <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
                <!-- <small class="label pull-right bg-green">new</small> -->
              </span>
            </router-link>
            <ul class="treeview-menu"></ul>
          </li>
          <li class="header">NOTES</li>
          <li class="treeview">
            <router-link to="/Demo">
              <i class="fa fa-star"></i>
              <span>开源Demo</span>
            </router-link>
            <ul class="treeview-menu"></ul>
          </li>
          <li class="treeview">
            <router-link to="/Blog">
              <i class="fa fa-book"></i>
              <span>技术博客</span>
              <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
                <small class="label pull-right bg-green">new</small>
              </span>
            </router-link>
            
            <ul class="treeview-menu">
              
              <!-- <li><router-link to="/js"><i class="ion ion-social-javascript"></i>Js</router-link></li>
              <li><router-link to="/node"><i class="ion ion-social-nodejs"></i>NodeJs</router-link></li>
              <li><router-link to="/mysql"><i class="fa fa-database"></i>MySql</router-link></li>
              <li><router-link to="/http"><i class="ion ion-social-chrome"></i>Http</router-link></li> -->
            </ul>
          </li>
          <li class="treeview">
            <a href="/planeGame/planeProject.html" target="_blank">
              <i class="fa fa-star"></i>
              <span>Doomed体验版</span>
            </a>
          </li>
          
          
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <router-view></router-view>
    <!-- /.content-wrapper -->
    <footer class="main-footer text-aqua" style="line-height:20px">
      <div class="pull-right hidden-xs">
        <span id="busuanzi_container_site_pv">
            <i class="fa fa fa-eye"></i><span id="busuanzi_value_site_pv"></span>
        </span>
        <span>| </span>
        <span id="busuanzi_container_site_uv">
          <i class="fa fa-user"></i><span id="busuanzi_value_site_uv"></span>
        </span>
      </div>
      <strong>Copyright © 2014-2016 <a href="https://liujians.me">liujians</a>.</strong>
    </footer>
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane active" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">Recent Activity</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript::;">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">liujian's Birthday</h4>

                  <p>Will be 24 on April 17th 2017</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">Tasks Progress</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0);">
                <h4 class="control-sidebar-subheading">
                  integrity
                  <span class="pull-right-container">
                    <span class="label label-danger pull-right">60%</span>
                  </span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 60%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->
        <!-- Stats tab content -->
        <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
        <!-- /.tab-pane -->
        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">General Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Report panel usage
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Some information about this general settings option
              </p>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>
<script>
  export default {
  data() {
    return {
        
    }
  },
  components: {
    
  },
  mounted(){
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        $("a[href!='#']").attr("data-toggle","offcanvas");
    }else{
      // alert(2);
    }
  },
  methods: {}
}
</script>