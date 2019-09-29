<template>
  <div class="cart-page">
    <div class="title">购物车{{goodInCart.length}}</div>
    <!-- 条件渲染: 购物车非空 渲染列表,否则提示购物车为空 -->
    <div class="list" v-if="goodInCart.length>0">
      <div class="good" v-for="(item,index) in goodInCart" :key="index">
        <div class="pic">
          <img :src="item.pic" alt="">
        </div>
        <div class="text">
          <div class="name">{{item.name}}</div>
        
          <div class="price">单价:¥{{item.price}}</div>
        </div>
        <div class="btns">
          <span class="btn sub" @click="sub(item.id)">-</span>
          <span class="num">{{item.count}}</span>
          <span class="btn add" @click="add(item.id)">+</span>
          </div>
      </div>
    </div>
    <div class="empty" v-else>
        <img src="../assets/images/没有更多.png" alt="">
        <div>您的购物车还是空的哦!</div>
    </div> 

    <!-- 导航条 -->
    <div class="bar">
      <div class="summary">
        <span>总数:{{total}}</span>
        <span>总价:{{totalPrice}}</span>
      </div>
      <div class="calc"><a href="/confirm">去结算</a></div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState(['goodInCart']),
    total:function()
    {
      return this.goodInCart.reduce(function(t,good){ return t+good.count },0);
    },
    totalPrice:function()
    {
      return this.goodInCart.reduce(function(t,good){ return t+good.count*good.price },0);
    }
  },
  methods:{
    ...mapMutations(['add','sub'])
  }
}
</script>
<style scoped>

.cart-page .title{
  margin-top: 20px;
  font-weight: bold;
  padding-left: 20px;
}
  .cart-page .list{
    margin: 20px;
  }
  .cart-page .list .good{
    position: relative;
    margin: 20px 0;
    display: flex;
  }
  .cart-page .list .good .pic{
    width: 30%;
    margin-right: 15px;
  }
  .cart-page .list .good .pic img{
    width: 100%;
  }
  .cart-page .list .good .text{
    line-height: 30px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cart-page .list .good .text .name{
    white-space: nowrap;/* 不换行 */
    overflow: hidden;
    text-overflow: ellipsis;/* 显示省略号 */
  }
  .cart-page .list .good .btns{
    position: absolute;
    right: 0;
    bottom: 0;
    color: white;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    width: 80px;
    display: flex;
    justify-content: space-between;
  }
  .cart-page .list .good .btns .btn{
    border: 1px solid lightskyblue;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
  }
  .cart-page .list .good .btns .btn:active{
    opacity: .5;
  }
  .cart-page .list .good .btns .btn.sub{
    color: lightskyblue;
  }
  .cart-page .list .good .btns .btn.add{
    background-color: lightskyblue;
  }
  .cart-page .list .good .btns .num{
    color: black;
  }

  .empty{
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
    line-height: 50px;
    font-size: 14px;
  }

  /* 导航条 */
  .bar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 40px;
    display: flex;
  }
  .bar .summary{
    color: white;
    width: 70%;
    background-color: #aaaaaa;
    display: flex;
    justify-content: space-around;
  }
  .bar .calc{
    flex: 1;
    background-color: lightgreen;
    color: white;
    text-align: center;
  }
  
</style>