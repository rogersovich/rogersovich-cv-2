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
                  <div class="tw-mt-6 tw-mb-5">
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
                  <div>
                    <div class="tw-flex tw-items-center">
                      <v-icon color="#2D3436" class="tw-text-2xl">
                        mdi-attachment
                      </v-icon>
                      <a
                        v-if="item.link !== ''"
                        :href="item.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="tw-underline tw-text-dark-1 tw-text-base tw-ml-2"
                      >
                        Lihat Attachment
                      </a>
                      <div v-else class="tw-text-dark-1 tw-text-base tw-ml-2">
                        Tidak ada Attachment
                      </div>
                    </div>
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
        <v-carousel
          :height="$vuetify.breakpoint.smAndUp ? 400 : 250"
          hide-delimiter-background
          hide-delimiters
        >
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
      :timeout="1000"
      top
      color="primary"
      right
    >
      <div class="tw-flex tw-items-center">
        <span class="tw-font-bold tw-text-white">Tidak ada foto</span>
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
          link: '',
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
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/ap2li-2_FabAX4iR-VH.jpeg',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/ap2li_KL8uC5Chk.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/bermuda-783_ShcA7DHD9.png',
        },
        {
          title: 'App Wikrama Cafe',
          year: 2019,
          as: 'Fullstack Developer',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Kasir_-_Home_zMMCpmFd_s5.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Kasir_-_Menu_y1Ka7w7aLe.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Kasir_-_Orders_l0VLmbYLaP1.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Kasir_-_Payment_60hziSOOc.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Kasir_-_Table_KjX9kAMUvL8U.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/cafe_7wNZtg8QLpI0.png',
        },
        // {
        //   title: 'App Warung Donto',
        //   year: 2019,
        //   as: 'School Assignment',
        //   colorBg: 'rgba(111, 30, 81, 0.25)',
        //   link: '',
        //   photos: [],
        //   thumbnail:
        //     'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/store_0BpVDDfLG.png',
        // },
        {
          title: 'Design App Pengaduan Masyarakat',
          year: 2019,
          as: 'UI Design',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Register_CI5IwZm7jaiF.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Home_Before_4AnTpIvV1.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Home_After_UxFW_uDdu.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Home_After___1_J8N2ivkhZ.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/report_lyhhvxuUo.png',
        },
        {
          title: 'App Pokemon in React',
          year: 2020,
          as: 'Desing my self',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-react_not92FYQZ1I.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-2_4rqeSKiOL.png',
        },
        {
          title: 'Pokedex Pokemon in Nuxt',
          year: 2020,
          as: 'Desing my self',
          colorBg: 'rgba(255, 159, 26, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-nuxt-1_ezdIJ14eBw.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-nuxt-2_Xj0dsV6TB7.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-nuxt-3_m4rycwgUu.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-1_z9uduDiRd.png',
        },
        {
          title: 'Mercedez Benz - Expo Api',
          year: 2020,
          as: 'Back End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          link: '',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/mercedez-1_1UlEmNJ1H.png',
        },
        {
          title: 'Anisaa Ayu Pratiwi',
          year: 2020,
          as: 'Desing my self',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          link:
            'https://www.figma.com/file/GuD7mtKRA1Y0mREvx6l1Be/Anisaa-Ayu-Pratiwi',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa-1_ymZ4Veat4K.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa-2_HcBQ2Ui0N.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa-3_rWf-IJ-xc.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anissa-4_wERB2I7eKH3.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa-5_dfqb-2etFMC.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa-6_OGrCBcPYIoG.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa-7_IAtqo8xXD.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa_aUGjzmcAiJy0.png',
        },
        {
          title: 'RPL Summer Vibes',
          year: 2019,
          as: 'Design for the School',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Screenshot__220__QDLHI0edWBKS.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Screenshot__221___uFqv_InoW.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Screenshot__223__QbkSNE6Yw.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Screenshot__224__s_tgSliSqm.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Screenshot__222__iV8bNOJb8O.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Screenshot__225__K1yIGkPEMyv.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Screenshot__227__jnkd0slzO.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Screenshot__226__BbdXRZhM-X.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/summer-vibes_QapO1bd6J.png',
        },
        {
          title: 'App Wedding Vconex',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/wedding1_ylu-irk_WA0.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/wedding2__2snmcpbP8.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/wedding3_Flt3UgtbB.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/wedding_1pHgZxiOKz.png',
        },
        {
          title: 'Design Landing Stone Age',
          year: 2019,
          as: 'UI Design',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Home_yPKPdC0UGH.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Creatures_-_2_Q9y5YvuGQ.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Creatures_-1_39R1y41M9.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Activity_-1_uf-g0WR3a.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Activity_-_2_BClSdHk9jt4.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Weapon_-_1_d6QeFTlpMm.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Weapon_-_2_XAIWSxJ3Ca.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/timeline_-_1_zn49RVwaR.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/timeline_-_2_OGRn3UCZP.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/ancient_xRTp2T5kf.png',
        },
        {
          title: 'Design Landing Creatures',
          year: 2019,
          as: 'Desing my self',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Chimeira___4__3jwhXlFV.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Chimeira_Story_st0gMj5Qr.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Chimeira_Skill_tfu7JZsOM.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Chimeira_diagram_i-PCB_gaCmE6.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Fairy_ca1y8sKAQ.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Medusa_gT69UXoKZ.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/Medusa_Skill_LHkQQ2Vh9Gp.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/creatures_DhmWaVrd8uE.png',
        },
        // {
        //   title: 'App Warung Santuy',
        //   year: 2019,
        //   as: 'School Assignment',
        //   colorBg: 'rgba(255, 159, 26, 0.25)',
        //   link: '',
        //   photos: [],
        //   thumbnail:
        //     'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/store_1__bZXJgFGHub.png',
        // },
        //
        {
          title: 'Rumahdotcom Front End',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/rumah-f-1_LctslQEDh.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/rumah-f-2_fCPHXH3yu.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/rumah-f-3_7x0ybseF3r.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/rumah_PcPcyYGKl.png',
        },
        {
          title: 'Rumahdotcom Back End',
          year: 2020,
          as: 'Back End Developer',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          link: '',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/house-api_uEuJgLewQ.png',
        },
        {
          title: 'Dashboard rumahdotcom',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/d-rumah-1_f75IP8jYn.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/d-rumah-2_7_CekboS4.png',
            },
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/d-rumah-3_gBphA4AYu.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/house-dashboard_MVp3QFrMB.png',
        },
        {
          title: 'Gallery expo frontend',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/rumah-galeri_7vzSVBVpQ.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/gallery_7Ft2PB2vWX.png',
        },
        {
          title: 'Gallery expo backend',
          year: 2020,
          as: 'Back End Developer',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          link: '',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/gallery-api_VEb-OOSGuq.png',
        },
        {
          title: 'TPM Group frontend',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          link: 'https://www.figma.com/file/J3EjJW2CJu43zPz4cnVdYa/TPM-Group',
          photos: [
            {
              src: require('@/assets/images/porto/tpm/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tpm/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tpm/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tpm/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tpm/5.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tpm/6.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tpm/7.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/tpm_EqTPtDUwys-n.png',
        },
        {
          title: 'TPM Group backend',
          year: 2020,
          as: 'Back End Developer',
          colorBg: 'rgba(255, 159, 26, 0.25)',
          link: '',
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
          link: '',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/ap2li-api_EtVd1svMEN.png',
        },
        {
          title: 'Vconex Profile Frontend',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          link:
            'https://www.figma.com/file/lI1Dzz7p3mVcgv65pvM7Ob/V-Conex-Website',
          photos: [
            {
              src: require('@/assets/images/porto/vconex/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/vconex/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/vconex/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/vconex/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/vconex/5.jpeg'),
            },
            {
              src: require('@/assets/images/porto/vconex/6.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/vconex-frontend_KTUCu_6Zx.png',
        },
        {
          title: 'Vconex Profile Backend',
          year: 2020,
          as: 'Backend End Developer',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          link: '',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/vconex_9_S9_xsKI.png',
        },
        {
          title: 'Toyota Register Frontend',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          link:
            'https://www.figma.com/file/sNVWSGXxC6ZFgbYRl8Ud0K/Toyota?node-id=1%3A2',
          photos: [
            {
              src: require('@/assets/images/porto/toyota/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/toyota/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/toyota/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/toyota/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/toyota/5.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/toyota_mHpeioXOXf.png',
        },
        // app sikoomar
        {
          title: 'App Sikoomar',
          year: 2021,
          as: 'Front End Developer',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          link: '',
          photos: [],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/sikoomar_MKloEojnR7-b.png',
        },
        // end
        {
          title: 'App Bossgame',
          year: 2020,
          as: 'Fron End Developer',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          link: '',
          photos: [
            {
              src:
                'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/bossgame_qlIrVdJWzQr.png',
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/bossgame_tlpf-aVo1.png',
        },
        // ()
        {
          title: 'Mockup Design Mobile Warung',
          year: 2021,
          as: 'Design my self',
          colorBg: 'rgba(255, 159, 26, 0.25)',
          link:
            'https://www.figma.com/file/q9D0Qdrh0eWMuPzH2ON2ZI/Mobile-Warung',
          photos: [
            {
              src: require('@/assets/images/porto/warung/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/warung/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/warung/3.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/car-ills_SF_nM2xtnA6.png',
        },
        {
          title: 'Mockup Design Monster Hunter',
          year: 2021,
          as: 'Design my self',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          link:
            'https://www.figma.com/file/eKZhpdznCACl1MlJjxzt5B/monster-hunter',
          photos: [
            {
              src: require('@/assets/images/porto/mhw/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/mhw/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/mhw/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/mhw/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/mhw/5.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/bermuda-783_ShcA7DHD9.png',
        },
        {
          title: 'Mockup Design Fairy Tale',
          year: 2021,
          as: 'Design my self',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          link:
            'https://www.figma.com/file/ysc5gEmrf4Jb1dGG3ypHHa/Fairy-tale?node-id=0%3A1',
          photos: [
            {
              src: require('@/assets/images/porto/fairyTale/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/fairyTale/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/fairyTale/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/fairyTale/4.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/cafe_7wNZtg8QLpI0.png',
        },
        {
          title: 'App Wedding Vconex 2',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          link: 'https://www.figma.com/file/0pYKSVSmSz2BtJ20fSe8FB/Wedding-1',
          photos: [
            {
              src: require('@/assets/images/porto/wedding2/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/wedding2/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/wedding2/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/wedding2/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/wedding2/5.jpeg'),
            },
            {
              src: require('@/assets/images/porto/wedding2/6.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/store_0BpVDDfLG.png',
        },
        {
          title: 'Sininis - Frontend',
          year: 2021,
          as: 'Front End Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          link: '',
          photos: [
            {
              src: require('@/assets/images/porto/sininisWeb/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisWeb/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisWeb/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisWeb/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisWeb/5.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisWeb/6.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisWeb/7.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/report_lyhhvxuUo.png',
        },
        {
          title: 'Sininis Buzzer',
          year: 2021,
          as: 'Front End Developer',
          colorBg: 'rgba(75, 75, 75, 0.25)',
          link: '',
          photos: [
            {
              src: require('@/assets/images/porto/sininisBuzzer/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisBuzzer/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisBuzzer/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisBuzzer/4.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-2_4rqeSKiOL.png',
        },
        {
          title: 'Sininis Board',
          year: 2021,
          as: 'Fron End Developer',
          colorBg: 'rgba(255, 242, 0, 0.25)',
          link: '',
          photos: [
            {
              src: require('@/assets/images/porto/sininisBoard/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisBoard/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisBoard/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisBoard/4.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/pokemon-1_z9uduDiRd.png',
        },
        // ()
        {
          title: 'Sininis Caption',
          year: 2021,
          as: 'Fron End Developer',
          colorBg: 'rgba(255, 159, 26, 0.25)',
          link: '',
          photos: [
            {
              src: require('@/assets/images/porto/sininisCaption/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisCaption/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisCaption/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisCaption/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisCaption/5.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/mercedez-1_1UlEmNJ1H.png',
        },
        {
          title: 'Sininis Posting',
          year: 2021,
          as: 'Fron End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          link: '',
          photos: [
            {
              src: require('@/assets/images/porto/sininisPosting/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisPosting/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisPosting/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisPosting/4.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/anisaa_aUGjzmcAiJy0.png',
        },
        {
          title: 'Sininis Coin',
          year: 2021,
          as: 'Fron End Developer',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          link: '',
          photos: [
            {
              src: require('@/assets/images/porto/sininisCoin/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sininisCoin/2.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/summer-vibes_QapO1bd6J.png',
        },
        {
          title: 'Tribe Sininis',
          year: 2021,
          as: 'Front End Developer',
          colorBg: 'rgba(32, 191, 107, 0.25)',
          link: '',
          photos: [
            {
              src: require('@/assets/images/porto/tribeSininis/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/5.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/6.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/7.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/8.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/9.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/10.jpeg'),
            },
            {
              src: require('@/assets/images/porto/tribeSininis/11.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/wedding_1pHgZxiOKz.png',
        },
        {
          title: 'Sininis - Sikoomar',
          year: 2021,
          as: 'Front End Developer',
          colorBg: 'rgba(111, 30, 81, 0.25)',
          link: '',
          photos: [
            {
              src: require('@/assets/images/porto/sikoomar/1.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/2.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/3.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/4.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/5.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/6.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/7.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/8.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/9.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/10.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/11.jpeg'),
            },
            {
              src: require('@/assets/images/porto/sikoomar/12.jpeg'),
            },
          ],
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/ancient_xRTp2T5kf.png',
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
