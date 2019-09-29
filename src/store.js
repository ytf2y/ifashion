import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodInCart:[]//用来保存加入购物车的商品数据
  },
  //mutations中定义同步方法,可以直接修改state中的数据
  mutations: {
    //点击 加入购物车
    addToCart(state, good) {
      //判断将要加入购物车的商品是否已存在
      var findGood = state.goodInCart.find(function (item, index) {
        return good.id == item.id
      });

      //如果商品是第一次加入购物车,商品数量为1
      if (!findGood) {
        //good.count = 1; // count属性是新属性,必须保证新属性是响应式的. 否则页面可能不会更新
        Vue.set(good, 'count', 1);
        state.goodInCart.push(good);
      }
      //如果商品是再次加入购物车,商品数量加1
      else {
        if(findGood.count < 5) findGood.count++;
      }

      console.log(this.state.goodInCart);
      
    },
    //数量加1,
    add: function (state,id) {
      //查找对应id的商品
      var findGood = state.goodInCart.find(function (good, index) {
        return good.id == id;
      });
      if (findGood) {
        if (findGood.count < 5) findGood.count++;
      }
    },
    //数量减1
    sub: function (state,id) {
      //查找对应id的商品
      var findGood = state.goodInCart.find(function (good, index) {
        return good.id == id;
      });
      if (findGood) {
        if (findGood.count > 1) findGood.count--;
      }
    },
  },
  //actions中定义异步方法( 发送ajax )
  actions: {
    
  }
})
