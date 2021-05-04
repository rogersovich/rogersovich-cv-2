<template>
  <v-app dark>
    <v-app-bar
      elevation="2"
      elevate-on-scroll
      color="white"
      app
      class="tw-px-16 tw-font-poppins"
    >
      <v-toolbar-title class="tw-flex tw-items-center">
        <v-img
          contain
          height="50"
          width="50"
          src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/ice-king_ew2NTh-sB.svg"
        ></v-img>
        <span class="tw-font-medium tw-text-primary tw-text-base tw-ml-2"
          >Rogersovich</span
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn-toggle v-model="nav" group mandatory color="primary">
        <v-btn
          v-for="(item, i) in listNav"
          :key="i"
          :ref="item.value"
          :value="item.value"
          class="focus:tw-outline-none tw-capitalize tw-tracking-wide tw-text-red-secondary-1"
          active-class="tw-text-primary tw-font-bold"
        >
          <span>
            {{ item.text }}
          </span>
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      nav: 'profile',
      listNav: [
        {
          text: 'profile',
          value: 'profile',
          anchor: '#profile-id',
        },
        {
          text: 'portofolio',
          value: 'portofolio',
          anchor: '#portofolio-id',
        },
        {
          text: 'skill',
          value: 'skill',
          anchor: '#skill-id',
        },
      ],
    }
  },
}
</script>

<style scoped>
::v-deep .v-btn:before {
  background-color: transparent;
}

::v-deep .v-btn-toggle--group > .v-btn.v-btn {
  margin: 4px 24px;
  font-weight: 400;
}
</style>
