<template>
  <div
    class="number-container d-flex justify-content-center align-items-center"
  >
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ num }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
import { builtinModules } from "module";
import bus from '@/components/eventBus.js'
export default {
  props: {
    num: {
      default: 1,
      type: Number,
    },
    id: {
      default: 1,
      type: Number,
    },
  },
  methods: {
    add() {
      // 要发送给app的数据格式{id,value}
      // id是商品id。value
      const obj = { id: this.id, value: this.num + 1 };
      // console.log("点击按钮");
      // console.log(obj);
      // 通
      bus.$emit("share", obj);
    },
  },
};
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
