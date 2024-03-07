<script setup>
import myFooter from "../components/Footer.vue"
import myHeader from "../components/Header.vue"
import { computed, ref } from 'vue'
import { useAccountStore } from "/src/store.js";


const accountStore = useAccountStore()

const password1 = ref('')
const password2 = ref('')
const userName = ref('')

const isInvalid = computed(() =>
    userName.value.length === 0 ||
    password1.value.length < 5 ||
    password2.value.length < 5 ||
    password1.value !== password2.value
);

function onClick() {
    accountStore.newAccount({
        password: password1.value,
        userName: userName.value
    })
    alert('Du har skapat ett konto hos oss nu. Välkommen ' + userName.value +'!');
}
</script>

<template>
<myHeader headline="SKAPA KONTO" />
<main>
    <div class="form-container">
        <div class="icon-container">
            <i class="bi bi-person-circle"></i>
        </div>
        <div class="form-group">
            <label for="userName">Användarnamn:</label>
            <input id="userName" v-model="userName" placeholder="Användarnamn" class="formInput" />
        </div>
        <div class="form-group">
            <label for="password1">Önskat lösenord:</label>
            <input id="password1" type="password" v-model="password1" placeholder="Lösenord" class="formInput" />
        </div>
        <div class="form-group">
           <label for="password2">Upprepa lösenord:</label>
           <input id="password2" type="password" v-model="password2" placeholder="Upprepa lösenord" class="formInput" />
        </div>   
    <div class="login-link">
      Har du redan ett konto? <router-link to="/login">Logga in här</router-link>
    </div>
        <div class="form-group">
            <button @click="onClick" :disabled="isInvalid" type="button" class="btn btn-outline-secondary">Skapa konto</button>
        </div>
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

.formInput {
    width: 80%;
    padding: 7px;
}
.login-link {
    font-style: italic;
    margin-bottom: 2em;
}

@media (min-width: 675px) {
    .bi-person-circle {
    font-size: 6em;
}
    .formInput {
        width: 95%;
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
    .formInput {
        width: 105%;
        padding: 11px;
    }

    .SignUpButton {
        width: 8em;
        height: 44px;
        border-radius: 90%;
    }

    label {
        margin-bottom: 9.5px;
    }
    
}
</style>
