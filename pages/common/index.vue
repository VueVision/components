<script setup lang="ts">
const pageOption = ref({
    modal: {
        leftModal: false,
        rightModal: false,
        bottomModal: false,
        baseModal: false,
    },
    text: {
        value: 'Hello World',
        value2: '',
    }
})

const openModal = (modal: keyof typeof pageOption.value.modal) => {
    pageOption.value.modal[modal] = true
}

</script>

<template>
    <div class="page">
        <ClientOnly>
            <modal v-model="pageOption.modal.baseModal" position="base">
                <template #header>
                    <div class="flex justify-end gap-2">
                        <p>#withheader</p>
                    </div>
                </template>
                <template #default>
                    <div class="flex flex-col gap-2">
                        <h1>Modal</h1>
                        <div class="flex flex-wrap flex-col gap-10">
                            <div class="flex flex-wrap gap-2">
                                <Btn>Main content</Btn>
                            </div>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end gap-2">
                        <p>#withfooter</p>
                        <Btn @click="pageOption.modal.isOpen = false">Close</Btn>
                        <Btn bg="success">Save</Btn>
                    </div>
                </template>
            </modal>
            <modal v-model="pageOption.modal.bottomModal" position="bottom">
                <template #header>
                    <div class="flex justify-end gap-2">
                        <p>#withheader</p>
                    </div>
                </template>
                <template #default>
                    <div class="flex flex-col gap-2">
                        <h1>Modal</h1>
                        <div class="flex flex-wrap flex-col gap-10">
                            <div class="flex flex-wrap gap-2">
                                <Btn>Main content</Btn>
                            </div>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end gap-2">
                        <p>#withfooter</p>
                        <Btn @click="pageOption.modal.isOpen = false">Close</Btn>
                        <Btn bg="success">Save</Btn>
                    </div>
                </template>
            </modal>
            <modal v-model="pageOption.modal.leftModal" position="left">
                <template #header>
                    <div class="flex justify-end gap-2">
                        <p>#withheader</p>
                    </div>
                </template>
                <template #default>
                    <div class="flex flex-col gap-2">
                        <h1>Modal</h1>
                        <div class="flex flex-wrap flex-col gap-10">
                            <div class="flex flex-wrap gap-2">
                                <Btn>Main content</Btn>
                            </div>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end gap-2">
                        <p>#withfooter</p>
                        <Btn @click="pageOption.modal.isOpen = false">Close</Btn>
                        <Btn bg="success">Save</Btn>
                    </div>
                </template>
            </modal>
            <modal v-model="pageOption.modal.rightModal" position="right">
                <template #header>
                    <div class="flex justify-end gap-2">
                        <p>#withheader</p>
                    </div>
                </template>
                <template #default>
                    <div class="flex flex-col gap-2">
                        <h1>Modal</h1>
                        <div class="flex flex-wrap flex-col gap-10">
                            <div class="flex flex-wrap gap-2">
                                <Btn>Main content</Btn>
                            </div>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end gap-2">
                        <p>#withfooter</p>
                        <Btn @click="pageOption.modal.isOpen = false">Close</Btn>
                        <Btn bg="success">Save</Btn>
                    </div>
                </template>
            </modal>
        </ClientOnly>
        <h1 class="page-title">Common</h1>
        <div class="flex flex-col gap-2">
            <h1>Buttons</h1>
            <div class="flex flex-wrap flex-col gap-10 card-base">
                <div class="flex flex-wrap gap-2">
                    <Btn>Hello</Btn>
                    <Btn bg="warning">Hello</Btn>
                    <Btn bg="error">Hello</Btn>
                    <Btn bg="errorLight">Hello</Btn>
                    <Btn is-loading>Hello</Btn>
                    <Btn bg="success">Hello</Btn>
                    <Btn disabled>Hello</Btn>
                    <Btn bg="transparent" :dot="{ content: '+9', bg: 'error' }">Hello</Btn>
                </div>
                <div class="flex flex-wrap gap-2 items-start">
                    <Btn class="shadow-md shadow-blue-600" size="big">Hello</Btn>
                    <Btn class="shadow-md shadow-orange-600" size="normal" bg="warning">Hello</Btn>
                    <Btn class="shadow-md shadow-red-600" size="dense" bg="error">Hello</Btn>
                    <Btn class="shadow-md shadow-red-400" size="mini" bg="errorLight">Hello</Btn>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <h1>Modal</h1>
            <div class="flex flex-wrap flex-col gap-10 card-base">
                <div class="flex flex-wrap gap-2">
                    <Btn @click="openModal('baseModal')">Open base modal</Btn>
                    <Btn @click="openModal('leftModal')">Open left modal</Btn>
                    <Btn @click="openModal('rightModal')">Open right modal</Btn>
                    <Btn @click="openModal('bottomModal')">Open bottom modal</Btn>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <h1>Text input</h1>
            <div class="flex flex-wrap flex-col gap-10 card-base">
                <div class="flex flex-wrap gap-2 items-end">
                    <Text v-model="pageOption.text.value"/>
                    <Text v-model="pageOption.text.value2" placeholder="Hello world" label="Label with placeholder"/>
                    <Text v-model="pageOption.text.value2" label="Label with no placeholder"/>
                    <Text error-message="Wrong text" v-model="pageOption.text.value2" label="Label with no placeholder"/>
                </div>
            </div>
        </div>
    </div>
</template>