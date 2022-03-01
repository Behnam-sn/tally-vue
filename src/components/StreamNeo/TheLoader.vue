<template>
  <div id="loader-container">
    <div id="loader"></div>
  </div>
</template>

<style lang="scss">
#stream-neo {
  #loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  #loader {
    border: 14px solid #f3f3f3;
    border-radius: 50%;
    border-top: 14px solid #555555;
    width: 120px;
    height: 120px;
    animation: spin 1.3s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
