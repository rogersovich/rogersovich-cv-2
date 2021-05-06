<template>
  <v-card id="portofolio-id" elevation="0" class="tw-my-8">
    <v-row justify="center" align="center">
      <v-col v-for="(item, i) in portofolios" :key="i" cols="11" sm="10">
        <v-card
          min-height="200"
          flat
          class="tw-border-none"
          rounded="xl"
          :color="item.colorBg"
        >
          <v-card-text class="tw-px-10">
            <div class="tw-grid tw-grid-cols-2 tw-gap-2">
              <div
                v-if="$vuetify.breakpoint.xsOnly"
                class="md:tw-col-span-1 tw-col-span-2 tw-flex tw-justify-center"
              >
                <div class="tw-block">
                  <v-img
                    contain
                    width="160"
                    height="160"
                    :src="item.thumbnail"
                  ></v-img>
                </div>
              </div>

              <div
                class="md:tw-col-span-1 tw-col-span-2 tw-flex tw-items-center md:tw-justify-start tw-justify-center"
              >
                <div class="tw-block md:tw-text-left tw-text-center">
                  <p
                    class="tw-font-medium tw-text-dark md:tw-text-3xl tw-text-xl tw-tracking-wide tw-mb-2"
                  >
                    {{ item.title }}
                  </p>
                  <span class="tw-text-dark tw-text-base tw-font-medium"
                    >{{ item.year }} - {{ item.as }}</span
                  >
                  <div class="tw-mt-6 tw-mb-4">
                    <v-btn
                      outlined
                      rounded
                      depressed
                      color="secondary"
                      class="focus:tw-outline-none tw-tracking-tight tw-capitalize"
                      @click="handleDetailPhoto(item.photos)"
                      >See Photo</v-btn
                    >
                  </div>
                </div>
              </div>
              <div
                v-if="$vuetify.breakpoint.smAndUp"
                class="tw-col-span-1 tw-flex tw-justify-center"
              >
                <div class="tw-block">
                  <v-img
                    contain
                    width="250"
                    height="250"
                    :src="item.thumbnail"
                  ></v-img>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="detailPhoto" max-width="700">
      <v-card class="tw-border-none">
        <v-carousel hide-delimiter-background>
          <v-carousel-item
            v-for="(item, i) in selectedPhotos"
            :key="i"
            contain
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbarWarning"
      :timeout="2000"
      top
      color="#fd9644"
      right
    >
      <div class="tw-flex tw-items-center">
        <span class="tw-font-bold tw-text-white">Still Under Development</span>
        <v-spacer></v-spacer>
        <v-btn
          class="focus:tw-outline-none"
          icon
          @click="snackbarWarning = false"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </div>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      detailPhoto: false,
      snackbarWarning: false,
      selectedPhotos: [],
      portofolios: [
        {
          title: 'Mercedez Benz - Expo',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/mercedez-1_1__Mx6yPzmbI.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/mercedez-2_XYfES_7SE.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/mercedez-3_O6KQE3EvU31.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/car-ills_SF_nM2xtnA6.png',
        },
        {
          title: 'AP2li - Expo',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/bermuda-783_ShcA7DHD9.png',
        },
        {
          title: 'App Wikrama Cafe',
          year: 2019,
          as: 'Fullstack Developer',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/cafe_7wNZtg8QLpI0.png',
        },
        {
          title: 'App Warung Donto',
          year: 2019,
          as: 'Fullstack Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/store_0BpVDDfLG.png',
        },
        {
          title: 'Design app pengaduan masyarakat',
          year: 2019,
          as: 'UI Design',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/report_lyhhvxuUo.png',
        },
        {
          title: 'app pokemon in react',
          year: 2020,
          as: 'Desing my self',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-2_4rqeSKiOL.png',
        },
        {
          title: 'pokedex pokemon in nuxt',
          year: 2020,
          as: 'Desing my self',
          colorBg: 'rgba(255, 159, 26, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-1_z9uduDiRd.png',
        },
        {
          title: 'Mercedez Benz - Expo Api',
          year: 2020,
          as: 'Back End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/mercedez-1_1UlEmNJ1H.png',
        },
        {
          title: 'anisaa ayu pratiwi',
          year: 2020,
          as: 'Desing my self',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa_aUGjzmcAiJy0.png',
        },
        {
          title: 'RPL Summer Vibes',
          year: 2019,
          as: 'Design for the School',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/summer-vibes_QapO1bd6J.png',
        },
        {
          title: 'App Wedding Vconex',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/wedding_1pHgZxiOKz.png',
        },
        {
          title: 'Design Landing Stone Age',
          year: 2019,
          as: 'UI Design',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/ancient_xRTp2T5kf.png',
        },
        {
          title: 'Design Landing Creatures',
          year: 2019,
          as: 'Desing my self',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/creatures_DhmWaVrd8uE.png',
        },
        {
          title: 'App Warung Santuy',
          year: 2019,
          as: 'School Assignment',
          colorBg: 'rgba(255, 159, 26, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/store_1__bZXJgFGHub.png',
        },
        //
        {
          title: 'Rumahdotcom Front End',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/rumah_PcPcyYGKl.png',
        },
        {
          title: 'Rumahdotcom Back End',
          year: 2020,
          as: 'Back End Developer',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/house-api_uEuJgLewQ.png',
        },
        {
          title: 'Dashboard rumahdotcom',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/house-dashboard_MVp3QFrMB.png',
        },
        {
          title: 'Gallery expo frontend',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/gallery_7Ft2PB2vWX.png',
        },
        {
          title: 'Gallery expo backend',
          year: 2020,
          as: 'Back End Developer',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/gallery-api_VEb-OOSGuq.png',
        },
        {
          title: 'TPM Group frontend',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/tpm_EqTPtDUwys-n.png',
        },
        {
          title: 'TPM Group backend',
          year: 2020,
          as: 'Back End Developer',
          colorBg: 'rgba(255, 159, 26, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/tpm-api_w6aBjOsKb.png',
        },
        //
        {
          title: 'AP2li - Expo Api',
          year: 2020,
          as: 'Backend End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/ap2li-api_EtVd1svMEN.png',
        },
        {
          title: 'Vconex Profile Frontend',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/vconex-frontend_KTUCu_6Zx.png',
        },
        {
          title: 'Vconex Profile Backend',
          year: 2020,
          as: 'Backend End Developer',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/vconex_9_S9_xsKI.png',
        },
        {
          title: 'Toyota Register Frontend',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/toyota_mHpeioXOXf.png',
        },
        {
          title: 'App Sikoomar',
          year: 2021,
          as: 'Front End Developer',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/sikoomar_MKloEojnR7-b.png',
        },
        {
          title: 'App Bossgame',
          year: 2020,
          as: 'Fron End Developer',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-2_4rqeSKiOL.png',
        },
        {
          title: 'pokedex pokemon in nuxt',
          year: 2020,
          as: 'Desing my self',
          colorBg: 'rgba(255, 159, 26, 0.25)',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/bossgame_tlpf-aVo1.png',
        },
      ],
    }
  },
  methods: {
    handleDetailPhoto(params) {
      if (params.length > 0) {
        this.selectedPhotos = params
        this.detailPhoto = true
      } else {
        this.snackbarWarning = true
      }
    },
  },
}
</script>

<style></style>
