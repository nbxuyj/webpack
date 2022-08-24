<template>
  <div class="app-container">
    <Header :title="'购物车标题' + listCount"></Header>

    <Goods
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :pic="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      @state-change="getNewState"
      :count="item.goods_count"
    ></Goods>
    <!-- Footer区域 -->
    <Footer :isfull="fullState" :all="total"></Footer>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header/Header.vue";
import Goods from "@/components/Goods/Goods.vue";
import Footer from "@/components/Footer/Footer.vue";
import bus from "@/components/eventBus.js";

export default {
  components: { Header, Goods, Footer },

  data() {
    return {
      list: [],
      title: "购物车案例传值",
    };
  },
  computed: {
    // 动态计算出全选状态的值是true还是false
    fullState() {
      return this.list.every((p) => p.goods_state);
    },
    // 计算属性的 getter
    listCount() {
      return this.list.length;
      // console.log("计算listCount");

      // var res=this.list.length;
      // // `this` 指向 vm 实例
      // var arr=[1,2,3,4]

      // return res.length;
    },
    // 计算出总价格
    amt() {
      // 1. 先filter过滤。
      return this.list
        .filter((item) => item.goods_state)
        .reduce(
          (total, item) => (total += item.goods_price * item.goods_count),
          0
        );
    },
    total() {
      return this.list
        .filter((p) => p.goods_state)
        .reduce((t, item) => (t += item.goods_count), 0);
    },
  },
  created() {
    // 调用请求数据的方法。
    this.initCartList();
    //this.title=this.list.length;
    bus.$on("share", (val) => {
      console.log("app组件中接收到的值：");
      console.log(val);
      this.list.some((item) => {
        if (item.id == val.id) {
          item.goods_count = val.value;
          return true;
        }
      });
    });
  },

  methods: {
    // 封装请求列表数据的方法
    async initCartList() {
      const { data: res } = await axios.get("https://www.escook.cn/api/cart");
      this.list = res.list;
      console.log(res.length);
    },
    // e的格式｛id,value｝
    getNewState(e) {
      console.log("接收到子修改值:");
      console.log(e);
      // 使用some来找。
      this.list.some((item) => {
        if (item.id == e.id) {
          item.goods_state = e.value;
          return true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
