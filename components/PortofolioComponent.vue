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
                class="md:tw-col-span-1 tw-col-span-2 tw-flex tw-items-center tw-justify-center"
              >
                <div class="tw-block tw-text-center">
                  <p
                    class="tw-font-medium tw-text-dark tw-text-xl tw-tracking-wide tw-mb-2"
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
                      >Read more</v-btn
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
                    width="200"
                    height="220"
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
          title: 'Mercedez Benz - Expo',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(56, 180, 238, 0.25)',
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/car-ills_SF_nM2xtnA6.png',
        },
        {
          title: 'AP2li - Expo',
          year: 2020,
          as: 'Front End Developer',
          colorBg: 'rgba(238, 56, 220, 0.25)',
          thumbnail:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/bermuda-783_ShcA7DHD9.png',
        },
      ],
    }
  },
}
</script>

<style></style>
