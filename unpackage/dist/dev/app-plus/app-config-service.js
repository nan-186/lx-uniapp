
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/home","pages/index/index","pages/index/my","pages/navigater/yidaoserver","pages/navigater/yidaoswiper","pages/navigater/yidaoregister"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"1296db","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/home","iconPath":"static/image/home.png","selectedIconPath":"static/image/homes.png","text":"首页"},{"pagePath":"pages/index/index","iconPath":"static/image/liebiao.png","selectedIconPath":"static/image/liebiaos.png","text":"列表"},{"pagePath":"pages/index/my","iconPath":"static/image/my.png","selectedIconPath":"static/image/mys.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"lx-uniapp","compilerVersion":"3.1.6","entryPagePath":"pages/index/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/home","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true}},{"path":"/pages/index/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"列表","enablePullDownRefresh":true}},{"path":"/pages/index/my","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":true}},{"path":"/pages/navigater/yidaoserver","meta":{"isNVue":true},"window":{"navigationBarTitleText":"资讯详情","enablePullDownRefresh":true}},{"path":"/pages/navigater/yidaoswiper","meta":{"isNVue":true},"window":{"navigationBarTitleText":"swiper","enablePullDownRefresh":true}},{"path":"/pages/navigater/yidaoregister","meta":{},"window":{"navigationBarTitleText":"注册","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
