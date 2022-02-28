<template>
  <div class="rainbow">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
    <div class="bar5"></div>
    <div class="bar6"></div>
  </div>
</template>

<style lang="scss" scoped>
$duration: 1.3s;

.rainbow {
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 5px;
    width: 11px;
    margin-left: 5px;
    animation: delay $duration infinite ease-in-out;
  }

  .bar1 {
    background-color: #754fa0;
  }

  .bar2 {
    background-color: #09b7bf;
    animation-delay: -($duration - 0.1);
  }

  .bar3 {
    background-color: #90d36b;
    animation-delay: -($duration - 0.2);
  }

  .bar4 {
    background-color: #f2d40d;
    animation-delay: -($duration - 0.3);
  }

  .bar5 {
    background-color: #fcb12b;
    animation-delay: -($duration - 0.4);
  }

  .bar6 {
    background-color: #ed1b72;
    animation-delay: -($duration - 0.5);
  }
}

@keyframes delay {
  0%,
  40%,
  100% {
    transform: scaleY(1);
  }
  20% {
    transform: scaleY(13);
  }
}
</style>
