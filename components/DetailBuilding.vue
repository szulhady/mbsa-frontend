<template>
  <section style="height: calc(100vh - 121px); overflow: auto">
    <v-card
      v-for="(location, index) in locations"
      :key="index"
      class="border2 my-5 mx-5"
      style="display: flex; flex-direction: column"
    >
      <v-card-subtitle class="compact" style="padding: 0">
        {{ location.name }}
      </v-card-subtitle>
      <v-card-subtitle class="compact" style="justify-content: flex-start">
        {{ location.data }}
      </v-card-subtitle>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          name: "Majlis Bandaraya Shah Alam",
          lat: 3.073470377,
          lng: 101.5194574,
          data: "",
        },
        {
          name: "Bangunan Darul Ehsan",
          lat: 3.07468931,
          lng: 101.5179259,
          data: "",
        },
        {
          name: "Menara MRCB",
          lat: 3.073607999,
          lng: 101.5164143,
          data: "",
        },
        {
          name: "Bangunan Umno Selangor",
          lat: 3.073640699,
          lng: 101.5220588,
          data: "",
        },
        {
          name: "Jabatan Audit Negara Negeri Selangor",
          lat: 3.073884003,
          lng: 101.5236264,
          data: "",
        },
        {
          name: "Wisma PKPS",
          lat: 3.073224293,
          lng: 101.5228737,
          data: "",
        },
        {
          name: "Plaza Alam Sentral",
          lat: 3.074076499,
          lng: 101.5171885,
          data: "",
        },
        {
          name: "Plaza Anggerik",
          lat: 3.071230625,
          lng: 101.5199999,
          data: "",
        },
        {
          name: "SACC Mall",
          lat: 3.071772259,
          lng: 101.5183043,
          data: "",
        },
        {
          name: "Kompleks PKNS",
          lat: 3.070678868,
          lng: 101.5172516,
          data: "",
        },
        {
          name: "Avisena Specialist Hospital",
          lat: 3.071775229,
          lng: 101.5236945,
          data: "",
        },
        {
          name: "Plaza Perangsang",
          lat: 3.072967503,
          lng: 101.5181889,
          data: "",
        },
        {
          name: "Affin Bank",
          lat: "3.0729",
          lng: "101.5182",
          data: "",
        },
        {
          name: "Maybank",
          lat: "3.0729",
          lng: "101.5182",
          data: "",
        },
        {
          name: "Shah Alam Convention Centre",
          lat: 3.069897133,
          lng: 101.5185631,
          data: "",
        },
        {
          name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
          lat: 3.078655977,
          lng: 101.5207023,
          data: "",
        },
        {
          name: "Mardhiyyah Hotel & Suites",
          lat: 3.073727359,
          lng: 101.5226764,
          data: "",
        },
      ],
    };
  },
  methods: {
    getDataMBSA: function () {
      this.$axios
        .$get("http://178.128.29.241/api/total/latestMBSA", {})
        // .$get("http://68.183.189.84:7777/api/total/latestMBSA", {})
        // .$get("http://localhost:7777/api/total/latestMBSA", {})
        .then((response) => {
          // console.log(response.building_id);
          // window.location.reload();
          // for (let i = 0; i < response.length; i++) {
          // console.log(this.locations[response[i].building_id - 1]);
          // this.locations[response[i].building_id - 1].data = response[i].ec;
          // console.log(response);
          this.locations[0].data =
            response[0].total + " KWH, Updated on" + response[0].date;
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData: function () {
      this.$axios
        .$get("http://178.128.29.241/api/total/latest", {})
        // .$get("http://localhost:7777/api/total/latest", {})
        .then((response) => {
          // console.log(response.building_id);
          // window.location.reload();
          for (let i = 0; i < response.length; i++) {
            // console.log(this.locations[response[i].building_id - 1]);
            if (response[i].building_id != 1) {
              this.locations[response[i].building_id - 1].data =
                response[i].ec + " KWH, Updated on " + response[i].date;
            }
            // console.log(this.locations);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getData();
    this.getDataMBSA();
  },
};
</script>

<style scoped>
.compact {
  padding: 0;
  color: aliceblue !important;
}
/* ::-webkit-scrollbar {
  margin: 10px;
  width: 15px;
  left: -100px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
} */

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #b30000;
} */

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px rgb(2, 90, 115);
  /* box-shadow: inset 0 0 10px 10px green; */
  border: solid 3px transparent;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px white;
  /* box-shadow: inset 0 0 10px 10px red; */
  border: solid 3px transparent;
}

.border {
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rebeccapurple;
  width: 200px;
  height: 100px; */
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 10px solid black;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 1s infinite; %7D @keyframes stroke %7B 0%25 %7B filter: invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(94%25) contrast(117%25); %7D 50%25 %7B filter: invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(50%25) contrast(117%25); %7D 100%25 %7B filter: invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(94%25) contrast(117%25); %7D %7D %3C/style%3E%3Cpath d='M0 10 L0 0 L30 0 L27 1 L1 1 L1 10 L 0 15' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M90 0 L100 0 L100 30 L99 25 L99 1 L85 1 L82 0 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 85 L0 100 L15 100 L10 99 L1 99 L1 85 L0 80' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M60 100 L100 100 L100 70 L99 78 L99 99 L68 99 L60 100 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 20 L0 60 L1 54 L1 38 L0 30 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 5 L0 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M100 5 L100 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 0 L95 0' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 100 L95 100' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E %3C/svg%3E")
    2;
  border-image-outset: 1;
}
.border2 {
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rebeccapurple;
  width: 200px;
  height: 100px; */
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 10px solid black;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 1s infinite; %7D @keyframes stroke %7B 0%25 %7B filter: invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(90%25) contrast(119%25); %7D 50%25 %7B filter: invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(70%25) contrast(119%25); %7D 100%25 %7B filter: invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(90%25) contrast(119%25); %7D %7D %3C/style%3E%3Cpath d='M0 10 L0 0 L30 0 L27 1 L1 1 L1 10 L 0 15' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M90 0 L100 0 L100 30 L99 25 L99 1 L85 1 L82 0 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 85 L0 100 L15 100 L10 99 L1 99 L1 85 L0 80' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M60 100 L100 100 L100 70 L99 78 L99 99 L68 99 L60 100 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 20 L0 60 L1 54 L1 38 L0 30 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 5 L0 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M100 5 L100 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 0 L95 0' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 100 L95 100' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E %3C/svg%3E")
    2;
  border-image-outset: 0.2;
}
</style>
