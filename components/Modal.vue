<template>
  <Teleport to="body">
    <div :class="{ 'modal': !isModalClosed }" class="relative">
      <transition name="fade">
        <div v-show="!isModalClosed" class="backdrop" @click="toggleModal"></div>
      </transition>
      <transition @enter="modalAnimation[position].enter" @leave="modalAnimation[position].leave">
        <div v-show="modelValue" class="modal-container bg-base rounded shadow-lg" v-bind="$attrs"
          :class="[modalPosition[position], $attrs.class]">
          <header v-if="haveHeader" class="flex items-center justify-between p-6 shadow">
            <slot name="header"></slot>
            <icon name="ic:round-close" @click="toggleModal" class="ml-auto cursor-pointer hover:text-primary-500"></icon>
          </header>
          <main class="p-5 flex flex-col grow">
            <slot></slot>
          </main>
          <footer class="p-5">
            <slot name="footer"></slot>
          </footer>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { modalPosition } from '~/constants';

import { animate, spring } from "motion"

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<{ modelValue: boolean, haveHeader?: boolean, position?: keyof typeof modalPosition }>(), {
  modelValue: false,
  position: 'base',
  haveHeader: true
})

const toggleModal = () => {
  emit('update:modelValue', !props.modelValue)
}
const isModalClosed = ref(true)

const modalAnimation = {
  base: {
    enter: (element, done) => {
      isModalClosed.value = false
      animate(element, {
        opacity: [0.5, 1],
        y: ['30%', '0%']
      },
        { easing: spring({ stiffness: 700, damping: 60, mass: 3 }) }
      ).finished.then(done)
    },
    leave: (element, done) => {
      animate(element, {
        opacity: [1, 0],
        scale: 0.8,
      }).finished.then(() => {
        isModalClosed.value = true
        done()
      })
    }
  },
  bottom: {
    enter: (element, done) => {
      isModalClosed.value = false
      animate(element, {
        y: ['100%', '0%'],
      },
        { easing: spring({ stiffness: 700, damping: 60, mass: 2 }) }
      ).finished.then(done)
    },
    leave: (element, done) => {
      animate(element, {
        y: ['0%', '100%'],
      }).finished.then(() => {
        isModalClosed.value = true
        done()
      })
    }
  },
  right: {
    enter: (element, done) => {
      isModalClosed.value = false
      animate(element, {
        y: ['0%', '0%'],
        x: ['100%', '0%'],
      },
        { easing: spring({ stiffness: 700, damping: 60, mass: 2 }) }
      ).finished.then(done)
    },
    leave: (element, done) => {
      animate(element, {
        y: ['0%', '0%'],
        x: ['0%', '100%'],
      }).finished.then(() => {
        isModalClosed.value = true
        done()
      })
    }
  },
  left: {
    enter: (element, done) => {
      isModalClosed.value = false
      animate(element, {
        y: ['0%', '0%'],
        x: ['-100%', '0%'],
      },
        { easing: spring({ stiffness: 700, damping: 60, mass: 2 }) }
      ).finished.then(done)
    },
    leave: (element, done) => {
      animate(element, {
        y: ['0%', '0%'],
        x: ['0%', '-100%'],
      }).finished.then(() => {
        isModalClosed.value = true
        done()
      })
    }
  },
}
</script>
<script lang="ts">
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>
<style scoped>
.b-modal .modal-container {
  transform-origin: center;
}

.bottom-modal .modal-container {
  bottom: 0;
  transform-origin: top;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  will-change: transform;


}

.modal .backdrop {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.45);
}

.fade-y-bottom-enter-from,
.fade-y-bottom-leave-to {
  opacity: 0;
  bottom: 0 !important;
  transform: translate3d(-50%, 100%, 0) !important;
}


.fade-x-right-enter-active,
.fade-y-bottom-leave-active {
  transition: all 0.2s ease-in;
}

.fade-x-right-enter-from,
.fade-x-right-leave-to {
  opacity: 0;
  transform: translate3d(50%, 0%, 0) !important;
}

/*
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease-in;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 0%, 0) scale(0.8) !important;
}*/


.right-modal {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1%;
  bottom: 1%;
  right: 15px;
  border-radius: 15px;
}

.right-modal main {
  max-height: 100%;
  overflow: auto;
}


.left-modal {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1%;
  bottom: 1%;
  left: 15px;
  border-radius: 15px;
}

.left-modal main {
  height: 100%;
  overflow: auto;
}


.bottom-modal main {
  max-height: 70vh;
  overflow: auto;
  max-width: 100%;
}

.b-modal main {
  overflow: auto;
  max-height: 70vh;
  min-height: 400px;
}
</style>
