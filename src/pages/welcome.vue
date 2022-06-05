<template>
    <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }">


            <q-card-section>
                <div class="text-center">
                    <q-cart-title>welcome</q-cart-title>
                </div>
                <q-form @submit="chat()">
                    <q-input v-model="name" class="q-mt-lg" label="chatmessage" placeholder="message" filled />
                    <p v-if="feedback" class="text-red-6">{{ feedback }}</p>
                    <q-btn @click="chat" class="bg-green-4 text-white full-width q-mt-lg" label="selectchat" />
                </q-form>

            </q-card-section>
        </q-card>

    </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const name = ref(null)
const feedback = ref(null)
const router = useRouter()

const chat = () => {
    if (name.value) {
        router.push({ name: 'chat', params: { name: name.value } })
    } else {
        feedback.value = 'in message error'
    }
}
</script>

<style>
</style>