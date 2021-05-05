<template>
  <v-card id="skill-id" elevation="0" class="tw-my-8">
    <v-row justify="center">
      <v-col v-for="(item, i) in skills" :key="i" cols="6" sm="4">
        <v-card
          height="200"
          max-height="200"
          rounded="lg"
          elevation="0"
          class="tw-border-none tw-group hover:tw-bg-primary tw-flex tw-items-center hover:tw-items-start tw-cursor-default"
        >
          <v-card-text class="tw-flex tw-items-center tw-p-4">
            <v-img
              contain
              width="100"
              height="100"
              class="group-hover:tw-hidden"
              :src="item.src"
            ></v-img>
            <div class="group-hover:tw-block tw-hidden tw-text-white">
              <span
                class="tw-block tw-text-lg tw-font-medium tw-capitalize tw-mb-2"
                >{{ item.title }}</span
              >
              <span class="tw-text-sm">{{ item.text }}</span>
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
      skills: [
        {
          title: 'laravel',
          text: `Laravel adalah kerangka kerja aplikasi web berbasis PHP yang sumber terbuka, menggunakan konsep Model-View-Controller.`,
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/laravel_KXiU8AnT2.png',
        },
        {
          title: 'vue',
          text: `Vue.js adalah kerangka kerja JavaScript yang bersifat progresif, bersumber terbuka untuk membangun antarmuka pengguna.`,
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/vueJs_lfUof3d4u.webp',
        },
        {
          title: 'nuxt',
          text: `Nuxt.js adalah kerangka kerja aplikasi web yang bebas dan sumber terbuka berketergantungan pada Vue.js, Node.js, Webpack, dan Babel.js.`,
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/nuxt-removebg-preview_-ve-drOMI2J.png',
        },
        {
          title: 'figma',
          text: `Figma adalah editor grafik vektor dan alat pembuatan prototipe yang berbasis web, dengan fitur offline tambahan yang diaktifkan oleh aplikasi desktop untuk macOS dan Windows.`,
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/figma_VBzDWf2tU.webp',
        },
        {
          title: 'react',
          text: `React adalah pustaka JavaScript open-source, front end untuk membangun antarmuka pengguna atau komponen UI.`,
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/icons8-react_3BJ8FTTrW.svg',
        },
        {
          title: 'mysql',
          text: `MySQL adalah sebuah perangkat lunak sistem manajemen basis data SQL atau DBMS yang multialur, multipengguna, dengan sekitar 6 juta instalasi di seluruh dunia.`,
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/mysql_5wm0x7sETCy.png',
        },
      ],
    }
  },
}
</script>

<style></style>
