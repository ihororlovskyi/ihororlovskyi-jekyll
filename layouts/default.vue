<template>
  <div class="flex-sticky">
    <div class="flex-sticky__content">
      <BgFx/>
      <Header/>
      <nuxt/>
    </div>
    <div class="flex-sticky__footer">
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=cyrillic');
@import '../node_modules/normalize.css/normalize.css';
$text-color: #ccc;
$link-color: darken($text-color, 15%);
$link-color-hover: lighten($link-color, 30%);

body {
  // font-family: 'Open Sans', sans-serif;
  font: 400 14px/1.3 "Lucida Grande","Tahoma","Verdana","Arial",sans-serif,"Roboto",Helvetica,Arial,sans-serif;
  text-align: center;
  background-color: #111;
  font-size: 16px;
  color: $text-color;
}

a {
    color: $link-color;
    text-decoration: none;
    outline: 0;

    &:hover,
    &:focus {
        color: $link-color-hover;
    }
}

img {
  max-width: 100%;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}

.flex-sticky {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
  }

  &__footer {
  }
}

// selection color
$selection-color: #8e44ad;

::selection {
  background: $selection-color;
}

::-moz-selection {
  background: $selection-color;
}

img::selection {
  background: transparent;
}

img::-moz-selection {
  background: transparent;
}

body {
  -webkit-tap-highlight-color: $selection-color;
}
</style>

<script>
import BgFx from '~components/BgFx.vue'
import Header from '~components/Header.vue'
import Footer from '~components/Footer.vue'
// import VueFire from 'vuefire'

// Vue.use(VueFire)

// var config = {
//   apiKey: "AIzaSyCWdqDWhbNmtjYarGlggOEh-0_466o3kyQ",
//   authDomain: "ihororlovskyi-938b4.firebaseapp.com",
//   databaseURL: "https://ihororlovskyi-938b4.firebaseio.com",
//   storageBucket: "ihororlovskyi-938b4.appspot.com",
//   messagingSenderId: "132218681986"
// }
// firebase.initializeApp(config)

export default {
  components: {
    BgFx,
    Header,
    Footer
  }
}
</script>

<!-- <script src="https://www.gstatic.com/firebasejs/3.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWdqDWhbNmtjYarGlggOEh-0_466o3kyQ",
    authDomain: "ihororlovskyi-938b4.firebaseapp.com",
    databaseURL: "https://ihororlovskyi-938b4.firebaseio.com",
    storageBucket: "ihororlovskyi-938b4.appspot.com",
    messagingSenderId: "132218681986"
  };
  firebase.initializeApp(config);
</script>
 -->
