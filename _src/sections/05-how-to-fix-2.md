---
title: How to change your headset privacy settings
order: 5
---

### For the Quest 2 Headsets
Locate privacy settings
<a href="https://roadtovr.com/oculus-quest-2-privacy-facebook-data-collection-settings/">Follow this guide</a>

<figure>
<img src="images/quest2.jpeg" alt="Picture of Quest 2 headset and hand controls">
<figcaption>Photo by Amazon.com, <a href="https://m.media-amazon.com/images/I/51h6QZYt-nL._AC_UF894,1000_QL80_.jpg">Source</a></figcaption>
</figure>
<is-land on:visible>

  <div id="counter" v-scope="{ count: 0 }">
    <p>Count: <span v-text="count"></span></p>
    <button @click="count++">Click me if you read all the way to here!</button>
  </div>

  <template data-island>
    <script type="module">
      import { createApp } from './js/petite-vue.js'
      createApp().mount('#counter')
    </script>
  </template>

</is-land>