<template>
  <div class="waves">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
$speed: 1.6s;

.waves {
  width: 175px;
  height: 100px;
  display: flex;
}

span {
  background: #8a7bea;
  width: 7px;
  height: 10%;
  border-radius: 14px;
  margin-right: 5px;
  margin-top: 25%;

  &:last-child {
    margin-right: 0px;
  }

  &:nth-child(1) {
    animation: load $speed 1.4s infinite linear;
  }

  &:nth-child(2) {
    animation: load $speed 1.2s infinite linear;
  }

  &:nth-child(3) {
    animation: load $speed 1s infinite linear;
  }

  &:nth-child(4) {
    animation: load $speed 0.8s infinite linear;
  }

  &:nth-child(5) {
    animation: load $speed 0.6s infinite linear;
  }

  &:nth-child(6) {
    animation: load $speed 0.4s infinite linear;
  }

  &:nth-child(7) {
    animation: load $speed 0.2s infinite linear;
  }

  &:nth-child(8) {
    animation: load $speed 0s infinite linear;
  }

  &:nth-child(9) {
    animation: load $speed 0.2s infinite linear;
  }

  &:nth-child(10) {
    animation: load $speed 0.4s infinite linear;
  }

  &:nth-child(11) {
    animation: load $speed 0.6s infinite linear;
  }

  &:nth-child(12) {
    animation: load $speed 0.8s infinite linear;
  }

  &:nth-child(13) {
    animation: load $speed 1s infinite linear;
  }

  &:nth-child(14) {
    animation: load $speed 1.2s infinite linear;
  }

  &:nth-child(15) {
    animation: load $speed 1.4s infinite linear;
  }
}

@keyframes load {
  0% {
    background: #8a7bea;
    height: 10%;
    margin-top: 25%;
  }

  50% {
    background: #3c24db;
    height: 100%;
    margin-top: 0%;
  }

  100% {
    background: #8a7bea;
    height: 10%;
    margin-top: 25%;
  }
}
</style>
