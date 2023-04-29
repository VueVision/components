<template>
    <component class="rounded-xl fit-content relative flex justify-center items-center gap-2"
        :class="[bgColor, sizes[size], disabled ? 'cursor-not-allowed' : '', { 'cursor-pointer': to }]"
        :disabled="isLoading || disabled" :type="type" v-bind="objAttributes" :is="componentType"
        :download="download?.name">
        <Icon name="svg-spinners:3-dots-bounce" v-if="isLoading" />
        <template v-if="!isLoading">
            <slot></slot>
        </template>
        <span v-if="dot"
            :class="[dot.bg ? bgColors[dot.bg] : bgColor, { 'border-base': dot.bg !== 'base' && bg !== 'base' }]"
            class="absolute top-0 right-0 transform-gpu translate-x-2/3 -translate-y-1/3 shadow rounded-full text-[0.7rem] aspect-1 flex justify-center items-center p-[2px] overflow-hidden">
            <slot name="dot">
                {{ dot.content }}
            </slot>
        </span>
    </component>
</template>
  
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
//   import {TColors, TSize} from '@/services/application/interfaces'
//   import {size as sizeConst, bgColors} from '@/services/application/constantes'
import { bgColors, sizes } from '~/constants'
import {
    useAttrs
} from 'vue'


interface bButton {
    bg?: keyof typeof bgColors,
    size?: keyof typeof sizes,
    haveError?: boolean,
    isLoading?: boolean,
    disabled?: boolean,
    type?: "button" | "submit" | "reset",
    to?: string | object,
    download?: {
        url: string,
        name: string,
    },
    dot?: {
        content?: string,
        bg?: keyof typeof bgColors,
    },
}


const props = withDefaults(defineProps<bButton>(), {
    size: 'normal',
    bg: 'primary',
    type: 'button',
    haveError: false,
    isLoading: false,
    disabled: false
});
const objAttributes = computed(() => {
    const attrs = useAttrs()
    const { to, download } = props
    const obj = { ...attrs, to }
    // @ts-ignore
    if (download) obj.href = download.url

    return obj
})

const componentType = computed(() => {
    const { to, download } = props
    if (to) return 'NuxtLink';
    if (download) return 'a';
    return 'button'
})

const { bg, haveError, isLoading, disabled, type } = toRefs(props);

const bgColor = computed(() => {
    if (!haveError.value && !disabled.value) return bgColors[bg.value];
    else if (haveError.value) return bgColors.error;
    else if (isLoading.value) return bgColors.loading + ' ' + bg.value;
    else if (disabled.value) return bgColors.disabled;
})

</script>
  
<style></style>
  