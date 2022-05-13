<template>
  <v-card id="contact-id" elevation="0" class="tw-my-8">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-img
          contain
          :height="$vuetify.breakpoint.smAndUp ? 200 : 100"
          src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/kucin_6Hcvw4I3fk8.png"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <div class="md:tw-block tw-text-center md:tw-text-left">
          <div>
            <span class="tw-text-dark">Trying to hire me ?</span>
            <span class="tw-text-primary tw-font-medium"> Say hello at</span>
          </div>
          <a href="mailto:dimasroger89@gmail.com">
            <div
              class="tw-text-dark tw-text-xl tw-font-semibold tw-tracking-wide"
            >
              dimasroger89@gmail.com
            </div>
          </a>
          <div
            v-if="$vuetify.breakpoint.smAndUp"
            class="tw-my-6 tw-w-20 tw-h-0.5 tw-bg-dark-1 tw-bg-opacity-90"
          ></div>
          <div
            class="tw-text-dark tw-capitalize tw-tracking-widest tw-mt-4 md:tw-mt-0"
          >
            see you in the sky
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
