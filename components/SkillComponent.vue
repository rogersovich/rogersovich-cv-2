<template>
  <v-card id="skill-id" elevation="0" class="md:tw-my-8">
    <v-row justify="center">
      <v-col v-for="(item, i) in skills" :key="i" cols="11" sm="4">
        <v-card
          min-height="200"
          rounded="lg"
          elevation="0"
          class="tw-border-none tw-group hover:tw-bg-blue-500 tw-flex tw-items-center hover:tw-items-start tw-cursor-default tw-transition tw-duration-300 tw-ease-in-out"
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
              <div class="tw-flex tw-items-center">
                <span
                  class="tw-block tw-text-base md:tw-text-lg tw-font-bold tw-capitalize"
                  >language :
                </span>
                <span
                  class="tw-block tw-text-sm md:tw-text-base tw-font-normal tw-capitalize tw-ml-1"
                >
                  {{ item.title }}</span
                >
              </div>
              <div class="tw-flex tw-items-center">
                <span
                  class="tw-block tw-text-base md:tw-text-lg tw-font-bold tw-capitalize"
                  >Level :
                </span>
                <span
                  class="tw-block tw-text-sm md:tw-text-base tw-font-normal tw-capitalize tw-ml-1"
                >
                  {{ item.level }}</span
                >
              </div>
              <div class="tw-flex tw-items-center">
                <span
                  class="tw-block tw-text-base md:tw-text-lg tw-font-bold tw-capitalize"
                  >Time used :
                </span>
                <span
                  class="tw-block tw-text-sm md:tw-text-base tw-font-normal tw-capitalize tw-ml-1"
                >
                  {{ item.time_used }}</span
                >
              </div>
              <div
                v-if="Object.keys(item.projects).length > 0"
                class="tw-block"
              >
                <div class="tw-flex tw-items-center">
                  <span
                    class="tw-block tw-text-base md:tw-text-lg tw-font-bold tw-capitalize"
                    >Project :
                  </span>
                </div>
                <div class="tw-mt-2">
                  <template v-for="(value, v) in item.projects">
                    <v-chip
                      :key="v + 'project'"
                      small
                      dark
                      color="rgba(0, 0, 0, 0.2)"
                      class="tw-px-4 tw-mr-2 tw-mb-2 md:tw-mb-3 tw-capitalize"
                      >{{ value.title }}</v-chip
                    >
                  </template>
                </div>
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
      skills: [
        {
          title: 'laravel',
          level: 'advance',
          time_used: '2018-2021',
          projects: [
            {
              title: 'api rumahdotcom property',
            },
            {
              title: 'api ap2li expo',
            },
            {
              title: 'api mercedez benz expo',
            },
          ],
          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/laravel_KXiU8AnT2.png',
        },
        {
          title: 'vue',
          level: 'advance',
          time_used: '2020-2021',
          projects: [
            {
              title: 'backend admin rumahdotcom property',
            },
            {
              title: 'frontend mercedez benz expo',
            },
            {
              title: 'frontend wedding',
            },
          ],

          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/vueJs_lfUof3d4u.webp',
        },
        {
          title: 'nuxt',
          level: 'advance',
          time_used: '2020-2021',
          projects: [
            {
              title: 'frontend rumahdotcom property',
            },
            {
              title: 'frontend ap2li expo',
            },
            {
              title: 'frontend hyundai landing',
            },
            {
              title: 'pokemon app',
            },
          ],

          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/nuxt-removebg-preview_-ve-drOMI2J.png',
        },
        {
          title: 'figma',
          level: 'advance',
          time_used: '2020-2021',
          projects: [
            {
              title: 'mockup my cv',
            },
            {
              title: 'mockup pokemon app',
            },
            {
              title: 'mockup mhw app',
            },
          ],

          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/figma_VBzDWf2tU.webp',
        },
        {
          title: 'react',
          level: 'basic',
          time_used: '2021',
          projects: [
            {
              title: 'cv app',
            },
            {
              title: 'pokemon app',
            },
          ],

          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/icons8-react_3BJ8FTTrW.svg',
        },
        {
          title: 'mysql',
          level: 'advance',
          time_used: '2018-2021',
          projects: [
            {
              title: 'All project im using this',
            },
          ],

          src:
            'https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/mysql_5wm0x7sETCy.png',
        },
      ],
    }
  },
}
</script>

<style></style>
