<template>
  <v-card id="profile-id" elevation="0">
    <v-row>
      <v-col cols="6">
        <div class="tw-py-8">
          <div
            class="tw-font-light tw-text-dark-1 tw-tracking-wide tw-mb-2 tw-inline-flex tw-items-center"
          >
            <v-img
              height="18"
              width="18"
              contain
              src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/icons8-light-100__JqX_YhuW87.png"
            ></v-img>
            <span class="tw-ml-2"> Bogor, West Java</span>
          </div>
          <div class="tw-text-dark">
            <h4 class="tw-font-bold tw-text-4xl">Hello Guys!</h4>
            <h4 class="tw-font-bold tw-text-4xl tw-my-3">My name’s Roger</h4>
            <h4 class="tw-font-bold tw-text-4xl">I’m Fullstack Developer</h4>
          </div>
          <div class="tw-my-8 tw-w-32 tw-h-0.5 tw-bg-dark"></div>
          <div>
            <span
              class="tw-font-light tw-tracking-widest tw-text-xl tw-text-dark"
              >Welcome to My Portofolio website</span
            >
          </div>
          <div class="tw-mt-6">
            <v-btn
              depressed
              rounded
              class="focus:tw-outline-none tw-text-white tw-tracking-wide tw-normal-case tw-font-bold tw-px-6 tw-bg-gradient-to-r tw-from-primary-1 tw-to-primary"
              >Get CV</v-btn
            >
            <v-btn
              depressed
              rounded
              outlined
              color="dark"
              class="focus:tw-outline-none tw-tracking-wide tw-normal-case tw-px-6 tw-ml-2"
              >See my works</v-btn
            >
          </div>
          <div class="tw-mt-6 tw-inline-flex tw-items-center">
            <a
              v-for="(item, i) in socialMedia"
              :key="i"
              :href="item.href"
              target="_blank"
            >
              <v-img
                contain
                :height="item.height"
                :width="item.width"
                :src="item.src"
                class="tw-mr-4 tw-cursor-pointer"
              ></v-img>
            </a>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <v-img
          contain
          height="500"
          src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/cat-bird-2_v8-3i91K0.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        {
          text: 'instagram',
          height: 26,
          width: 26,
          href: 'https://www.instagram.com/rogersovichhh/?hl=id',
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/icons8-instagram_1_gejV_R2ZIEE3.png',
        },
        {
          text: 'email',
          height: 22,
          width: 22,
          href: 'mailto:dimasroger89@gmail.com',
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/icons8-mail_1_xNz44cbwv.png',
        },
        {
          text: 'linkedin',
          height: 22,
          width: 22,
          href: 'https://www.linkedin.com/in/dimas-roger-9b93491a1/',
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/icons8-linkedin_1_ZocfHgbrP.png',
        },
        {
          text: 'secret',
          height: 30,
          width: 30,
          href: 'https://github.com/rogersovich',
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/icons8-pentagram-devil-100_NxUDCr-QN.png',
        },
      ],
    }
  },
}
</script>

<style></style>
