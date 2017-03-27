<template>
  <footer class='footer-block'>
    <div class='footer-block__copyright'>2007 - 2017 © Ihor Orlovskyi</div>
    <div class='footer-block__powered'>
      <a class='footer-block__powered-link' href='https://rooooster.com' target='_blank'>
      <img class='footer-block__powered-img' src="/assets/img/svg-icons/rooster-studio.svg">
        <span class='footer-block__powered-text'>Rooster<br>Studio</span>
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-block {
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
