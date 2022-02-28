<template>
  <div class="cat">
    <div class="cat-body"></div>
    <div class="cat-body"></div>
    <div class="cat-tail"></div>
    <div class="cat-head"></div>
  </div>
</template>

<style lang="scss" scoped>
@mixin fill-full($dir: "full", $type: absolute) {
  position: $type;
  @if $dir != "bottom" {
    top: 0;
  }
  @if $dir != "right" {
    left: 0;
  }
  @if $dir != "left" {
    right: 0;
  }
  @if $dir != "top" {
    bottom: 0;
  }
}

@keyframes rotating {
  from {
    transform: rotate(720deg);
  }
  to {
    transform: none;
  }
}

.cat {
  position: relative;
  width: 100%;
  max-width: 17em;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}

%cat-img {
  @include fill-full;
  animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.6) infinite;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-image: url("@/assets/img/cat.png");
  }
}

.cat-head {
  @extend %cat-img;

  &::before {
    top: 0;
    right: 0;
    background-position: 100% 0%;
    transform-origin: 0% 100%;
    transform: rotate(90deg);
  }
}

.cat-tail {
  @extend %cat-img;
  animation-delay: 0.2s;

  &::before {
    left: 0;
    bottom: 0;
    background-position: 0% 100%;
    transform-origin: 100% 0%;
    transform: rotate(-30deg);
  }
}

.cat-body {
  @extend %cat-img;
  animation-delay: 0.1s;

  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  &::before {
    right: 0;
    bottom: 0;
    background-position: 100% 100%;
    transform-origin: 0% 0%;
  }
}
</style>
