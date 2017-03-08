<template>
  <footer class='main-footer'>
    <div class='main-footer__copyright'>2007 - 2017 © Ihor Orlovskyi</div>
    <div class='main-footer__powered'>
      <a class='main-footer__powered-link' href='https://rooooster.com' target='_blank'>
      <img class='main-footer__powered-img' src="/assets/img/svg-icons/rooster-studio.svg">
        <span class='main-footer__powered-text'>Rooster<br>Studio</span>
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
.main-footer {
  background-color: #000;
  padding: 1.2em .8em;
  position: relative;
  z-index: 30;

  &__copyright {
    font-size: .8em;
    margin-bottom: .8em;
  }

  &__powered {
    text-align: center;

    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: color .25s ease;
    }

    &-img {
      max-width: 3em;
    }

    &-text {
      text-align: left;
      font-size: .6em;
      font-weight: 300;
      padding-left: .8em;
      text-transform: uppercase;
    }
  }
}
</style>
