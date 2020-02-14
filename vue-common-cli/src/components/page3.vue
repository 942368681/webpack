<template>
  <div>
    <div class="wrap">
      <div
        class="box"
        ref="box"
        :style="{ width: initRect.width + 'px', height: initRect.height + 'px' }"
      >
        <img :src="imgSrc" :style="{transform: 'rotate('+ deg +'deg)'}" @load="imgLoaded" alt />
      </div>
    </div>
    <button @click="spin">旋转</button>
  </div>
</template>

<script>
import imgSrc from "./../common/img/rip.jpeg";
// import imgSrc from "./../common/img/pic1.jpg";
// import imgSrc from "./../common/img/pic2.jpg";
import { WhiteBoard } from "white-board-pro2";
export default {
  name: "page-3",
  data() {
    return {
      imgSrc,
      deg: 0,
      initRect: {
        width: 0,
        height: 0
      },
      board: null
    };
  },
  created() {
    console.log("page3 created");
  },
  mounted() {
    console.log("page3 mounted");
  },
  methods: {
    spin() {
      this.deg = this.deg + 90;
      const { width, height } = this.initRect;
      this.initRect.width = height;
      this.initRect.height = width;
      this.$nextTick(() => {
        this.initBoard();
      });
    },
    imgLoaded(ev) {
      const { width, height } = ev.target.getBoundingClientRect();
      this.initRect.width = width;
      this.initRect.height = height;
      this.$nextTick(() => {
        this.initBoard();
      });
    },
    initBoard() {
      this.board = WhiteBoard({
        el: this.$refs.box,
        addBtn: false,
        zIndexInfo: [
          {
            update: true,
            inputType: "fountain-pen",
            color: "#000",
            page: 1,
            size: 2,
            zIndex: 1,
            content: [],
            other: {
              img: [],
              audio: [],
              video: [],
              N2: []
            }
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 600px;
  height: 600px;
  overflow-x: auto;
  overflow-y: auto;
  border: 1px solid #000;
  background: #f1f1f1;
}
img {
  display: block;
  border: 0;
  max-width: 600px;
}
.box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>