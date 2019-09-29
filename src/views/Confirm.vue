<template>
    <div class="confirm-page">
        <div class="block">
            <div class="title">收货地址</div>
            <div class="list">
                <div class="address item" v-for="(address,index) in addressList" :key="address.id" @click="selectAddress(index)" :class="{active: currentAddress==index }">{{address.address}}</div>
            </div>
        </div>
        <div class="block">
            <div class="title">支付方式</div>
            <div class="list">
                <div class="address item" v-for="(pay,index) in payList" :key="pay.id" @click="selectPay(index)" :class="{active: currentPay==index }">
                    {{pay.pay}}
                    <img :src="pay.icon"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            currentAddress:0,//默认选中的地址
            addressList:[
                {
                    "id":1,
                    "address":"河南省-开封市-上帝之巅"
                },
                {
                    "id":2,
                    "address":"河南省-开封市-太平天国"
                },
                {
                    "id":3,
                    "address":"河南省-开封市-密西西比"
                }
            ],
            currentPay:0,//默认选中的支付方式
            payList:[
                {
                    "id":11,
                    "pay":"微信",
                    "icon":require("../assets/images/微信.png")
                },
                {
                    "id":12,
                    "pay":"支付宝",
                    "icon":require("../assets/images/支付宝认证.png")
                },
                {
                    "id":13,
                    "pay":"银联",
                    "icon":require("../assets/images/支付平台-银联.png")
                }
            ],
        }
    },
    methods:{
        //点击选择地址
        selectAddress:function(index){
            this.currentAddress = index;
        },
        //点击选择支付方式
        selectPay:function(index){
            this.currentPay = index;
        }
        
    }
}
</script>
<style scoped>
    .block {
        margin: 20px;
        line-height: 50px;
    }
    .block .title{
        font-weight: bold;
    }
    .block .list .item{
        border-top: 1px solid #f0f0f0;
        display: flex;
        align-items: center;
    }
    .block .list .item img{
        width: 30px;
        margin-left: 20px;
    } 
    .block .list .item.active{
        background-size: 20px;
        background-image: url("../assets/images/check.png");
        background-position: right center;
        background-repeat: no-repeat;
    }

</style>