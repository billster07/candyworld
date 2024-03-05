<script setup>
import myFooter from "../components/Footer.vue"
import myHeader from "../components/Header.vue"
import { ref } from 'vue';
import { useAccountStore } from "/src/store.js";

const userName = ref('');
const password = ref('');

const accountStore = useAccountStore();

function onClick() {
    const user = accountStore.accounts.find(
        user => user.userName === userName.value && 
        user.password === password.value
    );

    if (user) {
        alert('Du är inloggad som ' + userName.value);
    } else {
        alert('Felaktigt användarnamn eller lösenord. Vänligen försök igen!');
    }
}
</script>

<template>
<myHeader headline="LOGGA IN" />
<main>
    <div class="form-container">
        <div class="icon-container">
            <i class="bi bi-person-circle"></i>
        </div>
        <form @submit.prevent="onClick">
            <div class="form-group">
                <label for="userName">Användarnamn:</label>
                <input id="userName" v-model="userName" placeholder="Användarnamn" class="formInput" />
            </div>
            <div class="form-group">
                <label for="password">Lösenord:</label>
                <input id="password" type="password" v-model="password" placeholder="Lösenord" class="formInput" />
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-outline-secondary">Logga in</button>
            </div>
        </form>
    </div>
</main>
<myFooter />
</template>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
}

.bi-person-circle {
    font-size: 4.5em; 
}

.form-group {
    text-align: center;
    margin-bottom: 35px;
}

label {
    margin-bottom: 7px;
}

.formInput{
    width: 80%; 
    padding: 7px; 
}

@media (min-width: 675px) {
.bi-person-circle {
    font-size: 6em;
}

.formInput{
    width: 85%; 
    padding: 8px; 
    }


label {
    margin-bottom: 9px;
}
}

@media (min-width: 870px) {
.bi-person-circle {
    font-size: 8em;
}

.formInput{
    width: 100%; 
    padding: 11px; 
    }

label {
    margin-bottom: 9.5px;
}
}
</style>
