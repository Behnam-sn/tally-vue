<template>
  <div class="Balls"></div>
</template>

<style lang="scss" scoped>
.Balls {
  animation: rotate 1.3s infinite;
  height: 50px;
  width: 50px;

  &:before,
  &:after {
    content: "";
    border-radius: 50%;
    display: block;
    height: 20px;
    width: 20px;
  }

  &:before {
    animation: ball1 1.3s infinite;
    background-color: #cb2025;
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }

  &:after {
    animation: ball2 1.3s infinite;
    background-color: #00a096;
    box-shadow: 30px 0 0 #97bf0d;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1.3);
  }
  50% {
    transform: rotate(360deg) scale(1.6);
  }
  100% {
    transform: rotate(720deg) scale(1.3);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #f8b334;
  }
  50% {
    box-shadow: 0 0 0 #f8b334;
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #97bf0d;
  }
  50% {
    box-shadow: 0 0 0 #97bf0d;
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #97bf0d;
    margin-top: 0;
  }
}
</style>
