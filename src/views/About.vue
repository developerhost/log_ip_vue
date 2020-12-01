<template>
  <div>
    <div v-if="click">
      <div v-for="(item, index) in ipss" :key="index">
        <div>
          {{ item.ip_address }}
        </div>

        <div>
          {{ item.latlon }}
        </div>

        <div>
          {{ item.createdAt.toDate() }}
        </div>
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
