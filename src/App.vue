<template>
  <v-app>
    <v-main class="bg-gray-100 w-full h-full dark">
      <div class="flex justify-center items-center mt-5">
        <div class="shadow rounded w-50% p-5 bg-white text-material-grey-base">
          <div>
            <div class="text-material-brown-lighten-3">Erin Lindford</div>
            <div class="text-black">Product Engineer</div>
            <div>erin.landford@acme.com</div>
            <div>(555) 765-4321</div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div class="shadow w-50% mt-4 rounded bg-white  p-5">
          Demo with mixed classes:
          <div class="bg-gray-400" :class="{ 'pl-2': usePadding }">
            Demo Text (change this div)
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div class="shadow w-50% mt-4 rounded bg-white  p-5">
          Demo with dark mode support:
          <div class="bg-gray-400 dark:bg-gray-900 dark:text-white">
            Demo Text (change this div)
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div class="shadow w-50% mt-4 rounded bg-white  p-5">
          Demo ul with foreach & component - Style on li:
          <ul class="list-disc text-sm mb-0" :class="{ 'pl-2': usePadding }">
            <li
              v-for="count in maxCount"
              :key="count"
              class="text-material-red-lighten-1"
            >
              <demo-text :count="count" />
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div class="shadow w-50% mt-4 rounded bg-white p-5">
          Demo ul with foreach & component - Style on component:
          <ul class="list-disc text-sm mb-0" :class="{ 'pl-2': usePadding }">
            <li v-for="count in maxCount" :key="count">
              <demo-text
                class="text-material-purple-lighten-1"
                :count="count"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div class="shadow w-50% mt-4 rounded bg-white p-5 mb-5">
          Demo ul with foreach & component - Style on component (condition):
          <ul class="list-disc text-sm mb-0" :class="{ 'pl-2': usePadding }">
            <li v-for="count in maxCount" :key="count">
              <demo-text
                :class="{ 'text-material-purple-lighten-1': otherColor }"
                :count="count"
              />
            </li>
          </ul>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import DemoText from "./components/DemoText.vue";

export default {
  name: "App",

  components: {
    DemoText
  },

  data: () => ({
    maxCount: 7,
    usePadding: true,
    otherColor: true
  })
};
</script>
