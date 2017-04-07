/**
 * Created by Lenovo on 2017/1/30.
 */
$(function () {
    header();
    goods();
    function header() {
        var data = '{"errno":0,"data":{"name":"粥品香坊（回龙观）","description":"蜂鸟专送","deliveryTime":38,"score":4.2,"serviceScore":4.1,"foodScore":4.3,"rankRate":69.2,"minPrice":20,"deliveryPrice":4,"ratingCount":24,"sellCount":90,"bulletin":"粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。","supports":[{"type":0,"description":"在线支付满28减5"},{"type":1,"description":"VC无限橙果汁全场8折"},{"type":2,"description":"单人精彩套餐"},{"type":3,"description":"该商家支持发票,请下单写好发票抬头"},{"type":4,"description":"已加入“外卖保”计划,食品安全保障"}],"avatar":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg","pics":["http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"],"infos":["该商家支持发票,请下单写好发票抬头","品类:其他菜系,包子粥店","北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340","营业时间:10:00-20:30"]}}';
        data = JSON.parse(data);
        console.log(data);
        var html = template('header_template', data);
        $('.header').html(html);
    }

    function goods() {
        var data = '{"errno":0,"data":[{"name":"热销榜","type":-1,"foods":[{"name":"皮蛋瘦肉粥","price":10,"oldPrice":"","description":"咸粥","sellCount":229,"rating":100,"info":"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"很喜欢的粥","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"扁豆焖面","price":14,"oldPrice":"","description":"","sellCount":188,"rating":96,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"info":"","icon":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"葱花饼","price":10,"oldPrice":"","description":"","sellCount":124,"rating":85,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"没啥味道","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":1,"text":"很一般啊","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"牛肉馅饼","price":14,"oldPrice":"","description":"","sellCount":114,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"难吃不推荐","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"招牌猪肉白菜锅贴/10个","price":17,"oldPrice":"","description":"","sellCount":101,"rating":78,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"不脆,不好吃","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"南瓜粥","price":9,"oldPrice":"","description":"甜粥","sellCount":91,"rating":100,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红豆薏米美肤粥","price":12,"oldPrice":"","description":"甜粥","sellCount":86,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"八宝酱菜","price":4,"oldPrice":"","description":"","sellCount":84,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红枣山药糙米粥","price":10,"oldPrice":"","description":"","sellCount":81,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"糊塌子","price":10,"oldPrice":"","description":"","sellCount":80,"rating":93,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"单人精彩套餐","type":2,"foods":[{"name":"红枣山药粥套餐","price":29,"oldPrice":36,"description":"红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注","sellCount":17,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"冰爽饮品限时特惠","type":1,"foods":[{"name":"VC无限橙果汁","price":8,"oldPrice":10,"description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"精选热菜","type":-1,"foods":[{"name":"娃娃菜炖豆腐","price":17,"oldPrice":"","description":"","sellCount":43,"rating":92,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"菜量还可以,味道还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"手撕包菜","price":16,"oldPrice":"","description":"","sellCount":29,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"香酥黄金鱼/3条","price":11,"oldPrice":"","description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"爽口凉菜","type":-1,"foods":[{"name":"八宝酱菜","price":4,"oldPrice":"","description":"","sellCount":84,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"拍黄瓜","price":9,"oldPrice":"","description":"","sellCount":28,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"精选套餐","type":-1,"foods":[{"name":"红豆薏米粥套餐","price":37,"oldPrice":"","description":"红豆薏米粥,三鲜干蒸烧卖,拍黄瓜","sellCount":3,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"皮蛋瘦肉粥套餐","price":31,"oldPrice":"","description":"","sellCount":12,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"果拼果汁","type":-1,"foods":[{"name":"蜜瓜圣女萝莉杯","price":6,"oldPrice":"","description":"","sellCount":1,"rating":"","info":"","ratings":[],"icon":"http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"加多宝","price":6,"oldPrice":"","description":"","sellCount":7,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"VC无限橙果汁","price":8,"oldPrice":10,"description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"小吃主食","type":-1,"foods":[{"name":"扁豆焖面","price":14,"oldPrice":"","description":"","sellCount":188,"rating":96,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"葱花饼","price":10,"oldPrice":"","description":"","sellCount":124,"rating":85,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"没啥味道","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":1,"text":"很一般啊","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"牛肉馅饼","price":14,"oldPrice":"","description":"","sellCount":114,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"难吃不推荐","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"招牌猪肉白菜锅贴/10个","price":17,"oldPrice":"","description":"","sellCount":101,"rating":78,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"不脆,不好吃","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"糊塌子","price":10,"oldPrice":"","description":"","sellCount":80,"rating":93,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"特色粥品","type":-1,"foods":[{"name":"皮蛋瘦肉粥","price":10,"oldPrice":"","description":"咸粥","sellCount":229,"rating":100,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"很喜欢的粥","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"南瓜粥","price":9,"oldPrice":"","description":"甜粥","sellCount":91,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红豆薏米美肤粥","price":12,"oldPrice":"","description":"甜粥","sellCount":86,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红枣山药糙米粥","price":10,"oldPrice":"","description":"","sellCount":81,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"鲜蔬菌菇粥","price":11,"oldPrice":"","description":"咸粥","sellCount":56,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":""},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"田园蔬菜粥","price":10,"oldPrice":"","description":"咸粥","sellCount":33,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"}]}]}';
        data = JSON.parse(data);
        console.log(data);
        var leftHtml = template('goods_left_template', data);
        $('.left_nav').html(leftHtml);
        var rightHtml = template('goods_right_template', data);
        $('.right_info').html(rightHtml);
        var buyListHtml = template('buy_template',data);
        $('.buy_list > ul').html(buyListHtml);

        $('.goods .left_nav ul li:first-of-type').addClass('current');

        var goodsInfoHtml = template('goods_info_template',data);
        $('.goods_info').html(goodsInfoHtml);


        leftSwipe();
        rightSwipe();
        var rightCurrY = 0;

        function leftSwipe() {
            //获取高度
            var parentBox = document.querySelector(".left_nav");
            var childBox = document.querySelector(".left_nav > ul");
            var parentHeight = parentBox.offsetHeight;
            var childHeight = childBox.offsetHeight;
            //计算定位区间
            var maxY = 0;
            var minY = parentHeight - childHeight;
            console.log(minY);
            // 设置可滑动区间
            var maxSwipe = maxY + 100;
            var minSwipe = minY - 100;
            //设置初始的变量值
            var startY = 0;
            var moveY = 0;
            var distanceY = 0;
            var isMove = false;
            //记录当前位置的变量
            var currY = 0;
            //添加过渡样式封装
            function addTransition() {
                childBox.style.transition = "all .2s";
                childBox.style.webkitTransition = "all .2s";
            }

            //移除过度样式封装
            function removeTransition() {
                childBox.style.transition = "none";
                childBox.style.webkitTransition = "none";
            }

            //设置位置样式的封装
            function setTranslateY(y) {
                childBox.style.transform = "translateY(" + y + "px)";
                childBox.style.webkitTransform = "translateY(" + y + "px)";
            }

            // 获取触摸开始的位置
            childBox.addEventListener('touchstart', function (e) {
                startY = e.touches[0].clientY;
                //console.log(startY);
            })
            // 获取移动后的位置
            // 计算移动的距离
            //
            childBox.addEventListener('touchmove', function (e) {
                moveY = e.touches[0].clientY;
                distanceY = moveY - startY;
                //console.log(distanceY);
                addTransition();
                if (distanceY + currY < maxSwipe && distanceY + currY > minSwipe) {
                    setTranslateY(distanceY + currY);
                }


            })
            window.addEventListener('touchend', function (e) {
                if (distanceY + currY > maxY) {
                    currY = maxY;
                    setTranslateY(currY);
                } else if (distanceY + currY < minY) {
                    if (minY < 0) {
                        currY = minY;
                        setTranslateY(currY);
                    }

                } else {
                    currY = distanceY + currY;
                }

            });
            // 点击li时改变当前的样式
            // 点击li时（在小于最小定位高度时）改变li的位置到最顶部
            // 点击li时，改变右边对应的模块的位置到最顶部
            var module = document.querySelector('.right_info > ul');
            childBox.addEventListener('click', function (e) {
                var li = e.target.parentNode;
                var lis = this.children;
                for (var i = 0; i < lis.length; i++) {
                    lis[i].classList.remove('current');
                    lis[i].index = i;
                }
                li.classList.add('current');
                //console.log(li.index);
                var leftY = -li.index * 54;
                //=====
                var goods_list = $('.right_info > ul').children();
                var goods = goods_list[li.index];
                var rightY = 0;
                $(goods).prevAll().each(function (i, e) {
                    rightY += $(e).outerHeight();
                })
                //console.log(leftY);
                if (leftY > minY) {
                    currY = leftY;
                    setTranslateY(currY);
                } else {
                    if (minY < 0) {
                        currY = minY;
                        setTranslateY(currY);
                    }
                }
                rightCurrY = -rightY;
                module.style.transition = "all .2s";
                module.style.webkitTransition = "all .2s";
                module.style.transform = "translateY(" + rightCurrY + "px)";
                module.style.webkitTransform = "translateY(" + rightCurrY + "px)";


            })
        }

        function rightSwipe() {
            //获取高度
            var parentBox = document.querySelector(".right_info");
            var childBox = document.querySelector(".right_info > ul");
            var parentHeight = parentBox.offsetHeight;
            var childHeight = childBox.offsetHeight;
            //计算定位区间
            var maxY = 0;
            var minY = parentHeight - childHeight;
            // 设置可滑动区间
            var maxSwipe = maxY + 100;
            var minSwipe = minY - 100;
            //设置初始的变量值
            var startY = 0;
            var moveY = 0;
            var distanceY = 0;
            var isMove = false;
            //记录当前位置的变量
            rightCurrY = 0;
            //添加过渡样式封装
            function addTransition() {
                childBox.style.transition = "all .2s";
                childBox.style.webkitTransition = "all .2s";
            }

            //移除过度样式封装
            function removeTransition() {
                childBox.style.transition = "none";
                childBox.style.webkitTransition = "none";
            }

            //设置位置样式的封装
            function setTranslateY(y) {
                childBox.style.transform = "translateY(" + y + "px)";
                childBox.style.webkitTransform = "translateY(" + y + "px)";
            }

            // 获取触摸开始的位置
            childBox.addEventListener('touchstart', function (e) {
                startY = e.touches[0].clientY;
                //console.log(startY);
            })
            // 获取移动后的位置
            // 计算移动的距离
            //
            childBox.addEventListener('touchmove', function (e) {
                moveY = e.touches[0].clientY;
                distanceY = moveY - startY;
                //console.log(distanceY);
                addTransition();
                if (distanceY + rightCurrY < maxSwipe && distanceY + rightCurrY > minSwipe) {
                    setTranslateY(distanceY + rightCurrY);
                }


                // 左边的导航栏选中状态随着右侧商品区域滚动而变化,重点是求出对应的索引
                var goods_list = $('.right_info > ul').children();
                var rightYArr = [];
                for (var i = 0; i < goods_list.length; i++) {
                    var obj = goods_list[i];
                    var translateY_r = 0;
                    $(obj).prevAll().each(function (i, e) {
                        translateY_r += $(e).outerHeight();
                    })
                    rightYArr.push(translateY_r * -1);

                }
                var rightYIndex = 0;
                for (var i = rightYArr.length - 1; i >= 0; i--) {
                    var obj1 = rightYArr[i];
                    if (distanceY + rightCurrY < obj1) {
                        rightYIndex = rightYArr.indexOf(obj1);
                        console.log(rightYArr.indexOf(obj1));
                        break;
                    }

                }
                $('.left_nav > ul > li').removeClass('current');
                $($('.left_nav > ul > li')[rightYIndex]).addClass('current');


            })
            window.addEventListener('touchend', function (e) {
                if (distanceY + rightCurrY > maxY) {
                    rightCurrY = maxY;
                    setTranslateY(rightCurrY);
                } else if (distanceY + rightCurrY < minY) {
                    rightCurrY = minY;
                    setTranslateY(rightCurrY);
                } else {
                    rightCurrY = distanceY + rightCurrY;
                }

            });
        }
    }

    goodsFunction();
    function goodsFunction() {

        buyListIsShow();
        function buyListIsShow(){
            console.log()

            $('.shopping_cart > .cart > div').click(function(){
                if($('.buy_list').css('display') == 'none'){
                    if($('.buy_list > ul > li').length > 0) {
                        $('.buy_list').show();
                        $('.goods .shade').fadeIn();
                    }
                }else {
                    $('.buy_list').hide();
                    $('.goods .shade').fadeOut();
                }

            });
            $('.goods .shade').click(function(){
                $('.buy_list').hide();
                $('.goods .shade').fadeOut();
            })
        }

        var add = $('.right_info > ul > li > ul > li > .cartcontrol > span:nth-of-type(3)');
        //购物车商品数量
        var amount = 0;
        //购物车价钱
        var priceAmount = 0;
        add.each(function (i, e) {
            //window['num'+i] = 0;
            //每个商品的数量
            var num = 0;
            //给商品区域的每个加号注册事件
            $(e).click(function () {

                amount++;

                num = parseInt($(e).parent().find('span:nth-of-type(2)').text());
                num++;
                $(e).parent().find('span:nth-of-type(2)').text(num);
                $(e).parent().find('span:nth-of-type(2)').show(300);
                $(e).parent().find('span:nth-of-type(1)').show(300);
                //购物车的数量
                $('.shopping_cart .cart span').html(amount);

                //飞入动画
                var offset = $('.shopping_cart .cart').offset();

                $(e).append('<span class="fly_circle"></span>');

                $(e).children('span').fly({
                    start: {
                        left: event.pageX, //抛物体起点横坐标
                        top: event.pageY////抛物体起点纵坐标
                    },
                    end: {
                        left: offset.left + 10, //抛物体终点横坐标
                        top: offset.top + 10, //抛物体终点纵坐标
                    },
                    onEnd: function () {
                        this.destory();//销毁抛物体
                    }
                });

                //购物车价格合计
                var price = parseInt($(e).parent().parent().find('.price .now').text().substr(1));
                priceAmount += price;
                $('.shopping_cart .cart_info span:nth-of-type(1)').html('￥'+priceAmount);
                if(priceAmount>0){
                    $('.shopping_cart > .cart > div').addClass('hightLight');
                    $('.shopping_cart > .cart_info > span:nth-of-type(1)').css('color','#fff');
                }

                // 显示购买的商品列表
                var goodsIndex = $(e).parent().parent().index();
                console.log(goodsIndex);
                $($('.buy_list > ul > li')[goodsIndex]).show();

                //同时改变购买列表对应商品的数量
                $($('.buy_list > ul > li')[goodsIndex]).find('.cartcontrol span:nth-of-type(2)').text(num);

                // 同时改变购买列表对应商品的合计价格
                $($('.buy_list > ul > li')[goodsIndex]).find('.price span').text('￥'+price*num);

                // 判断 去结算 是否显示
                if(priceAmount >= 20){
                    $('.shopping_cart > .cart_info > span:nth-of-type(4)').addClass('submit')
                    $('.shopping_cart > .cart_info > span:nth-of-type(4)').text('去结算');
                    $('.shopping_cart > .cart_info > .submit').click(function(){
                        alert('需要支付'+priceAmount+'元');
                        return false;
                    })
                }


            });
            // 给每个商品区域每个减号注册事件
            $(e).parent().find('span:nth-of-type(1)').click(function () {

                num--;
                amount--;

                var goodsIndex = $(e).parent().parent().index();

                $(e).parent().find('span:nth-of-type(2)').html(num);

                $('.shopping_cart .cart span').html(amount);

                if (amount <= 0) {
                    amount = 0;
                    $('.shopping_cart .cart span').html(amount);
                    $('.shopping_cart .cart span').html('');
                }
                //购物车价格合计
                var price = parseInt($(e).parent().parent().find('.price .now').text().substr(1));
                priceAmount -= price;
                $('.shopping_cart .cart_info span:nth-of-type(1)').html('￥'+priceAmount);
                if(priceAmount<=0){
                    priceAmount = 0;
                    $('.shopping_cart .cart_info span:nth-of-type(1)').html('￥'+priceAmount);
                    $('.shopping_cart > .cart > div').removeClass('hightLight');
                    $('.shopping_cart > .cart_info > span:nth-of-type(1)').css('color','rgba(255, 255, 255, 0.4)');

                }

                //同时改变购买列表对应商品的数量
                $($('.buy_list > ul > li')[goodsIndex]).find('.cartcontrol span:nth-of-type(2)').text(num);

                // 同时改变购买列表对应商品的合计价格
                $($('.buy_list > ul > li')[goodsIndex]).find('.price span').text('￥'+price*num);


                // 判断 去结算 是否显示
                $('.shopping_cart > .cart_info > .submit').click(function(){
                    alert('需要支付'+priceAmount+'元');
                    return false;
                })
                if(priceAmount < 20){
                    $('.shopping_cart > .cart_info > span:nth-of-type(4)').removeClass('submit');
                    $('.shopping_cart > .cart_info > span:nth-of-type(4)').text('￥20起送');

                }

                if (num <= 0) {
                    num = 0;

                    $($('.buy_list ul li')[goodsIndex]).find('.cartcontrol span:nth-of-type(2)').html(num);
                    $($('.buy_list ul li')[goodsIndex]).hide();

                    $(e).parent().find('span:nth-of-type(2)').html(num);
                    $(e).parent().find('span:nth-of-type(2)').hide(300);
                    $(e).parent().find('span:nth-of-type(1)').hide(300);

                    return;
                }


            })
        })


        var add1 = $($('.buy_list > ul > li > .cartcontrol > span:nth-of-type(3)'));

        add1.each(function(i,e){

            $(e).click(function(){

                var buyListIndex = $(e).parent().parent().index();
                var num = parseInt($($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(2)').text());


                num++;
                amount++;
                // 商品区域的对应的数量跟着变化
                $($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(2)').text(num);

                $(e).parent().find('span:nth-of-type(2)').html(num);
                $(e).parent().find('span:nth-of-type(2)').show(300);
                $(e).parent().find('span:nth-of-type(1)').show(300);

                // 商品区域对应的减号和数量显示
                $($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(2)').show(300);
                $($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(1)').show(300);
                //购物车的数量
                $('.shopping_cart .cart span').html(amount);

                //飞入动画
                var offset = $('.shopping_cart .cart').offset();

                $(e).append('<span class="fly_circle"></span>');

                $(e).children('span').fly({
                    start: {
                        left: event.pageX, //抛物体起点横坐标
                        top: event.pageY////抛物体起点纵坐标
                    },
                    end: {
                        left: offset.left + 10, //抛物体终点横坐标
                        top: offset.top + 10, //抛物体终点纵坐标
                    },
                    onEnd: function () {
                        this.destory();//销毁抛物体
                    }
                });

                //购物车价格合计

                var price = parseInt($($('.right_info ul li ul li')[buyListIndex]).find('.content .price .now').text().substr(1));
                priceAmount += price;
                $('.shopping_cart .cart_info span:nth-of-type(1)').html('￥'+priceAmount);
                if(priceAmount>0){
                    $('.shopping_cart > .cart > div').addClass('hightLight');
                    $('.shopping_cart > .cart_info > span:nth-of-type(1)').css('color','#fff');
                }

                //购买列表每个商品的的合计
                $(e).parent().parent().find('.price span').text('￥'+price*num);

                // 判断 去结算 是否显示
                if(priceAmount >= 20){
                    $('.shopping_cart > .cart_info > span:nth-of-type(4)').addClass('submit')
                    $('.shopping_cart > .cart_info > span:nth-of-type(4)').text('去结算');
                    $('.shopping_cart > .cart_info > .submit').click(function(){
                        alert('需要支付'+priceAmount+'元');
                        return false;
                    })
                }

            })


            // 给购买列表每个减号注册事件
            $(e).parent().find('span:nth-of-type(1)').click(function () {

                var buyListIndex = $(e).parent().parent().index();
                var num = parseInt($($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(2)').text());

                num--;
                amount--;
                // 商品区域的数量跟着变化
                $($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(2)').text(num);

                $(e).parent().find('span:nth-of-type(2)').html(num);

                $('.shopping_cart .cart span').html(amount);

                if (amount <= 0) {
                    amount = 0;
                    $('.shopping_cart .cart span').html('');
                }
                //购物车价格合计
                var price = parseInt($($('.right_info ul li ul li')[buyListIndex]).find('.content .price .now').text().substr(1));
                priceAmount -= price;
                $('.shopping_cart .cart_info span:nth-of-type(1)').html('￥'+priceAmount);
                if(priceAmount<=0){
                    priceAmount = 0;
                    $('.shopping_cart .cart_info span:nth-of-type(1)').html('￥'+priceAmount);
                    $('.shopping_cart > .cart > div').removeClass('hightLight');
                    $('.shopping_cart > .cart_info > span:nth-of-type(1)').css('color','rgba(255, 255, 255, 0.4)');

                }

                //购买列表每个商品的的合计
                $(e).parent().parent().find('.price span').text('￥'+price*num);

                // 判断 去结算 是否显示
                $('.shopping_cart > .cart_info > .submit').click(function(){
                    alert('需要支付'+priceAmount+'元');
                    return false;
                })
                if(priceAmount < 20){
                    $('.shopping_cart > .cart_info > span:nth-of-type(4)').removeClass('submit');
                    $('.shopping_cart > .cart_info > span:nth-of-type(4)').text('￥20起送');

                }

                if (num <=  0) {
                    num = 0;

                    //购买列表每个商品的的合计
                    $(e).parent().parent().find('.price span').text('￥'+price*num);
                    $($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(2)').text(num);

                    $(e).parent().find('span:nth-of-type(2)').html(num);
                    //商品区域的也要影藏
                    $($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(2)').hide(300);
                    $($('.right_info ul li ul li')[buyListIndex]).find('.cartcontrol span:nth-of-type(1)').hide(300);
                    //直接将这个li影藏了
                    $(e).parent().parent().slideUp();
                    console.log($('.buy_list').height());
                    if($('.buy_list').height() <=100){
                        $('.goods .shade').fadeOut();
                        $(e).parents('.buy_list').slideUp();
                    }
                    return;
                }
            })
        })



        // 点击商品图片显示商品详细信息
        var imgBox = $('.right_info ul li ul li .goods_img');
        //imgBox.each(function(i,e){
        //    $(e).click(function(){
        //        console.log($(this).parent().index());
        //    })
        //})
        imgBox.click(function(){
            var index = $(this).parent().index();
            $('.goods_info').show();
            $('.goods_info').css('transform','translateX(0)');
            $($('.goods_info .goods_info_box')[index]).show();
            //点击商品详细信息里的 返回 按钮隐藏商品详细信息页面
            $('.goods_info .goods_img .info_back').click(function(){

                $('.goods_info').css('transition','all .2s');

                $('.goods_info').css('transform','translateX(100%)');
                $('.goods_info').css('display','none');

                $($('.goods_info .goods_info_box')[index]).hide();
            })
        })


    }
    //商家详细信息的功能
    shoppingInfo();
    function shoppingInfo(){
        $('.header .con_count').click(function(){
            $('.shopping_info').fadeIn();
        })
        $('.shopping_info > a').click(function(){
            $('.shopping_info').fadeOut();
        })
    }
    //点击tab栏切换对应的内容
    tab();
    function tab(){
        $('.tab .tab_item').click(function(){
            var index = $(this).index();
            console.log(index);
            $(this).addClass('active').siblings().removeClass('active');
            $($('.container > section')[index]).show().siblings().hide();
        })
    }
})



