<template>
  <div>
    <div class="w-100 p-3">
      <div class="">
        <h1>使い方ガイド</h1>
        <p>1.「create URL」ボタンを押し、URLの生成を行う。</p>
        <p>2.相手に踏ませる用のURLなどをLINEなどに貼り付けアクセスさせる。</p>
        <p>
          3.「2.」の後に、自分が見るようURLにアクセスするとアクセス者のURLの最新5件が表示される。
        </p>
        <p>4.URLは保存しておけば、ずっと使うことができます。</p>
      </div>
      <div>
        <b-button block variant="primary" v-b-toggle.collapse-1
          >Create URL</b-button
        >
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <b-card-text>相手に踏ませるURL:</b-card-text>
            <b-card-text
              ><a :href="honeyurl"> {{ honeyurl }}</a></b-card-text
            >
            <b-card-text>自分が見るURL:</b-card-text>
            <b-card-text
              ><a :href="listurl"> {{ listurl }}</a></b-card-text
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
