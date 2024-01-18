<template>
    <div>
        <div class="main">
            <div class="navigation">
                <div class="lg">
                    <div class="logo-box">
                        <img class="img-logo" src="../assets/images/logo.png" alt="">
                    </div>
                    <a class="a-link" href="/#home">
                        <!-- <font-awesome-icon class="img-link-icon" :icon="['fas', 'home']" /> -->
                        <p class="txt-link">Home</p>
                    </a>
                    <a class="a-link" href="/#services">
                        <!-- <font-awesome-icon class="img-link-icon" :icon="['fas', 'cog']" /> -->
                        <p class="txt-link">Services</p>
                    </a>
                    <a class="a-link" href="/#clients">
                        <!-- <font-awesome-icon class="img-link-icon" :icon="['fas', 'users']" /> -->
                        <p class="txt-link">Clients</p>
                    </a>
                    <a class="a-link" href="/#contact">
                        <!-- <font-awesome-icon class="img-link-icon" :icon="['fas', 'phone-square']" /> -->
                        <p class="txt-link">Contact</p>
                    </a>
                    <div class="social-box">
                        <a class="a-social" href="https://www.linkedin.com/in/tharusha-lakshan/" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/linkedin.png" alt="">
                        </a>
                        <a class="a-social" href="https://wa.me/message/BJZAN4RNQPE2A1" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/wa.png" alt="">
                        </a>
                        <a class="a-social" href="https://www.instagram.com/tharuu96/" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/insta.png" alt="">
                        </a>
                    </div>
                </div>
                <transition name="navi-trans">
                    <div v-if="showNavBar" class="sm res-p-y">
                        <button @click="mobileNavigationIsVisible = true" class="btn-menu">
                            <img class="img-menu" src="../assets/images/icons/menu.png" alt="">
                        </button>
                    </div>
                </transition>
                <transition name="mob-navigation">
                    <div v-if="mobileNavigationIsVisible" @click="mobileNavigationIsVisible = false;"
                        class="navigation-sm-main">
                        <div @click.stop class="navigation-sm">
                            <div class="close-wrp">
                                <button @click="mobileNavigationIsVisible = false;"
                                    class="btn-close btn-close-white"></button>
                            </div>
                            <div class="logo-box">
                                <img class="img-logo" src="../assets/images/logo.jpeg" alt="">
                            </div>
                            <a class="a-link" @click="mobileNavigationIsVisible = false;" href="/#home">
                                <p class="txt-link">Home</p>
                            </a>
                            <a class="a-link" @click="mobileNavigationIsVisible = false;" href="/#services">
                                <p class="txt-link">Services</p>
                            </a>
                            <a class="a-link" @click="mobileNavigationIsVisible = false;" href="/#clients">
                                <p class="txt-link">Clients</p>
                            </a>
                            <a class="a-link" @click="mobileNavigationIsVisible = false;" href="/#contact">
                                <p class="txt-link">Contact</p>
                            </a>
                            <div class="social-box">
                        <a class="a-social" href="https://www.linkedin.com/in/tharusha-lakshan/" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/linkedin.png" alt="">
                        </a>
                        <a class="a-social" href="https://wa.me/message/BJZAN4RNQPE2A1" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/wa.png" alt="">
                        </a>
                        <a class="a-social" href="https://www.instagram.com/tharuu96/" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/insta.png" alt="">
                        </a>
                    </div>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="bg-dark-container">
                <div class="content-container">
                    <div class="content-left">
                        <div class="title-container">
                            <div class="title-box">
                                <h3>About</h3>                                
                            </div>
                        </div>
                        <p class="sub-title">
                            Diving into the IT realm in 2015, my 8-year journey has been nothing short of
                            transformative.
                            From a versatile Software Engineer to a master Mobile Developer fluent in iOS and Android,
                            I've continually expanded my horizons. But that's not all—my acumen also extends to SEO
                            wizardry and crafting potent Digital Marketing strategies. My portfolio? A vibrant mosaic of
                            sleek mobile apps, razor-sharp SEO initiatives, and dynamic digital campaigns. Whether it's
                            giving a fresh spin to eCommerce, crafting intuitive mobile experiences, catapulting
                            startups, or supercharging social platforms, I’m your go-to expert for turning dreams into
                            reality. Dreaming of that coveted spot in search rankings or expanding your digital
                            dominion? Look no further. Let's co-pilot your journey to excellence, shaping success
                            stories along the way.
                        </p>
                        <p class="signature">Tharusha</p>
                    </div>
                    <div class="content-right">
                        <img src="../assets/images/backgrounds/bg-person.png" alt="">
                        <div class="content-right-img-fade-box"></div>
                    </div>
                </div>
            </div>
            <!-- <div class="border-container">
                <img class="img-border" src="../assets/images/borders/border-up-black.png" alt="">
            </div> -->
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showNavBar: true,
            mobileNavigationIsVisible: false,
        }
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > this.lastScrollTop) {
                this.showNavBar = false;
            } else {
                this.showNavBar = true;
            }
            this.lastScrollTop = st <= 0 ? 0 : st;
        },
    }
}
</script>
<style scoped>
h3 {
    font-weight: 900;
    color: white;
    font-family: 'YouthBrushDaylight';
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    font-size: 80px;
    line-height: 43px;
    margin-left: 15px;
    z-index: 1;
}

.circle {
    width: 35px;
    height: 35px;
    padding: 5px 0 0 15px;
    background-color: #732424;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
}

.a-link {
    margin-bottom: 20px;
    margin-left: 7px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
}

.main {
    width: 100%;
    height: 100vh;
    /* background-image: url('../assets/images/backgrounds/bg-main-banner.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    position: relative;
    overflow: hidden;
}

.navigation {
    padding: 50px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
}

.logo-box {
    width: 100px;
    margin-bottom: 50px;
}

.img-logo {
    width: 100%;
}

.bg-dark-container {
    width: 100%;
    height: 100%;
    background-color: black;
    position: relative;
}

.img-link-icon {
    width: 25px;
    height: 25px;
    margin-right: 20px;
    color: white;
}

.txt-link {
    padding: 0;
    margin: 0;
    font-size: 20px;
}

.social-box {
    width: 120px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}

.a-social {
    margin-bottom: 20px;
}

.img-social-icon {
    max-height: 30px;
}

.content-container {
    height: 100%;
    padding: 0 250px;
    display: flex;
    align-items: center;
}

.title {
    margin: 0;
    font-size: 80px;
    color: white;
    font-weight: 900;
}

.divider {
    width: 300px;
    height: 1px;
    margin-bottom: 30px;
    background-color: white;
}

.sub-title-box {
    display: flex;
    align-items: center;
}

.point {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: white;
    flex-shrink: 0;
}

.col-lg-5 {
    position: relative;
}

.content-right {
    max-width: 30%;
    padding-bottom: 100px;
    position: relative;
}

/* .content-right-img-fade-box{
    width: 100%;
    height: 300px;
    margin-bottom: 100px;
    background: linear-gradient(to bottom, transparent, #0d0d0d);
    position: absolute;
    bottom: 0;
    left: 0;
} */

.sub-title {
    margin: 0;
    color: white;
    font-weight: bold;
}

.signature {
    margin-top: 30px;
    margin-left: 80%;
    font-size: 30px;
    font-family: 'meadows';
    /* text-align: right; */
    color: white;
    transform: rotate(-10deg);
}

.sm,
.navigation-sm-main {
    display: none;
}

.border-container {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    z-index: 1;
}

.img-border {
    width: 100%;
}

.title-container {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
}

.title-box{
    position: relative;
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 1100px) {
    .content-container {
        padding: 0;
        padding-left: 200px;
    }

    .content-left {
        max-width: 50%;
    }
}

@media only screen and (max-width: 991px) {
    .title {
        font-size: 65px;
    }

    .content-container {
        padding-right: 200px;
    }

    .sub-title {
        text-align: center;
    }

    .content-right {
        display: none;
    }

    .content-left {
        max-width: 100%;
    }
}

@media only screen and (max-width: 767px) {
    .title {
        font-size: 50px;
    }

    .divider {
        margin-bottom: 10px;
    }

    .content-container {
        padding: 10px;
    }

    .sm {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .navi-trans-enter-from,
    .navi-trans-leave-to {
        top: -70px;
    }

    .navi-trans-enter-active,
    .navi-trans-leave-active {
        transition: all .3s ease;
    }

    .btn-menu {
        background-color: transparent;
        border: none;
    }

    .img-menu {
        width: 50px;
    }

    .navigation-sm-main {
        display: block;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
    }

    .mob-navigation-enter-from,
    .mob-navigation-leave-to {
        width: 0%;
        opacity: 0;
    }

    .mob-navigation-enter-active,
    .mob-navigation-leave-active {
        transition: all 400ms;
    }

    .navigation-sm {
        max-width: 570px;
        height: 100vh;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: black;
        position: relative;
    }

    .btn-close {
        margin-top: 20px;
        margin-right: 20px;
        position: absolute;
        top: 0;
        right: 0;
    }

    .lg {
        display: none;
    }
}

@media only screen and (max-width: 575px) {

    h3{
        font-size: 50px;
    }

    .sm {
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .img-menu {
        width: 40px;
    }

    .title {
        font-size: 28px;
    }

    .divider {
        width: 200px;
    }

    .sub-title-box {
        flex-direction: column;
    }

    .sub-title{
        font-size: 13px;
    }
}
</style>
