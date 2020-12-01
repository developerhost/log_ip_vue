<template>
  <div class="back-o p-3">
    <div v-for="(item, index) in ipss" :key="index" class="">
      <b-card :title="item.ip_address" img-top class="rounded-lg mb-3">
        <iframe
          v-bind:src="
            'https://maps.google.co.jp/maps?output=embed&z=10&q=' +
              String(item.latlon)
          "
          width="100%"
          height="250"
          frameborder="0"
        ></iframe>

        <b-card-text> 緯度経度:{{ item.latlon }} </b-card-text>
        <b-card-text>
          {{ datetranse(item.createdAt.toDate()) }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import { db } from "@/main";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  name: "About",

  data: () => ({
    uid: null,
    click: false,
    ipss: null,
    test: "test",
  }),

  components: {},

  created() {
    if (this.$route.query.u == null) {
      console.log("null");
    } else {
      this.serch(this.$route.query.u);
    }
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
    serch(uid) {
      // console.log(uid);
      db.collection("ips")
        .where("uid", "==", uid)
        .orderBy("createdAt", "desc")
        .limit(5)
        .get()
        .then((querySnapshot) => {
          var templist = [];
          querySnapshot.forEach(function(doc) {
            // console.log(doc.id, " => ", doc.data());
            templist.push(doc.data());
          });
          this.ipss = templist;
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
      this.click = true;
    },
    datetranse(date) {
      var date_tarnsed = new Date(date);
      var year_str = date_tarnsed.getFullYear();
      var month_str = 1 + date_tarnsed.getMonth();
      var day_str = date_tarnsed.getDate();
      var hour_str = date_tarnsed.getHours();
      var minute_str = date_tarnsed.getMinutes();
      // var second_str = date_tarnsed.getSeconds();

      var format_str = "YYYY年MM月DD日 hh時mm分";
      format_str = format_str.replace(/YYYY/g, year_str);
      format_str = format_str.replace(/MM/g, month_str);
      format_str = format_str.replace(/DD/g, day_str);
      format_str = format_str.replace(/hh/g, hour_str);
      format_str = format_str.replace(/mm/g, minute_str);
      // format_str = format_str.replace(/ss/g, second_str);
      // console.log(format_str);
      return format_str;
    },
  },
};
</script>
<style scoped>
.back-o {
  background-color: #ff6600;
}
</style>
