<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="cbFull"
        :checked="isfull"
        @change="changeCheck"
      />
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>

    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>
      <span class="total-price">￥{{ amount.toFixed(2) }}</span>
    </div>

    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">
      结算（{{ all }}）
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curFullCheck: this.fullCheck,
    };
  },

  methods: {
    changeCheck(e) {
      this.$emit("full-change", e.target.checked);
      // console.log(e.target.checked);
    },
  },
  props: {
    isfull: {
      default: false,
      type: Boolean,
    },
    //总价格
    amount: {
      default: 0,
      type: Number,
    },
    //选中的总数量
    all: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
</style>
