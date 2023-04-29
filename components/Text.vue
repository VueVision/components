<template>
    <div class="relative" :class="[{ 'pt-4': label }, containerClass]">
      <slot name="append-icon"></slot>
      <input
        :class="[{ filled: (modelValue || modelValue === 0) || labelFixed || placeholder},shadow]"
        class="input border border-gray-500 border-1 bg-base appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-primary-600 focus:outline-none active:outline-none active:border-primary-600"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :disabled="disabled"
        v-bind="$attrs"
        :type="inputType"
        v-model="value"
        @blur="$emit('leaveInput')"
        @input="$emit('contentChanged')"
      />
      <label
        v-if="label"
        @click="focusElem"
        class="label absolute mb-0 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text line-clamp-1"
      >{{ label }}</label>
      <transition name="shake">
        <p v-show="errorMessage" class="text-red-400">{{ errorMessage }}</p>
      </transition>
      <slot name="prepend-icon"></slot>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  
  const emit = defineEmits(['leaveInput', 'update:modelValue', 'contentChanged'])
  const props = withDefaults(defineProps<{
    containerClass?: string,
    autocomplete?: string,
    inputType?: 'tel' | 'search' | 'text' | 'email' | 'number' | 'password' | 'file' | 'url' | 'date' | 'month' | 'week' | 'time' | 'datetime' | 'datetime-local' | 'range' | 'color' | 'month',
    label?: string,
    labelFixed?: boolean,
    autofocus?: boolean,
    placeholder?: string,
    modelValue?: string | number,
    disabled?: boolean,
    errorMessage?: string,
    shadow?: string
  }>(), {
    labelFixed: false,
    autofocus: false,
    inputType: 'text',
    autocomplete: '',
    disabled: false,
    placeholder: '',
    shadow: 'shadow'
  
  })
  const focusElem = (event) => event.target.previousElementSibling.focus();
  const value = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
  });
  
  
  </script>
  
  <script lang="ts">
  //so that we can pass attributes to the input element instead of the wrapper div
  export default {
    inheritAttrs: false
  }
  </script>
  
  <style>
  .input {
    transition: border 0.2s ease-in-out;
  }
  
  .input:focus + .label,
  .input:active + .label,
  .input.filled + .label {
    font-size: 0.75rem;
    transition: all 0.2s ease;
    top: -0.8rem;
    padding: 0;
    color: #667eea;
  }
  
  .label {
    transition: all 0.2s ease-out;
    top: 1rem;
    left: 0;
  }
  </style>
  