<template>
  <div class="tornado">
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tornado {
  overflow: hidden;

  div {
    height: 100%;
    padding: 7px;
    border-radius: 50%;
    border: 3px solid transparent;
    animation: spin 4s infinite linear;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    border-top-color: #f9f9f9;
  }

  50% {
    transform: rotate(180deg);
    border-top-color: #7c83fd;
  }

  100% {
    transform: rotate(360deg);
    border-top-color: #f9f9f9;
  }
}
</style>
