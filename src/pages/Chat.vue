<template>
    <div class="text-center" style="margin-top:50px">chat</div>
    <div class="flex flex-col flex-center">

        <q-card style="width:300px;height:300px;margin-top: 20px;">
            <q-card-title>
                <ul>
                    <li>name</li>
                    <li>message</li>
                    <li>time</li>
                </ul>
            </q-card-title>
            <q-card-title>
                <NewMassage :name="name" />
            </q-card-title>
        </q-card>
    </div>
</template>

<script setup>
import NewMassage from './NewMassage.vue'
defineProps({
    name: String
})
</script>

<style>
</style>