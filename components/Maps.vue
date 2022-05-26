<template>
  <section style="overfloe: hidden">
    <GMap
      ref="gMap"
      language="en"
      :cluster="{ options: { styles: clusterStyle } }"
      :center="{ lat: locations[a].lat, lng: locations[a].lng }"
      :options="{ fullscreenControl: false, styles: mapStyle }"
      :zoom="16"
    >
      <div :key="num">
        <GMapMarker
          v-for="(location, index) in categories[current].locations"
          :key="index"
          :position="{ lat: location.lat, lng: location.lng }"
          :options="{
            icon:
              location === currentLocation ? pins.selected : pins.notSelected,
          }"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{ maxWidth: 200 }">
            <!-- <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code> -->
            <v-card-subtitle
              style="color: black; padding: 2px; font-weight: bold"
            >
              <!-- {{ location }} -->
              {{ location.name }}
            </v-card-subtitle>
            <v-card-subtitle style="color: black; padding: 2px">
              <!-- {{ location }} -->
              <span style="font-weight: bold">Status</span>: Online
            </v-card-subtitle>
            <v-card-subtitle style="color: black; padding: 2px">
              <!-- {{ location }} -->
              <span style="font-weight: bold">Location</span>:
              {{ location.lat }}, {{ location.lng }}
            </v-card-subtitle>
          </GMapInfoWindow>
        </GMapMarker>
      </div>

      <!-- <GMapCircle :options="circleOptions" /> -->
    </GMap>
    <div
      style="
        width: 100%;
        overflow: hidden;
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 16px;
      "
    >
      <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
        <v-btn
          outlined
          color="white"
          v-for="(location, index) in categories"
          @click="setCurrent(index)"
          :key="index"
          class="btn-content"
        >
          {{ location.category }}
        </v-btn>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import DetailCards from "~/components/DetailCards.vue";

export default {
  data() {
    return {
      num: true,
      settings: {
        dots: true,
        // "focusOnSelect": true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 5,
      },
      a: 0,
      current: 0,
      center: { lat: 4.074513033, lng: 101.5178721 },

      // mapStyle: [
      //   {
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#242f3e",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#746855",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.text.stroke",
      //     stylers: [
      //       {
      //         color: "#242f3e",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative.locality",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#d59563",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#d59563",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#263c3f",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#6b9a76",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#38414e",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "geometry.stroke",
      //     stylers: [
      //       {
      //         color: "#212a37",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#9ca5b3",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#746855",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "geometry.stroke",
      //     stylers: [
      //       {
      //         color: "#1f2835",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#f3d19c",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "transit",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#2f3948",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "transit.station",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#d59563",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#17263c",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#515c6d",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "labels.text.stroke",
      //     stylers: [
      //       {
      //         color: "#17263c",
      //       },
      //     ],
      //   },
      // ],

      mapStyle: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8ec3b9",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1a3646",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#64779e",
            },
          ],
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878",
            },
          ],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#334e87",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#283d6a",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6f9ba5",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3C7680",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#304a7d",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#2c6675",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#255763",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#b0d5ce",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#283d6a",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#3a4762",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#0e1626",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#4e6d70",
            },
          ],
        },
      ],

      // mapStyle: [
      //   {
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#212121",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.icon",
      //     stylers: [
      //       {
      //         visibility: "off",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#757575",
      //       },
      //     ],
      //   },
      //   {
      //     elementType: "labels.text.stroke",
      //     stylers: [
      //       {
      //         color: "#212121",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#757575",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative.country",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#9e9e9e",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative.land_parcel",
      //     stylers: [
      //       {
      //         visibility: "off",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "administrative.locality",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#bdbdbd",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#757575",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#181818",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#616161",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "poi.park",
      //     elementType: "labels.text.stroke",
      //     stylers: [
      //       {
      //         color: "#1b1b1b",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "geometry.fill",
      //     stylers: [
      //       {
      //         color: "#2c2c2c",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#8a8a8a",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.arterial",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#373737",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#3c3c3c",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.highway.controlled_access",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#4e4e4e",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "road.local",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#616161",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "transit",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#757575",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "geometry",
      //     stylers: [
      //       {
      //         color: "#000000",
      //       },
      //     ],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "labels.text.fill",
      //     stylers: [
      //       {
      //         color: "#3d3d3d",
      //       },
      //     ],
      //   },
      // ],

      currentLocation: {},
      // circleOptions: {
      //   ...
      // },

      locations: [
        {
          name: "Majlis Bandaraya Shah Alam",
          lat: 3.073470377,
          lng: 101.5194574,
        },
        {
          name: "Bangunan Darul Ehsan",
          lat: 3.07468931,
          lng: 101.5179259,
        },
        {
          name: "Menara MRCB",
          lat: 3.073607999,
          lng: 101.5164143,
        },
        {
          name: "Bangunan Umno Selangor",
          lat: 3.073640699,
          lng: 101.5220588,
        },
        {
          name: "Jabatan Audit Negara Negeri Selangor",
          lat: 3.073884003,
          lng: 101.5236264,
        },
        {
          name: "Wisma PKPS",
          lat: 3.073224293,
          lng: 101.5228737,
        },
        {
          name: "Plaza Alam Sentral",
          lat: 3.074076499,
          lng: 101.5171885,
        },
        {
          name: "Plaza Anggerik",
          lat: 3.071230625,
          lng: 101.5199999,
        },
        {
          name: "SACC Mall",
          lat: 3.071772259,
          lng: 101.5183043,
        },
        {
          name: "Kompleks PKNS",
          lat: 3.070678868,
          lng: 101.5172516,
        },
        {
          name: "Avisena Specialist Hospital",
          lat: 3.071775229,
          lng: 101.5236945,
        },
        {
          name: "Plaza Perangsang",
          lat: 3.072967503,
          lng: 101.5181889,
        },
        // {
        //   name: "Affin Bank",
        //   lat: "3.0729",
        //   lng: "101.5182",
        // },
        // {
        //   name: "Maybank",
        //   lat: "3.0729",
        //   lng: "101.5182",
        // },
        {
          name: "Shah Alam Convention Centre",
          lat: 3.069897133,
          lng: 101.5185631,
        },
        {
          name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
          lat: 3.078655977,
          lng: 101.5207023,
        },
        {
          name: "Mardhiyyah Hotel & Suites",
          lat: 3.073727359,
          lng: 101.5226764,
        },
      ],
      categories: [
        {
          category: "office",
          locations: [
            {
              name: "Bangunan Darul Ehsan",
              lat: 3.07468931,
              lng: 101.5179259,
            },
            {
              name: "Menara MRCB",
              lat: 3.073607999,
              lng: 101.5164143,
            },
            {
              name: "Bangunan Umno Selangor",
              lat: 3.073640699,
              lng: 101.5220588,
            },
            {
              name: "Jabatan Audit Negara Negeri Selangor",
              lat: 3.073884003,
              lng: 101.5236264,
            },
            {
              name: "Wisma PKPS",
              lat: 3.073224293,
              lng: 101.5228737,
            },
          ],
        },
        {
          category: "retail",
          locations: [
            {
              name: "Plaza Alam Sentral",
              lat: 3.074076499,
              lng: 101.5171885,
            },
            {
              name: "Plaza Anggerik",
              lat: 3.071230625,
              lng: 101.5199999,
            },
            {
              name: "SACC Mall",
              lat: 3.071772259,
              lng: 101.5183043,
            },
            {
              name: "Kompleks PKNS",
              lat: 3.070678868,
              lng: 101.5172516,
            },
          ],
        },
        {
          category: "healthcare",
          locations: [
            {
              name: "Avisena Specialist Hospital",
              lat: 3.071775229,
              lng: 101.5236945,
            },
          ],
        },
        {
          category: "mixed use",
          locations: [
            {
              name: "Plaza Perangsang",
              lat: 3.072967503,
              lng: 101.5181889,
            },
          ],
        },
        {
          category: "banking",
          locations: [],
        },
        {
          category: "entertainment",
          locations: [
            {
              name: "Shah Alam Convention Centre",
              lat: 3.069897133,
              lng: 101.5185631,
            },
          ],
        },
        {
          category: "religious",
          locations: [
            {
              name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
              lat: 3.078655977,
              lng: 101.5207023,
            },
          ],
        },
        {
          category: "lodging",
          locations: [
            {
              name: "Mardhiyyah Hotel & Suites",
              lat: 3.073727359,
              lng: 101.5226764,
            },
          ],
        },
        {
          category: "all",
          locations: [
            {
              name: "Majlis Bandaraya Shah Alam",
              lat: 3.073470377,
              lng: 101.5194574,
            },
            {
              name: "Bangunan Darul Ehsan",
              lat: 3.07468931,
              lng: 101.5179259,
            },
            {
              name: "Menara MRCB",
              lat: 3.073607999,
              lng: 101.5164143,
            },
            {
              name: "Bangunan Umno Selangor",
              lat: 3.073640699,
              lng: 101.5220588,
            },
            {
              name: "Jabatan Audit Negara Negeri Selangor",
              lat: 3.073884003,
              lng: 101.5236264,
            },
            {
              name: "Wisma PKPS",
              lat: 3.073224293,
              lng: 101.5228737,
            },
            {
              name: "Plaza Alam Sentral",
              lat: 3.074076499,
              lng: 101.5171885,
            },
            {
              name: "Plaza Anggerik",
              lat: 3.071230625,
              lng: 101.5199999,
            },
            {
              name: "SACC Mall",
              lat: 3.071772259,
              lng: 101.5183043,
            },
            {
              name: "Kompleks PKNS",
              lat: 3.070678868,
              lng: 101.5172516,
            },
            {
              name: "Avisena Specialist Hospital",
              lat: 3.071775229,
              lng: 101.5236945,
            },
            {
              name: "Plaza Perangsang",
              lat: 3.072967503,
              lng: 101.5181889,
            },
            // {
            //   name: "Affin Bank",
            //   lat: "3.0729",
            //   lng: "101.5182",
            // },
            // {
            //   name: "Maybank",
            //   lat: "3.0729",
            //   lng: "101.5182",
            // },
            {
              name: "Shah Alam Convention Centre",
              lat: 3.069897133,
              lng: 101.5185631,
            },
            {
              name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
              lat: 3.078655977,
              lng: 101.5207023,
            },
            {
              name: "Mardhiyyah Hotel & Suites",
              lat: 3.073727359,
              lng: 101.5226764,
            },
          ],
        },
      ],
      pins: {
        selected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAwCAMAAACsRTNeAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAZlBMVEUAAADGISHGISHCIR3GISHGJSXGIR3GIR3GIR2+ISHCISHGISHGIR3GISHGIR3CIR3GJSHGIR3GIR3WMSnqQzXOKSXmPzHSLSXiPDHKJSHGJSHeOS3aNS2+HRmyFRHKKSHiOS3iPzF0SiX0AAAAEnRSTlMAhDzGVB2o6rIKnHRoLeLWaN5BSZ8zAAABdUlEQVR42u39V3KEMAxAAZi2fXcTyd203P+SoQTjyk4O8P5g3kio8U3+TVms1NeM0BQVaIGIQsG5eKaUEyhDNziDqgmNJ4CkLnyAh688oKUhRt08RccKpVLf3ESGppBQW2dKlIZDuVWkaQ68bJl41uHqvjgFc9+2iF6ganEqpzGi6yfEHljCrNSwK/3GXqeYSyuUfWbW6fZkp9mx+dt+x3YDO88RjmMDtZB1+v84uDjiMBeeZ8dOwjiOLX6py+nPEIehbO7P9Txuz7zbFBtGwrL+ThMpLoozQHwn5s5H70kX63JUTqAAUf1dWpNZ1XkP7bLeh5+0w052n8mFpTOBc9PNGROKAe+gy+/4NKSqiUcJY6iwCwm46eA6WPxTCL/bdsbD+24DTUIh5WuX3Ev3qPfBsRvJcBn+FHzlFHKFNVsL96xDinUn3THFLLXJrjxyHoofffDK/EvL1b1xwvUyjyiA6/cHZ/qXf0o19RHg+skpi6/w1S8tW0/UXw6dAwAAAABJRU5ErkJggg==",

        notSelected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAwCAMAAACsRTNeAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAZlBMVEUAAADGISHGISHCIR3GISHGJSXGIR3GIR3GIR2+ISHCISHGISHGIR3GISHGIR3CIR3GJSHGIR3GIR3WMSnqQzXOKSXmPzHSLSXiPDHKJSHGJSHeOS3aNS2+HRmyFRHKKSHiOS3iPzF0SiX0AAAAEnRSTlMAhDzGVB2o6rIKnHRoLeLWaN5BSZ8zAAABdUlEQVR42u39V3KEMAxAAZi2fXcTyd203P+SoQTjyk4O8P5g3kio8U3+TVms1NeM0BQVaIGIQsG5eKaUEyhDNziDqgmNJ4CkLnyAh688oKUhRt08RccKpVLf3ESGppBQW2dKlIZDuVWkaQ68bJl41uHqvjgFc9+2iF6ganEqpzGi6yfEHljCrNSwK/3GXqeYSyuUfWbW6fZkp9mx+dt+x3YDO88RjmMDtZB1+v84uDjiMBeeZ8dOwjiOLX6py+nPEIehbO7P9Txuz7zbFBtGwrL+ThMpLoozQHwn5s5H70kX63JUTqAAUf1dWpNZ1XkP7bLeh5+0w052n8mFpTOBc9PNGROKAe+gy+/4NKSqiUcJY6iwCwm46eA6WPxTCL/bdsbD+24DTUIh5WuX3Ev3qPfBsRvJcBn+FHzlFHKFNVsL96xDinUn3THFLLXJrjxyHoofffDK/EvL1b1xwvUyjyiA6/cHZ/qXf0o19RHg+skpi6/w1S8tW0/UXw6dAwAAAABJRU5ErkJggg==",
      },
      // mapStyle: [...],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff",
        },
      ],
    };
  },
  methods: {
    setCurrent: function (index) {
      // this.num = this.num + 1;
      this.num = !this.num;
      this.current = index;
      // this.$refs.gMap.initMap();
      setTimeout(() => {
        // if (index == 0) {
        //   this.locations = this.locations.slice(0, 1).concat();
        //   console.log(this.locations);
        // }
        if (this.categories[this.current].locations[0].lat) {
          this.$refs.gMap.map.setCenter({
            lat: this.categories[this.current].locations[0].lat,
            lng: this.categories[this.current].locations[0].lng,
          });
        }
        // });
        //
        // this.$refs.gMap.initMap();
        // this.$refs.gMap.initInfoWindow();
        this.$refs.gMap.initChildren();
        // this.$refs.gMap.try();
      }, 1);

      //
    },
  },
  components: { VueSlickCarousel, DetailCards },
};
</script>

<style>
.GMap__Wrapper {
  height: calc(100vh - 180px) !important;
}

.v-btn {
  white-space: normal;
  padding: 10px;
}

.btn-content {
  font-size: 0.6rem !important;
}
</style>
