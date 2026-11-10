---
title: Three-D
layout: base.njk
permalink: three-d.html
---
<h1>My Three.js Scene</h1>

<p>Explore my interactive 3D flamingo model!</p>

<is-land on:visible>
  <template data-island>
    <div id="scene-container"></div>
    <script type="module" src="./js/threeScene.js"></script>
  </template>
</is-land>