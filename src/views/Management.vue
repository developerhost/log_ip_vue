<template>
  <div>
    <div class="top-visual">
      <div class="inner-text">
        <img class="logo-svg" src="../assets/logo.svg" />
      </div>
      <p>aaa</p>
    </div>
    <div class="w-100 p-2 back-o">
      <div class="back-w p-4 mt-3 mb-3">
        <div class="f-c-o font-weight-bold">
          <div class="text-center">業者撃退・詐欺僕滅</div>
          <h1 class="text-center">IP hacks</h1>
        </div>
        <h3 class="text-center mb-3 mt-3">使い方ガイド</h3>
        <p>
          <span class="font-weight-bold">1.</span>「create
          URL」ボタンを押し、URLの生成を行う。
        </p>
        <p>
          <span class="font-weight-bold">2.</span
          >相手に踏ませる用のURLなどをLINEなどに貼り付けアクセスさせる。
        </p>
        <p>
          <span class="font-weight-bold">3.</span
          >「2.」の後に、自分が見るようURLにアクセスするとアクセス者のURLの最新5件が表示される。
        </p>
        <p>
          <span class="font-weight-bold">4.</span
          >URLは保存しておけば、ずっと使うことができます。
        </p>
        <b-button block variant="primary" v-b-toggle.collapse-1
          >Create URL</b-button
        >
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <b-card-text>相手に踏ませるURL:</b-card-text>
            <b-card-text
              ><a :href="honeyurl" target="”_blank”">
                {{ honeyurl }}</a
              ></b-card-text
            >
            <b-card-text>自分が見るURL:</b-card-text>
            <b-card-text
              ><a :href="listurl" target="”_blank”">
                {{ listurl }}</a
              ></b-card-text
            >
          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    listurl: null,
    honeyurl: null,
  }),

  components: {},

  created() {
    var rand_string = this.makerandom();
    // console.log(rand_string);
    this.listurl =
      location.protocol + "//" + location.hostname + "/list?u=" + rand_string;
    this.honeyurl =
      location.protocol + "//" + location.hostname + "/?u=" + rand_string;
  },
  mounted() {},

  methods: {
    makerandom(myStrong) {
      var strong = 1000;
      if (myStrong) strong = myStrong;
      return (
        new Date().getTime().toString(16) +
        Math.floor(strong * Math.random()).toString(16)
      );
    },
  },
};
</script>

<style scoped>
.f-c-o {
  color: #ff6600;
}
.back-w {
  background-color: #ffffff;
  border-radius: 15px;
}
.back-o {
  background-color: #ff6600;
}
.top-visual {
  height: 100vh;
  background-image: url(../assets/top.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.inner-text {
  position: absolute;
  color: #ff6600 !important;
  font-weight: bold;
  font-size: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.logo-svg {
  width: 90%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
