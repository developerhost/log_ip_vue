<template>
  <div>
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
</template>

<script>
import { db } from "@/main";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  name: "About",

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
  },
};
</script>
