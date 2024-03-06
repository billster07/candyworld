<script setup>

import "bootstrap-icons/font/bootstrap-icons.css";


</script>


<template>
    <footer>
        <div class="contactInfoDiv">
            <p><u>KONTAKTA OSS</u></p>
            <p> <i class="bi bi-telephone-inbound-fill"></i> Telefon: <a href="#">031-726 123</a></p>
            <p> <i class="bi bi-mailbox"></i>E-post: <a href="#">candyworld@hotmail.com</a></p>
        </div>

        <img class="logo" src="/CANDYWORLD.png" alt="Logo" />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

            <defs>

                <linearGradient id="customGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#CC66C2; stop-opacity:0.7" />
                    <stop offset="25%" style="stop-color:#FADD43; stop-opacity:0.8" />
                    <stop offset="50%" style="stop-color:#FF9C29; stop-opacity:0.5" />
                    <stop offset="75%" style="stop-color:#FF6636; stop-opacity:0.5" />
                    <stop offset="100%" style="stop-color:#FF6636; stop-opacity:0.5" />
                </linearGradient>
            </defs>

            <path fill="url(#customGradient)" fill-opacity="1"
                d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,85.3C672,107,768,181,864,181.3C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>

        </svg>
        <div class="socialIcons">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
        </div>
    </footer>
</template>


<style scoped>
footer {
    position: relative;
}

svg {
    bottom: 0;
    left: 0;
    width: 100%;
}

.logo {
    position: absolute;
    bottom: 1em;
    right: 0.5em;
    max-width: 115px;
    max-height: 120px;
}

.contactInfoDiv {
    position: absolute;
    bottom: 4px;
    left: 1em;
    width: 350px;
    font-size: 10px;
}

.contactInfoDiv p {
    margin: 0;
}

.bi-telephone-inbound-fill {
    margin-right: 8px;
}

.bi-mailbox {
    margin-right: 8px;
}

.socialIcons {
    display: flex;
    justify-content: center;
    gap: 5px;
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
}

@media screen and (min-width: 450px) {
    .contactInfoDiv {
        text-align: left;
        padding-left: 2px;
        font-size: 12px;
        margin-bottom: 8px;
    }

    .logo {
        position: absolute;
        bottom: 1.5em;
        right: 0.5em;
        max-width: 150px;
        max-height: 120px;
    }

    .socialIcons {
        display: flex;
        justify-content: center;
        gap: 7px;
        position: absolute;
        bottom: 1.5em;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
    }
}

@media screen and (min-width: 630px) {
    .contactInfoDiv {
        text-align: left;
        padding-left: 13px;
        font-size: 13px;
        margin-bottom: 12px;
    }

    .logo {
        position: absolute;
        bottom: 2em;
        right: 2em;
        max-width: 150px;
        max-height: 120px;
    }

    .socialIcons {
        display: flex;
        justify-content: center;
        gap: 7px;
        position: absolute;
        bottom: 1.5em;
        left: 50%;
        transform: translateX(-50%);
        font-size: 15px;
    }
}

@media screen and (min-width: 800px) {
    .contactInfoDiv {
        text-align: left;
        padding-left: 20px;
        font-size: 14px;
        margin-bottom: 20px;
    }

    .logo {
        position: absolute;
        bottom: 2em;
        right: 2em;
        max-width: 170px;
        max-height: 120px;
        margin-bottom: 15px;
    }

    .socialIcons {
        display: flex;
        justify-content: center;
        gap: 15px;
        position: absolute;
        bottom: 2em;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
    }
}

@media screen and (min-width: 960px) {
    .contactInfoDiv {
        text-align: left;
        padding-left: 25px;
        font-size: 15px;
        margin-bottom: 15px;
    }

    .logo {
        position: absolute;
        bottom: 2em;
        right: 3.5em;
        max-width: 195px;
        max-height: 140px;
    }

    .socialIcons {
        display: flex;
        justify-content: center;
        gap: 15px;
        position: absolute;
        bottom: 2.2em;
        left: 50%;
        transform: translateX(-50%);
        font-size: 19px;
    }
}
</style>
