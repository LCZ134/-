<template>
  <div class="puzzle" :style="{
    width:width+'px',
    height:height+'px'
    }">
    <div
      class="puzzle_block"
      v-for="(item,index) in blockPoint"
      :key="item.id"
      :style="{
        width:blockWidth+'px',
        height:blockHeigth+'px',
        top:item.x+'px',
        left:item.y+'px',
        backgroundImage:`url(${img})`,
        backgroundPosition: `-${blockPoint[index].x}px -${blockPoint[index].y}px`,
        opacity: index===blockPoint.length-1&&0
        }"
      @click="handleClick"
      :ref="index===blockPoint.length-1?'empty':'block'"
      :data-correctX="correctPoint[index].x"
      :data-correctY="correctPoint[index].y"
    >{{index}}</div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 600
    },
    row: {
      type: Number,
      default: 3
    },
    col: {
      type: Number,
      default: 3
    },
    img: {
      type: String,
      required: true
    }
  },
  computed: {
    blockWidth() {
      return this.width / this.col;
    },
    blockHeigth() {
      return this.height / this.row;
    },
    blockPoint() {
      const points = this.correctPoint;

      const length = points.length;
      const LastEle = points[length - 1]; //undefund

      const newArr = [...points];
      newArr.length = length - 1;
      newArr.sort(() => Math.random() - 0.5);
      newArr.push(LastEle);

      return newArr;
    },
    correctPoint() {
      var { row, col, blockWidth, blockHeigth } = this;
      var arr = [];
      for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
          arr.push({
            x: j * blockWidth,
            y: i * blockHeigth,
            id: new Date().getTime() + Math.random() * 100
          });
        }
      }
      return arr;
    }
  },
  methods: {
    handleClick(e) {
      const blockDom = e.target;
      const emptyDom = this.$refs.empty[0];
      const { left, top } = blockDom.style;

      if (!this.isAdject(blockDom, emptyDom)) {
        return;
      }

      blockDom.style.left = emptyDom.style.left;
      blockDom.style.top = emptyDom.style.top;

      emptyDom.style.left = left;
      emptyDom.style.top = top;

      const winFlag = this.chickWin();

      if (winFlag) {
        console.log("win");
      }
    },
    isAdject(blockDom, emptyDom) {
      const { left: blockLeft, top: blockTop, width, height } = blockDom.style;
      const { left: emptyLeft, top: emptyTop } = emptyDom.style;

      const xDis = Math.abs(parseInt(blockLeft) - parseInt(emptyLeft));
      const yDis = Math.abs(parseInt(blockTop) - parseInt(emptyTop));

      const flag =
        (blockLeft == emptyLeft && yDis === parseInt(height)) ||
        (blockTop == emptyTop && xDis === parseInt(width));
      return flag;
    },
    chickWin() {
      const blockArr = this.$refs.block;

      //every全真返回真,判断打乱位置是否等于还原位置
      return blockArr.every(dom => {
        const { left: domLeft, top: domTop } = dom.style;
        const { correctx, correcty } = dom.dataset;
        const flag =
          parseInt(domLeft) === parseInt(correctx) &&
          parseInt(domTop) === parseInt(correcty);
        return flag;
      });
    }
  }
};
</script>

<style>
.puzzle {
  border: 2px solid #dccdcd;
  position: relative;
}
.puzzle_block {
  background-color: red;
  border: 1px solid white;
  position: absolute;
  box-sizing: border-box;
  transition: 0.5s linear;
}
</style>