<template>
  <footer class="footer">
    <div class='footer__copyright'>2007 - 2017 © Ihor Orlovskyi</div>
    <div class='footer__rooster'>
      <a href='https://rooooster.com' class='footer__rooster-link' target='_blank'>
      <img class='footer__rooster-img' src="/assets/img/svg-icons/rooster-studio.svg">
        <span class='footer__rooster-text'>Rooster<br>Studio</span>
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: rgba(#000,.5);
  padding: 2em .8em;
  text-transform: uppercase;
  position: relative;
  z-index: 30;

  &__copyright {
    font-size: .8em;
    margin-bottom: 1em;
  }

  &__rooster {
    text-align: center;

    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: color .25s ease;
    }

    &-img {
      max-width: 3.2em;
    }

    &-text {
      text-align: left;
      font-size: .6em;
      font-weight: 300;
      padding-left: .8em;
    }
  }
}
</style>
