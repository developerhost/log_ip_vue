<template>
  <div>
    <div class="w-100 p-3">
      <b-button block variant="primary" v-b-toggle.collapse-1
        >Create URL</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <b-card-text>相手に踏ませるURL:</b-card-text>
          <b-card-text> {{ honeyurl }}</b-card-text>
          <b-card-text>自分が見るURL:</b-card-text>
          <b-card-text> {{ listurl }}</b-card-text>
        </b-card>
      </b-collapse>
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
