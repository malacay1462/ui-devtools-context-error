<template>
  <div>
    Demo Text (component - style on parent): {{ count }}

    <span class="text-material-deepPurple-base text-xs">Inline Style</span>
  </div>
</template>

<script>
export default {
  name: "App",

  props: {
    count: {
      type: Number
    }
  },

  data: () => ({
    //
  })
};
</script>

