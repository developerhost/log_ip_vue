<template>
  <div>
    <input v-model="uid" placeholder="your id" />
    <button v-on:click="serch()">serch</button>
    <div v-if="click">
      <div>sasasa</div>
      <div>{{ ipss }}</div>
      <!-- <div v-for="(item, index) in ipss" :key="index">
        <div>
          {{ item.ip_address }}
        </div>

        <div>
          {{ item.latlon }}
        </div>

        <div>
          {{ item.createdAt }}
        </div>
      </div> -->
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
    this.uid = this.$route.query.u;
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
    serch() {
      db.collection("ips")
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
