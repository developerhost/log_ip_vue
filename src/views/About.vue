<template>
  <div>
    <div v-if="click">
      <div v-for="(item, index) in ipss" :key="index" class="w-100">
        <b-card :title="item.ip_address" img-top tag="card" class="m-3">
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
            {{ item.createdAt.toDate() }}
          </b-card-text>
        </b-card>
      </div>
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
      console.log(uid);
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
  },
};
</script>
