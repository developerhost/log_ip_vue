<template>
  <div>
    <div class="padi">
      <div class="center">
        <img src="@/assets/light.jpg" />
      </div>
      <div class="center">
        <p>あなたのIPアドレス({{ cli_id }})を保存しました。</p>
        <p>いつでも通報できる準備ができています。</p>
      </div>

      <iframe
        v-bind:src="
          'https://maps.google.co.jp/maps?output=embed&z=10&q=' + String(latlon)
        "
        width="100%"
        height="450"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { db } from "@/main";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  name: "HelloWorld",

  data() {
    return {
      info: null,
      latlon: null,
      cli_id: null,
      ipss: [],
    };
  },

  components: {},

  created() {
    fetch(
      "https://asia-northeast2-inbound-summit-237702.cloudfunctions.net/ip_hack"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.info = data;
        this.latlon = data["x-appengine-citylatlong"];
        this.cli_id = data["x-appengine-user-ip"];
        this.addtest(this.cli_idthis, this.latlon);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {},

  methods: {
    addtest() {
      db.collection("ips").add({
        ip_address: this.cli_id,
        latlon: this.latlon,
        createdAt: firebase.firestore.Timestamp.now(),
      });
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
}
</style>
