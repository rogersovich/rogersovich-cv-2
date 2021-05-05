<template>
  <v-app dark>
    <v-app-bar
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
          class="focus:tw-outline-none tw-capitalize tw-px-6 tw-tracking-wide tw-text-secondary-1"
          active-class="tw-text-primary tw-font-bold"
          @click="handleGoTo(item.value)"
        >
          <span>
            {{ item.text }}
          </span>
        </v-btn>
      </v-btn-toggle>
      <v-btn
        depressed
        class="focus:tw-outline-none tw-text-white tw-capitalize tw-tracking-wide tw-ml-2 tw-bg-gradient-to-r tw-from-primary-1 tw-to-primary"
        @click="handleHireGoTo({ anchor: '#contact-id' })"
        >Hire me</v-btn
      >
    </v-app-bar>
    <v-main v-scroll="handleScroll">
      <v-container class="tw-my-8">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer color="white">
      <v-col class="text-center tw-font-poppins" cols="12">
        <div class="tw-inline-flex tw-items-center">
          <v-img
            contain
            height="35"
            width="35"
            src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/house-stark_5BAFaqtUD.svg"
          ></v-img>
          <span class="tw-text-dark tw-mx-4">© 2021 design by rogersovich</span>
          <v-img
            contain
            height="35"
            width="35"
            style="transform: scaleX(-1)"
            src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/targaryen-house_Iwk_7YWj3NM.svg"
          ></v-img>
        </div>
      </v-col>
    </v-footer>
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
  methods: {
    handleGoTo(params) {
      const check = params.split(/\W+/).length
      let scrollId = ''
      if (check === 1) {
        const word = params.toLowerCase()
        scrollId = '#' + word + '-id'
      } else {
        const word = params.split(' ').join('-').toLowerCase()
        scrollId = '#' + word + '-id'
      }
      this.$vuetify.goTo(scrollId, {
        duration: 500,
        offset: 0,
      })
    },
    handleScroll() {
      this.$vuetify.breakpoint.xsOnly ? this.doNothing() : this.processScroll()
    },
    processScroll() {
      console.log(window.scrollY)
      // profile
      if (window.scrollY < 400) {
        const check = this.nav === 'profile'
        if (!check) {
          this.nav = 'profile'
        }
      }
      // portofolio
      else if (window.scrollY > 400 && window.scrollY < 1100) {
        const check = this.nav === 'portofolio'
        if (!check) {
          this.nav = 'portofolio'
        }
      } else if (window.scrollY > 1100) {
        const check = this.nav === 'skill'
        if (!check) {
          this.nav = 'skill'
        }
      }
    },
    doNothing() {
      return true
    },
    handleHireGoTo(params) {
      this.$vuetify.goTo(params.anchor, {
        duration: 500,
        offset: 0,
      })
    },
  },
}
</script>

<style scoped>
::v-deep .v-btn:before {
  background-color: transparent;
}

::v-deep .v-btn-toggle--group > .v-btn.v-btn {
  margin: 4px 16px;
  font-weight: 400;
}
</style>
