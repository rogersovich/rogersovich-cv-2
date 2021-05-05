<template>
  <v-card id="portofolio-id" elevation="0">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="tw-font-medium tw-text-dark tw-text-center tw-text-lg">
          My Work
        </h2>
      </v-col>
      <v-col v-for="(item, i) in portofolios" :key="i" cols="12" sm="10">
        <v-card
          min-height="200"
          flat
          class="tw-border-none"
          rounded="xl"
          :color="item.colorBg"
        >
          <v-card-text class="tw-px-10">
            <div
              class="tw-grid tw-grid-cols-2 tw-gap-2 tw-flex tw-items-center"
            >
              <div>
                <p
                  class="tw-font-medium tw-text-dark tw-text-3xl tw-tracking-wide tw-mb-2"
                >
                  {{ item.title }}
                </p>
                <span class="tw-text-dark tw-text-base tw-font-medium"
                  >{{ item.year }} - {{ item.as }}</span
                >
                <div class="tw-mt-10">
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
              <div>
                <v-img contain height="220" :src="item.thumbnail"></v-img>
              </div>
            </div>
          </v-card-text>
        </v-card>
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
