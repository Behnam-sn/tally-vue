<template>
  <div class="circles">
    <div>
      <div id="middle">
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$lite: #ffffff;
$brand: #ffb830;

.circles {
  overflow: hidden;

  div {
    height: 100%;
    padding: 12px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 13px solid transparent;
    border-color: $lite $lite transparent transparent;
    animation: rotation 2s infinite linear;
    transform-origin: center center;
  }
}

#middle {
  border-color: transparent transparent $brand $brand;
  animation: rotationBack 0.5s infinite linear;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
