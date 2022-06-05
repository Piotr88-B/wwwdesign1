<template>
<footer>
  <div class="footer-content">
    <ul>
      <li class="footer-nav">
        <a href="https://pl.linkedin.com/">
          <img src="@/assent/logo_linkedin.png" alt="linked logo" />

        </a>

      </li>
      <li class="footer-nav">
        <a href="https://twitter.com/?lang=pl">
          <img src="@/assent/logo_twitter.png" alt="twitter logo" />
        </a>
      </li>
      <li class="footer-nav">
        <a href="facebook.com">
          <img src="@/assent/logo_facebook.png" alt="facebook logo" />
        </a>
      </li>
    </ul>
  </div>
</footer>
</template>

<script>

</script>

<style scoped>

footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  bottom: 0;
  background-color: #0A090D;
}

.footer-content {
  margin-left: auto;
  margin-right: auto;
  color: #C5A783;
}

.footer-nav {
  display: inline-block;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  list-style-type: none;

}

footer .imgClass {
  margin-top: 20px;
  margin-left: 35px;
}

.imgClass {
  width: 40px;
  height: 60px;
}

.footer-nav img {
  width: 40px;
  padding: 3px;
}

.footer-nav:hover {
  transform: scale(1.2);
  transition: 0.3s transform linear;
}
</style>
