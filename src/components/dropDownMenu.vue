<script setup>

import { ref, computed } from "vue";
import { useCandyStore } from "../store";

const store = useCandyStore();

const amountOfProducts = computed(() => {
    let counter = 0;
    store.shoppingCart.map((product) => (counter += product.quantity));
    return counter;
});
const menuIsOpen = ref(false);

const toggleMenu = () => {
    menuIsOpen.value = !menuIsOpen.value;
};


</script>


<style scoped>
.navBar {
    display: flex;
    align-items: center;
    justify-content: center;
}

.dropDownMenuImg {
    cursor: pointer;
    width: 35px;
    position: absolute;
    left: 5px;
    top: 12px;
    z-index: 99;
    width: 28px;
    height: auto;
}

.navBarLogo {
    padding: 18px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    z-index: 99;
    width: 60%;
    height: auto;
    max-width: 380px;
}

svg {
    z-index: 98;
}

.menuLinks {
    margin-top: 200px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
}

ul {
    padding: 0;
}

.menuLinks li {
    list-style: none;
    margin: 10px;
    padding: 10px;
    border-bottom: 1.5px solid #33333358;
    text-decoration: none;
    list-style: none;
}

.menuLinks a {
    text-decoration: none;
    color: #000000;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 400;

}

.menuLayout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.948);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;
}

.menuDesktop {
    display: none;
}

#shoppingCartIcon {
    z-index: 99;
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: larger;
}

.shoppingCartDesign,
.shoppingCart {
    cursor: pointer;
}

#shoppingCartIconSmall {
    font-size: larger;
    margin-right: 30px;
}

.amountOfProducts {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    position: absolute;
    background-color: #e7b6e2;
    top: 12px;
    right: 13px;
    text-align: center;
    font-size: small;
    z-index: 100;
}

@media (min-width: 500px) {
    .dropDownMenuImg {
        position: absolute;
        left: 15px;
        top: 20px;
        z-index: 99;
        height: auto;
    }
}


@media (min-width: 670px) {

    a,
    a:link,
    a:visited {
        color: #000000;
        text-decoration: none;
        position: relative;
        padding-bottom: 4px;
    }

    a::before {
        content: "";
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(90deg, #000000, #000000);
        background-size: 0 2px;
        background-repeat: no-repeat;
        background-position: left bottom;
        transition: .3s ease-in;
    }

    a:hover::before {
        background-size: 100% 2px;
    }


    .navBar {
        display: flex;
    }

    .navBarLogo {
        top: 35px;
    }

    .menuLayout {
        display: none;
    }

    .dropDownMenuImg {
        display: none;
        width: 40px;
        height: auto;
    }

    .menuLinks {
        flex-direction: row;
        justify-content: space-between;
        width: 100vw;
        margin-top: 15px;
        z-index: 99;
    }

    .menuDesktop {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
    }

    .menuLinks li {
        display: inline;
        border-bottom: none;
    }

    .shoppingCartDesign {
        display: none;
    }

    .amountOfProducts {
        top: 12px;
        right: 22px;
    }
}
</style>


<template>
    <div class="navBar">

        <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop offset="0%" style="stop-color:#CC66C2; stop-opacity:0.7" />
                    <stop offset="50%" style="stop-color:#FADD43; stop-opacity:0.8" />
                    <stop offset="75%" style="stop-color:#FF9C29; stop-opacity:0.5" />
                    <stop offset="100%" style="stop-color:#FF6636; stop-opacity:0.5" />
                </linearGradient>
            </defs>
            <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)"
                d="M0,147L80,179.7C160,212,320,278,480,261.3C640,245,800,147,960,106.2C1120,65,1280,82,1440,138.8C1600,196,1760,294,1920,343C2080,392,2240,392,2400,375.7C2560,359,2720,327,2880,261.3C3040,196,3200,98,3360,122.5C3520,147,3680,294,3840,326.7C4000,359,4160,278,4320,228.7C4480,180,4640,163,4800,138.8C4960,114,5120,82,5280,114.3C5440,147,5600,245,5760,302.2C5920,359,6080,376,6240,351.2C6400,327,6560,261,6720,261.3C6880,261,7040,327,7200,294C7360,261,7520,131,7680,98C7840,65,8000,131,8160,163.3C8320,196,8480,196,8640,187.8C8800,180,8960,163,9120,171.5C9280,180,9440,212,9600,212.3C9760,212,9920,180,10080,179.7C10240,180,10400,212,10560,236.8C10720,261,10880,278,11040,253.2C11200,229,11360,163,11440,130.7L11520,98L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z">
            </path>
        </svg>
        <img class="dropDownMenuImg" src="/dropDownMenu.png" alt="Hamburger Menu" @click="toggleMenu" />

        <div v-if="menuIsOpen" class="menuLayout">
            <div class="menuLinks">
                <ul>
                    <li><router-link @click="toggleMenu" to="/">Hem</router-link></li>
                    <li><router-link @click="toggleMenu" to="/products/Alla">Produkter</router-link></li>
                    <li><router-link @click="toggleMenu" to="/favourites">Mina favoriter</router-link> </li>
                    <li><router-link @click="toggleMenu" to="/SignUp">Skapa konto</router-link> </li>
                    <li><router-link @click="toggleMenu" to="/login">Logga in</router-link> </li>
                    <li><router-link @click="toggleMenu" to="/RandomProducts">Beslutsångest</router-link></li>
                    <li><router-link @click="toggleMenu" to="/shoppingcart">Överraskningspåsen</router-link></li>
                </ul>

            </div>
        </div>
        <div class="menuDesktop">
            <div class="menuLinks">
                <ul>
                    <li><router-link @click="toggleMenu" to="/">Hem</router-link></li>
                    <li><router-link @click="toggleMenu" to="/products/Alla">Produkter</router-link></li>
                    <li><router-link @click="toggleMenu" to="/favourites">Mina
                            favoriter</router-link> </li>
                    <li><router-link @click="toggleMenu" to="/SignUp">Skapa konto</router-link> </li>
                    <li><router-link @click="toggleMenu" to="/login">Logga in</router-link> </li>
                    <li><router-link @click="toggleMenu" to="/RandomProducts">Överraskningspåsen</router-link></li>
                </ul>
                <div class="shoppingCart" @click="$router.push('/shoppingcart')">
                    <div class="amountOfProducts" v-if="store.shoppingCart.length > 0">
                        <p> {{ amountOfProducts }}</p>
                    </div>
                    <i id="shoppingCartIconSmall" class="bi bi-cart" size="lg"></i>
                </div>
            </div>
        </div>
        <img class="navBarLogo" src="/CANDYWORLD-2.png" alt="Candy World logo" />
        <div class="shoppingCartDesign" @click="$router.push('/shoppingcart')">
            <div class="amountOfProducts" v-if="store.shoppingCart.length > 0">
                <p> {{ amountOfProducts }}</p>
            </div>
            <i @click="$router.push('/shoppingcart')" id="shoppingCartIcon" class="bi bi-cart" size="lg"></i>
        </div>
    </div>
</template>
