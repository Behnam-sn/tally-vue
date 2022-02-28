<script setup lang="ts">
import MenuBarButton from "@/components/Menu/MenuBarButton.vue";
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import ReviewIcon from "@/assets/icons/ReviewIcon.vue";
import LogIcon from "@/assets/icons/LogIcon.vue";
</script>

<template>
  <div id="menu">
    <MenuBarButton text="Home">
      <HomeIcon />
    </MenuBarButton>

    <MenuBarButton text="Review">
      <ReviewIcon />
    </MenuBarButton>

    <MenuBarButton text="Log">
      <LogIcon />
    </MenuBarButton>

    <MenuBarButton text="StreamNeo" id="neo-title"> NEO </MenuBarButton>
  </div>
</template>

<style lang="scss">
#menu {
  height: 94vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 3px solid #707070;

  .flex-container {
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 30px;
    cursor: pointer;

    div {
      font-family: "Open Sans SemiBold";
      font-size: 18px;
      padding-left: 8px;
      padding-right: 12px;
      color: #b3b3b3;
      transition: 0.3s;
    }

    &:hover {
      div {
        color: #ffffff;
      }

      svg {
        fill: #ffffff;
      }
    }
  }

  svg {
    width: 45px;
    height: 45px;
    fill: #b3b3b3;
    transition: 0.3s;
  }

  .active {
    color: #ffffff !important;

    div {
      color: #ffffff !important;
    }

    svg {
      fill: #ffffff !important;
    }
  }

  .not-allowed {
    cursor: not-allowed;
  }

  #neo-title {
    margin: 0 auto;
    font-size: 20px;
    color: #b3b3b3;
    transition: 0.3s;

    &:hover {
      color: #ffffff;
    }
  }
}
</style>
