<template>
  <v-card id="portofolio-id" elevation="0" class="tw-my-8">
    <v-row justify="center" align="center">
      <v-col cols="11" md="12">
        <h2
          class="tw-font-medium tw-text-dark tw-text-center tw-text-xl md:tw-text-lg"
        >
          My Work
          <div class="tw-items-center tw-justify-center tw-flex">
            <div class="tw-my-2 tw-w-8 tw-h-0.5 tw-bg-dark"></div>
          </div>
        </h2>
      </v-col>
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
                      :to="{ name: 'portofolio' }"
                      color="secondary"
                      class="focus:tw-outline-none tw-tracking-tight tw-capitalize"
                      >Read more</v-btn
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
      <v-col cols="12">
        <div class="tw-text-center">
          <v-btn
            depressed
            rounded
            dark
            :to="{ name: 'portofolio' }"
            outlined
            color="dark"
            class="focus:tw-outline-none tw-capitalize tw-tracking-normal tw-px-4"
            >See more</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      portofolios: [
        {
          title: 'Tribe Sininis',
          year: 2021,
          as: 'Front End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
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
          title: 'Sininis - Frontend',
          year: 2021,
          as: 'Front End Developer',
          colorBg: 'rgba(238, 56, 220, 0.25)',
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
      ],
    }
  },
}
</script>

<style></style>
