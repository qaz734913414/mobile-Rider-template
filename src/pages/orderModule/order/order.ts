import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

declare var $: any;
// declare var mui: any;

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  UserPage: string = 'UserPage';
  MessagePage: string = 'MessagePage';
  //当前选择的选项卡，默认是第一个
  selectTab: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    ///拖动悬浮按钮
    document.addEventListener('DOMContentLoaded', function () {
      console.log('domloaded完成');
    }, false);
    // mui.init();
  }


  ionViewDidLoad() {
    this.initMenuTouchMove();

    console.log('ionViewDidLoad OrderPage');
//////////展开更多变化
    var of = true;
    $(document).on('tap', '.more', function () {
      var hei = $(this).prev().children().length * 25 + 10;
      if (of) {
        $(this).prev().css({'height': hei, 'transition': 'all 0.5s'});
        $(this).prev().css({'height': hei, '-webkit-transition': 'all 0.5s'});
        $(this).find('span').html('点击收起');
        $(this).find('img').css({'transform': 'rotate(180deg)', 'transform-origin': 'center'});
        of = false;
      }
      else {
        $(this).prev().css({'height': '55px', 'transition': 'all 0.5s'});
        $(this).prev().css({'height': '55px', '-webkit-transition': 'all 0.5s'});
        $(this).find('span').html('展开更多');
        $(this).find('img').css({'transform': 'rotate(0deg)', 'transform-origin': 'center'});
        of = true;
      }
    })
  }

  setSelectTab(type: number) {
    this.selectTab = type;
  }

  //注册悬浮窗拖动事件
  initMenuTouchMove() {
    var oDiv = document.getElementById('xuanfu');
    console.log(oDiv);
    var tX = 0;
    var tY = 0;
    oDiv.addEventListener('touchstart', function (ev) {
      console.log('touchstart开始');
      var disX = ev.targetTouches[0].pageX - tX;
      var disY = ev.targetTouches[0].pageY - tY;
      oDiv.addEventListener('touchmove', function (ev) {
        console.log('touchmove正在移动');
        tX = ev.targetTouches[0].pageX - disX;
        tY = ev.targetTouches[0].pageY - disY;
        if (tX < 0) //限制左边，不让它超出左边框
        {
          tX = 0;
        } else if (tX > document.documentElement.clientWidth - oDiv.offsetWidth) //限制右边，不让它超出右边框。计算方式:可视区的宽度-div距离左边的距离
        {
          tX = document.documentElement.clientWidth - oDiv.offsetWidth; // div现所在位置=可视区的宽度-div距离左边的距离
        }
        if (tY < 0) {
          tY = 0;
        } else if (tY > document.documentElement.clientHeight - oDiv.offsetHeight - 44) {
          tY = document.documentElement.clientHeight - oDiv.offsetHeight - 44;
        }
        // webkitTransformOriginX
        // webkitTransformOriginY
        // webkitTransformOriginZ
        // transform
        // oDiv.style.WebkitTransform = 'translate(' + tX + 'px,' + tY + 'px)';
        oDiv.style.transform = 'translate(' + tX + 'px,' + tY + 'px)';
      })
      oDiv.addEventListener('touchend', function (ev) {
        console.log('touch结束');
        oDiv.ontouchmove = null;
        oDiv.ontouchend = null;
      })
      ev.preventDefault();
    }, false);

    $('.tianjia').on('tap',function(){

        $('.tianjia').css({'transform':'rotate(360deg)','transition':'all .5s'});
        $('.tianjia').css({'-webkit-transform':'rotate(360deg)','-webkit-transition':'all .5s'});
        $('.zzc').css('display','block');
        $('.xuanfu').css({'width':'180px','height':'150px'});
        $('.tianjia').css({'top':'80px','left':'80px'});
        $('.quanBu').attr('class','quanBu_1');
        $('.bianji').attr('class','bianji_1 link');
        $('.meituan').attr('class','meituan_1');
        $('.baidu').attr('class','baidu_1');
        $('.eleme').attr('class','eleme_1');

    })

    $(document).on('tap',function(e){
      if(e.target.className=='zzc'){
        $('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
        $('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
        $('.zzc').css('display','none');
        $('.xuanfu').css({'width':'62px','height':'62px'});
        $('.tianjia').css({'top':'0px','left':'0px'});
        $('.quanBu_1').attr('class','quanBu');
        $('.bianji_1').attr('class','bianji link');
        $('.meituan_1').attr('class','meituan');
        $('.baidu_1').attr('class','baidu');
        $('.eleme_1').attr('class','eleme');
      }
    })


//单机全部，百度，美团，饿了么显示出对应的单子
    $('.quanBu').on('tap',function(){
      $('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
      $('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
      $('.mui-slider-group').css('display','block');
      $('.none').css('display','none');
      $('.zzc').css('display','none');
      $('.xuanfu').css({'width':'62px','height':'62px'});
      $('.tianjia').css({'top':'0px','left':'0px'});
      $('.quanBu_1').attr('class','quanBu');
      $('.bianji_1').attr('class','bianji link');
      $('.meituan_1').attr('class','meituan');
      $('.baidu_1').attr('class','baidu');
      $('.eleme_1').attr('class','eleme');
    })
    $('.baidu').on('tap',function(){
      $('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
      $('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
      $('.mui-slider-group').css('display','block');
      $('.none').css('display','none');
      $('.zzc').css('display','none');
      $('.xuanfu').css({'width':'62px','height':'62px'});
      $('.tianjia').css({'top':'0px','left':'0px'});
      $('.quanBu_1').attr('class','quanBu');
      $('.bianji_1').attr('class','bianji link');
      $('.meituan_1').attr('class','meituan');
      $('.baidu_1').attr('class','baidu');
      $('.eleme_1').attr('class','eleme');
    })
    $('.meituan').on('tap',function(){
      $('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
      $('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
      $('.mui-slider-group').css('display','block');
      $('.none').css('display','none');
      $('.zzc').css('display','none');
      $('.xuanfu').css({'width':'62px','height':'62px'});
      $('.tianjia').css({'top':'0px','left':'0px'});
      $('.quanBu_1').attr('class','quanBu');
      $('.bianji_1').attr('class','bianji link');
      $('.meituan_1').attr('class','meituan');
      $('.baidu_1').attr('class','baidu');
      $('.eleme_1').attr('class','eleme');
    })
    $('.eleme').on('tap',function(){
      $('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
      $('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
      $('.mui-slider-group').css('display','block');
      $('.none').css('display','none');
      $('.zzc').css('display','none');
      $('.xuanfu').css({'width':'62px','height':'62px'});
      $('.tianjia').css({'top':'0px','left':'0px'});
      $('.quanBu_1').attr('class','quanBu');
      $('.bianji_1').attr('class','bianji link');
      $('.meituan_1').attr('class','meituan');
      $('.baidu_1').attr('class','baidu');
      $('.eleme_1').attr('class','eleme');
    })
    $('.bianji').on('tap',()=>{
      $('.tianjia').css({'transform':'rotate(0deg)','transition':'all .5s'});
      $('.tianjia').css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'all .5s'});
      $('.mui-slider-group').css('display','block');
      $('.none').css('display','none');
      $('.zzc').css('display','none');
      $('.xuanfu').css({'width':'62px','height':'62px'});
      $('.tianjia').css({'top':'0px','left':'0px'});
      $('.quanBu_1').attr('class','quanBu');
      $('.bianji_1').attr('class','bianji link');
      $('.meituan_1').attr('class','meituan');
      $('.baidu_1').attr('class','baidu');
      $('.eleme_1').attr('class','eleme');
      this.navCtrl.push('DemoPage');
    })


  }

}