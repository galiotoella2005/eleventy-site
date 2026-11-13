---
title: Filterable Gallery
order: 6
---

<is-land on:visible>

<div id="gallery" v-scope="{ active: 'all' }">
  <div class="filters">
    <button @click="active = 'all'" :class="{ on: active === 'all' }" :aria-pressed="active === 'all'">All</button>
    <button @click="active = 'sketches'" :class="{ on: active === 'sketches' }" :aria-pressed="active === 'sketches'">Sketches</button>
    <button @click="active = 'photos'" :class="{ on: active === 'photos' }" :aria-pressed="active === 'photos'">Photos</button>
    <button @click="active = 'type'" :class="{ on: active === 'type' }" :aria-pressed="active === 'type'">Type</button>
  </div>
  <section class="topic" v-show="active === 'all' || active === 'sketches'">
    <h3>Sketches</h3>
    <img src="images/sketches/sketchofvr.jpeg" alt="Sketch of VR headset">
    <img src="images/sketches/sketchvrman.jpeg" alt="Sketch of man wearing vr heaset">
  </section>
  <section class="topic" v-show="active === 'all' || active === 'photos'">
    <h3>Photos</h3>
    <img src="images/photos/vrheadset_girl.jpg" alt="Girl wearing a VR headset with a colorful background">
    <img src="images/photos/vrheadset_pink.jpeg" alt="Vr headset with colorful background">
  </section>
  <section class="topic" v-show="active === 'all' || active === 'type'">
    <h3>Type</h3>
    <img src="images/type/smartwatch.jpeg" alt="$ wrists with smartwatches on all">
    <img src="images/type/smartwatch2.jpeg" alt="Smartwatch with a colorful background">
  </section>
</div>

  <template data-island>
    <script type="module">
      import { createApp } from './js/petite-vue.js'
      createApp().mount('#gallery')
    </script>
  </template>

</is-land>