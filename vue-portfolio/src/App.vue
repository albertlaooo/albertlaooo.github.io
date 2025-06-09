<template>
  <div id="header-container">
    <div id="logo-name-container">
      <h2>Albert</h2>
      <h1 class="dot">.</h1>
    </div>
  </div>

  <div id="landing-page">
    <!-- Your landing content goes here -->
  </div>
</template>

<style scoped>
#header-container {
  width: 100%;
  height: 50px;
  background-color: #20242D;
  display: flex;
  align-items: center; /* vertically center contents */
  padding-left: 20px; /* optional spacing from the left */
}

#logo-name-container {
  display: flex;
  align-items: baseline; /* align text like h2 and h1 better */
  gap: 4px; /* space between h2 and h1 */
}

.dot {
  color: #01EEFE;
  margin: 0;
  padding: 0;
}
</style>
