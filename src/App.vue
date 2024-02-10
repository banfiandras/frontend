<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <nav class="navbar navbar-expand-lg bg-body-tertiary headline">
      <div class="container-fluid headline">
        <a class="navbar-brand" href="#">God and Prophet</a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">Faith point</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Hours</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Current day</a>
            </li>
          </ul>
          <span class="navbar-text">
            Profile data
          </span>
        </div>
      </div>
  </nav>

  
  <div>
    <router-view/>
  </div>
</template>