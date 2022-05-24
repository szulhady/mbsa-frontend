<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      height="46px"
      color="rgba(64, 86, 107, 1)"
    >
      <!-- <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="$vuetify.breakpoint.mobile"
      /> -->
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn> -->
      <img src="selangor.svg" alt="nex-plex-logo" width="30px" />
      <v-toolbar-title v-text="title" class="title-main" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-layout>
        <nuxt />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "MBSA",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "OTHERS",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title:
        "SHAH ALAM LOW CARBON BUILDING PROFILING AND ENERGY MONITORING (SALCBEM)",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nova+Square&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.v-application::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  background-image: url(~/assets/pattern.png);
  background-size: 4.6875rem;
  background-repeat: repeat;
  background-attachment: initial;
}
.v-application {
  /* background-color: rgba(88, 104, 124, 1); */
  background-color: #273136;
  /* background-image: ; */
  /* background: url("~assets/bg.jpg") no-repeat cover; */
  /* background: url("~assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
  /* require(`../assets/${icon}`) */
  /* background-color: #e5e5f7; */
  /* background-color: #273136; */
  /* opacity: 0.8; */
}
.title-main {
  font-size: 1rem;
  color: white;
  padding-left: 20px;
}
</style>
