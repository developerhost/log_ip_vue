<template>
  <div>
    <div class="w-100 p-2 back-o hei">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand f-c-o font-weight-bold" href="#">特定さん.com</a>
      </nav>
      <b-card class="rounded-lg">
        <p class="text-center font-weight-bold">
          リンクを踏ませてIPアドレスを特定する
        </p>
        <div class="">
          <b-button
            block
            variant="primary"
            v-b-toggle.collapse-1
            class="font-weight-bold"
            >Go 特定さん !</b-button
          >
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <b-card-text class="font-weight-bold"
                >相手に踏ませるURL:</b-card-text
              >
              <b-card-text
                ><a :href="honeyurl" target="”_blank”">
                  {{ honeyurl }}</a
                ></b-card-text
              >
              <b-card-text class="font-weight-bold"
                >踏んだ相手の確認用URL:</b-card-text
              >
              <b-card-text
                ><a :href="listurl" target="”_blank”">
                  {{ listurl }}</a
                ></b-card-text
              >
            </b-card>
          </b-collapse>
        </div>
      </b-card>
      <div class="back-w p-4 back-o">
        <div class="f-c-o font-weight-bold">
          <div class="text-center">業者撃退・詐欺僕滅</div>
          <h4 class="text-center font-weight-bold">特定さん</h4>
        </div>
        <div class="mt-3">
          <p class="mt-3 font-weight-bold m-0">使い方ガイド</p>
          <p class="">
            <span class="font-weight-bold">1.</span>「Go 特定さん
            !」ボタンを押し、URLの生成を行う。
          </p>
          <p class="">
            <span class="font-weight-bold">2.</span
            >相手に踏ませる用のURLなどをLINEなどに貼り付けアクセスさせる。
          </p>
          <p class="">
            <span class="font-weight-bold">3.</span
            >「2.」の後に、自分が見るようURLにアクセスするとアクセス者のURLの最新5件が表示される。
          </p>
          <p class="m-0">
            <span class="font-weight-bold">4.</span
            >URLは保存しておけば、ずっと使うことができます。
          </p>
        </div>
        <div class="mt-3">
          <p class="font-weight-bold m-0">特徴</p>
          <li>無料で使用可能</li>
          <li>登録要求なし</li>
          <li>直感的な操作</li>
          <li>ぜひ、インターネット上の詐欺や業者対策にお使いください</li>
        </div>
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
.btn-primary {
  background: #ff0068;
  color: #ffffff;
}
.hei {
  min-height: 100vh;
}
.center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-c-o {
  color: #ff0068;
}
.back-w {
  background-color: #ffffff;
  border-radius: 15px;
}
.back-o {
  /* background-color: #ff6600; */
  background: #f9f9f9;
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
