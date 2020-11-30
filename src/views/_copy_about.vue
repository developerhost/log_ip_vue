<template>
  <div>
    <input v-model="uid" placeholder="your id" />
    <button v-on:click="serch">serch</button>
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

  data() {
    return {
      uid: null,
      click: false,
      info: null,
      latlon: null,
      cli_id: null,
      ipss: [],
      test: null,
    };
  },

  components: {},

  created() {},
  mounted() {},
  firestore() {
    return {
      ipss: db
        .collection("ips")
        .orderBy("createdAt", "desc")
        .limit(5),
    };
  },
  methods: {
    addtest() {
      db.collection("ips").add({
        ip_address: this.cli_id,
        latlon: this.latlon,
        createdAt: firebase.firestore.Timestamp.now(),
      });
    },
    serch() {
      this.test = db
        .collection("ips")
        .orderBy("createdAt", "desc")
        .limit(5);
      this.click = true;
    },
  },
};
</script>
