<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30">
    <rect x="0" y="0" width="4" height="15" fill="#333">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="10" y="0" width="4" height="15" fill="#333">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="20" y="0" width="4" height="15" fill="#333">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.4s"
        dur="0.7s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  width: 60px;
  height: 60px;

  rect {
    fill: #7868e6;
  }
}
</style>
