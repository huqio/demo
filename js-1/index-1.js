$(function(){function e(){var e='{"errno":0,"data":{"name":"粥品香坊（回龙观）","description":"蜂鸟专送","deliveryTime":38,"score":4.2,"serviceScore":4.1,"foodScore":4.3,"rankRate":69.2,"minPrice":20,"deliveryPrice":4,"ratingCount":24,"sellCount":90,"bulletin":"粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。","supports":[{"type":0,"description":"在线支付满28减5"},{"type":1,"description":"VC无限橙果汁全场8折"},{"type":2,"description":"单人精彩套餐"},{"type":3,"description":"该商家支持发票,请下单写好发票抬头"},{"type":4,"description":"已加入“外卖保”计划,食品安全保障"}],"avatar":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg","pics":["http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"],"infos":["该商家支持发票,请下单写好发票抬头","品类:其他菜系,包子粥店","北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340","营业时间:10:00-20:30"]}}';e=JSON.parse(e),console.log(e);var t=template("header_template",e);$(".header").html(t)}function t(){function e(){function e(){i.style.transition="all .2s",i.style.webkitTransition="all .2s"}function t(e){i.style.transform="translateY("+e+"px)",i.style.webkitTransform="translateY("+e+"px)"}var a=document.querySelector(".left_nav"),i=document.querySelector(".left_nav > ul"),n=a.offsetHeight,c=i.offsetHeight,r=0,o=n-c;console.log(o);var p=r+100,l=o-100,m=0,d=0,g=0,f=0;i.addEventListener("touchstart",function(e){m=e.touches[0].clientY}),i.addEventListener("touchmove",function(a){d=a.touches[0].clientY,g=d-m,e(),g+f<p&&g+f>l&&t(g+f)}),window.addEventListener("touchend",function(e){g+f>r?(f=r,t(f)):g+f<o?o<0&&(f=o,t(f)):f=g+f});var h=document.querySelector(".right_info > ul");i.addEventListener("click",function(e){for(var a=e.target.parentNode,i=this.children,n=0;n<i.length;n++)i[n].classList.remove("current"),i[n].index=n;a.classList.add("current");var c=54*-a.index,r=$(".right_info > ul").children(),p=r[a.index],l=0;$(p).prevAll().each(function(e,t){l+=$(t).outerHeight()}),c>o?(f=c,t(f)):o<0&&(f=o,t(f)),s=-l,h.style.transition="all .2s",h.style.webkitTransition="all .2s",h.style.transform="translateY("+s+"px)",h.style.webkitTransform="translateY("+s+"px)"})}function t(){function e(){i.style.transition="all .2s",i.style.webkitTransition="all .2s"}function t(e){i.style.transform="translateY("+e+"px)",i.style.webkitTransform="translateY("+e+"px)"}var a=document.querySelector(".right_info"),i=document.querySelector(".right_info > ul"),n=a.offsetHeight,c=i.offsetHeight,r=0,o=n-c,p=r+100,l=o-100,m=0,d=0,g=0;s=0,i.addEventListener("touchstart",function(e){m=e.touches[0].clientY}),i.addEventListener("touchmove",function(a){d=a.touches[0].clientY,g=d-m,e(),g+s<p&&g+s>l&&t(g+s);for(var i=$(".right_info > ul").children(),n=[],c=0;c<i.length;c++){var r=i[c],o=0;$(r).prevAll().each(function(e,t){o+=$(t).outerHeight()}),n.push(o*-1)}for(var f=0,c=n.length-1;c>=0;c--){var h=n[c];if(g+s<h){f=n.indexOf(h),console.log(n.indexOf(h));break}}$(".left_nav > ul > li").removeClass("current"),$($(".left_nav > ul > li")[f]).addClass("current")}),window.addEventListener("touchend",function(e){g+s>r?(s=r,t(s)):g+s<o?(s=o,t(s)):s=g+s})}var a='{"errno":0,"data":[{"name":"热销榜","type":-1,"foods":[{"name":"皮蛋瘦肉粥","price":10,"oldPrice":"","description":"咸粥","sellCount":229,"rating":100,"info":"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"很喜欢的粥","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"扁豆焖面","price":14,"oldPrice":"","description":"","sellCount":188,"rating":96,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"info":"","icon":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"葱花饼","price":10,"oldPrice":"","description":"","sellCount":124,"rating":85,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"没啥味道","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":1,"text":"很一般啊","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"牛肉馅饼","price":14,"oldPrice":"","description":"","sellCount":114,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"难吃不推荐","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"招牌猪肉白菜锅贴/10个","price":17,"oldPrice":"","description":"","sellCount":101,"rating":78,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"不脆,不好吃","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"南瓜粥","price":9,"oldPrice":"","description":"甜粥","sellCount":91,"rating":100,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红豆薏米美肤粥","price":12,"oldPrice":"","description":"甜粥","sellCount":86,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"八宝酱菜","price":4,"oldPrice":"","description":"","sellCount":84,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红枣山药糙米粥","price":10,"oldPrice":"","description":"","sellCount":81,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"糊塌子","price":10,"oldPrice":"","description":"","sellCount":80,"rating":93,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"单人精彩套餐","type":2,"foods":[{"name":"红枣山药粥套餐","price":29,"oldPrice":36,"description":"红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注","sellCount":17,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"冰爽饮品限时特惠","type":1,"foods":[{"name":"VC无限橙果汁","price":8,"oldPrice":10,"description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"精选热菜","type":-1,"foods":[{"name":"娃娃菜炖豆腐","price":17,"oldPrice":"","description":"","sellCount":43,"rating":92,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"菜量还可以,味道还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"手撕包菜","price":16,"oldPrice":"","description":"","sellCount":29,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"香酥黄金鱼/3条","price":11,"oldPrice":"","description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"爽口凉菜","type":-1,"foods":[{"name":"八宝酱菜","price":4,"oldPrice":"","description":"","sellCount":84,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"拍黄瓜","price":9,"oldPrice":"","description":"","sellCount":28,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"精选套餐","type":-1,"foods":[{"name":"红豆薏米粥套餐","price":37,"oldPrice":"","description":"红豆薏米粥,三鲜干蒸烧卖,拍黄瓜","sellCount":3,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"皮蛋瘦肉粥套餐","price":31,"oldPrice":"","description":"","sellCount":12,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"果拼果汁","type":-1,"foods":[{"name":"蜜瓜圣女萝莉杯","price":6,"oldPrice":"","description":"","sellCount":1,"rating":"","info":"","ratings":[],"icon":"http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"加多宝","price":6,"oldPrice":"","description":"","sellCount":7,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"VC无限橙果汁","price":8,"oldPrice":10,"description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"小吃主食","type":-1,"foods":[{"name":"扁豆焖面","price":14,"oldPrice":"","description":"","sellCount":188,"rating":96,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"葱花饼","price":10,"oldPrice":"","description":"","sellCount":124,"rating":85,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"没啥味道","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":1,"text":"很一般啊","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"牛肉馅饼","price":14,"oldPrice":"","description":"","sellCount":114,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"难吃不推荐","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"招牌猪肉白菜锅贴/10个","price":17,"oldPrice":"","description":"","sellCount":101,"rating":78,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"不脆,不好吃","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"糊塌子","price":10,"oldPrice":"","description":"","sellCount":80,"rating":93,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"特色粥品","type":-1,"foods":[{"name":"皮蛋瘦肉粥","price":10,"oldPrice":"","description":"咸粥","sellCount":229,"rating":100,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"很喜欢的粥","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"南瓜粥","price":9,"oldPrice":"","description":"甜粥","sellCount":91,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红豆薏米美肤粥","price":12,"oldPrice":"","description":"甜粥","sellCount":86,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红枣山药糙米粥","price":10,"oldPrice":"","description":"","sellCount":81,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"鲜蔬菌菇粥","price":11,"oldPrice":"","description":"咸粥","sellCount":56,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":""},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"田园蔬菜粥","price":10,"oldPrice":"","description":"咸粥","sellCount":33,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"}]}]}';a=JSON.parse(a),console.log(a);var i=template("goods_left_template",a);$(".left_nav").html(i);var n=template("goods_right_template",a);$(".right_info").html(n);var c=template("buy_template",a);$(".buy_list > ul").html(c),$(".goods .left_nav ul li:first-of-type").addClass("current");var r=template("goods_info_template",a);$(".goods_info").html(r),e(),t();var s=0}function a(){function e(){console.log(),$(".shopping_cart > .cart > div").click(function(){"none"==$(".buy_list").css("display")?$(".buy_list > ul > li").length>0&&($(".buy_list").show(),$(".goods .shade").fadeIn()):($(".buy_list").hide(),$(".goods .shade").fadeOut())}),$(".goods .shade").click(function(){$(".buy_list").hide(),$(".goods .shade").fadeOut()})}e();var t=$(".right_info > ul > li > ul > li > .cartcontrol > span:nth-of-type(3)"),a=0,i=0;t.each(function(e,t){var n=0;$(t).click(function(){a++,n=parseInt($(t).parent().find("span:nth-of-type(2)").text()),n++,$(t).parent().find("span:nth-of-type(2)").text(n),$(t).parent().find("span:nth-of-type(2)").show(300),$(t).parent().find("span:nth-of-type(1)").show(300),$(".shopping_cart .cart span").html(a);var e=$(".shopping_cart .cart").offset();$(t).append('<span class="fly_circle"></span>'),$(t).children("span").fly({start:{left:event.pageX,top:event.pageY},end:{left:e.left+10,top:e.top+10},onEnd:function(){this.destory()}});var c=parseInt($(t).parent().parent().find(".price .now").text().substr(1));i+=c,$(".shopping_cart .cart_info span:nth-of-type(1)").html("￥"+i),i>0&&($(".shopping_cart > .cart > div").addClass("hightLight"),$(".shopping_cart > .cart_info > span:nth-of-type(1)").css("color","#fff"));var r=$(t).parent().parent().index();console.log(r),$($(".buy_list > ul > li")[r]).show(),$($(".buy_list > ul > li")[r]).find(".cartcontrol span:nth-of-type(2)").text(n),$($(".buy_list > ul > li")[r]).find(".price span").text("￥"+c*n),i>=20&&($(".shopping_cart > .cart_info > span:nth-of-type(4)").addClass("submit"),$(".shopping_cart > .cart_info > span:nth-of-type(4)").text("去结算"),$(".shopping_cart > .cart_info > .submit").click(function(){return alert("需要支付"+i+"元"),!1}))}),$(t).parent().find("span:nth-of-type(1)").click(function(){n--,a--;var e=$(t).parent().parent().index();$(t).parent().find("span:nth-of-type(2)").html(n),$(".shopping_cart .cart span").html(a),a<=0&&(a=0,$(".shopping_cart .cart span").html(a),$(".shopping_cart .cart span").html(""));var c=parseInt($(t).parent().parent().find(".price .now").text().substr(1));if(i-=c,$(".shopping_cart .cart_info span:nth-of-type(1)").html("￥"+i),i<=0&&(i=0,$(".shopping_cart .cart_info span:nth-of-type(1)").html("￥"+i),$(".shopping_cart > .cart > div").removeClass("hightLight"),$(".shopping_cart > .cart_info > span:nth-of-type(1)").css("color","rgba(255, 255, 255, 0.4)")),$($(".buy_list > ul > li")[e]).find(".cartcontrol span:nth-of-type(2)").text(n),$($(".buy_list > ul > li")[e]).find(".price span").text("￥"+c*n),$(".shopping_cart > .cart_info > .submit").click(function(){return alert("需要支付"+i+"元"),!1}),i<20&&($(".shopping_cart > .cart_info > span:nth-of-type(4)").removeClass("submit"),$(".shopping_cart > .cart_info > span:nth-of-type(4)").text("￥20起送")),n<=0)return n=0,$($(".buy_list ul li")[e]).find(".cartcontrol span:nth-of-type(2)").html(n),$($(".buy_list ul li")[e]).hide(),$(t).parent().find("span:nth-of-type(2)").html(n),$(t).parent().find("span:nth-of-type(2)").hide(300),void $(t).parent().find("span:nth-of-type(1)").hide(300)})});var n=$($(".buy_list > ul > li > .cartcontrol > span:nth-of-type(3)"));n.each(function(e,t){$(t).click(function(){var e=$(t).parent().parent().index(),n=parseInt($($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(2)").text());n++,a++,$($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(2)").text(n),$(t).parent().find("span:nth-of-type(2)").html(n),$(t).parent().find("span:nth-of-type(2)").show(300),$(t).parent().find("span:nth-of-type(1)").show(300),$($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(2)").show(300),$($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(1)").show(300),$(".shopping_cart .cart span").html(a);var c=$(".shopping_cart .cart").offset();$(t).append('<span class="fly_circle"></span>'),$(t).children("span").fly({start:{left:event.pageX,top:event.pageY},end:{left:c.left+10,top:c.top+10},onEnd:function(){this.destory()}});var r=parseInt($($(".right_info ul li ul li")[e]).find(".content .price .now").text().substr(1));i+=r,$(".shopping_cart .cart_info span:nth-of-type(1)").html("￥"+i),i>0&&($(".shopping_cart > .cart > div").addClass("hightLight"),$(".shopping_cart > .cart_info > span:nth-of-type(1)").css("color","#fff")),$(t).parent().parent().find(".price span").text("￥"+r*n),i>=20&&($(".shopping_cart > .cart_info > span:nth-of-type(4)").addClass("submit"),$(".shopping_cart > .cart_info > span:nth-of-type(4)").text("去结算"),
$(".shopping_cart > .cart_info > .submit").click(function(){return alert("需要支付"+i+"元"),!1}))}),$(t).parent().find("span:nth-of-type(1)").click(function(){var e=$(t).parent().parent().index(),n=parseInt($($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(2)").text());n--,a--,$($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(2)").text(n),$(t).parent().find("span:nth-of-type(2)").html(n),$(".shopping_cart .cart span").html(a),a<=0&&(a=0,$(".shopping_cart .cart span").html(""));var c=parseInt($($(".right_info ul li ul li")[e]).find(".content .price .now").text().substr(1));if(i-=c,$(".shopping_cart .cart_info span:nth-of-type(1)").html("￥"+i),i<=0&&(i=0,$(".shopping_cart .cart_info span:nth-of-type(1)").html("￥"+i),$(".shopping_cart > .cart > div").removeClass("hightLight"),$(".shopping_cart > .cart_info > span:nth-of-type(1)").css("color","rgba(255, 255, 255, 0.4)")),$(t).parent().parent().find(".price span").text("￥"+c*n),$(".shopping_cart > .cart_info > .submit").click(function(){return alert("需要支付"+i+"元"),!1}),i<20&&($(".shopping_cart > .cart_info > span:nth-of-type(4)").removeClass("submit"),$(".shopping_cart > .cart_info > span:nth-of-type(4)").text("￥20起送")),n<=0)return n=0,$(t).parent().parent().find(".price span").text("￥"+c*n),$($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(2)").text(n),$(t).parent().find("span:nth-of-type(2)").html(n),$($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(2)").hide(300),$($(".right_info ul li ul li")[e]).find(".cartcontrol span:nth-of-type(1)").hide(300),$(t).parent().parent().slideUp(),console.log($(".buy_list").height()),void($(".buy_list").height()<=100&&($(".goods .shade").fadeOut(),$(t).parents(".buy_list").slideUp()))})});var c=$(".right_info ul li ul li .goods_img");c.click(function(){var e=$(this).parent().index();$(".goods_info").show(),$(".goods_info").css("transform","translateX(0)"),$($(".goods_info .goods_info_box")[e]).show(),$(".goods_info .goods_img .info_back").click(function(){$(".goods_info").css("transition","all .2s"),$(".goods_info").css("transform","translateX(100%)"),$(".goods_info").css("display","none"),$($(".goods_info .goods_info_box")[e]).hide()})})}function i(){$(".header .con_count").click(function(){$(".shopping_info").fadeIn()}),$(".shopping_info > a").click(function(){$(".shopping_info").fadeOut()})}function n(){$(".tab .tab_item").click(function(){var e=$(this).index();console.log(e),$(this).addClass("active").siblings().removeClass("active"),$($(".container > section")[e]).show().siblings().hide()})}e(),t(),a(),i(),n()});