const mynavbar =
 `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">MyNavbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="menu.html">Home</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="szamlalo.html">Counter <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="haromszog.html">Triangle</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="index.html">Toggle</a>
    </li>
  </ul>
</div>
</nav>`
document.querySelector('header').insertAdjacentHTML('beforebegin',mynavbar)

