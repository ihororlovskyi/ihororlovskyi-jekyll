<template>
  <div class="bg-fx">

    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>
    <div class="bg-fx__petal"></div>

    <img src="/assets/img/svg-icons/ihororlovskyi.svg">
    <h1>Ihor Orlovskyi</h1>
    <p>Front-end Developer</p>

  </div>
</template>

<style lang="scss">
@import '../node_modules/coriolan-ui/tools/variables';
@import '../node_modules/coriolan-ui/mixins/media';

.bg-fx {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5em .8em;
  box-sizing: border-box;
  text-transform: uppercase;
  z-index: 20;
  color: #c3c3c3;

  img {
    display: block;
    max-width: 50px;
    margin: 0 auto;
  }

  h1 {
    letter-spacing: 10px;
    font-size: 30px;
    margin: .3em 0;

    @include media(M) {
      font-size: 50px;
    }
  }

  p {
    letter-spacing: 2px;
    font-size: 12px;
    margin: .3em 0;

    @include media(M) {
      font-size: 18px;
    }
  }

  &__petal {
    transform: translate3d(-50%,-50%,0);
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0;
    margin-left: 0;
    transition: all 5.25s ease-in-out;

    &:after {
      content:'';
      font-size: 8px;
      width: 125px;
      height: 250px;
      background: radial-gradient(ellipse at 50% 0,
        rgba(155,89,182,0.5) 0%,
        rgba(164,232,58,0.0) 50%,
        rgba(26,188,156,0.5) 100%);
      border-radius: 50%;
      position: absolute;
      transition: all 5.25s ease-in-out;
      animation: turn 5.0s ease-in-out infinite;
    }
  }
}

@for $i from 1 through 12 {
  .bg-fx__petal:nth-child(#{$i}) {
    transform: rotate($i*30deg);
  }
}

@keyframes turn {
  100% {
    transform:rotate(1turn);
  }
}
</style>
