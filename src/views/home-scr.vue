<template>
    <div>
        <div class="main" id="home">
            <MainBanner />
            <div class="services-main">
                <div class="border-top-box">
                    <img class="img-border" src="../assets/images/borders/border-up-black.png" alt="">
                </div>
                <div class="services res-p-y" id="services">
                    <div class="services-title">
                        <div class="circle">
                            <h3 class="pad-mar-no">Services</h3>
                        </div>
                    </div>
                    <p>I believe in supporting my clients to realize their dreams so that they can also reach their goals
                        successfully with confidence and less hassle. That’s why I always push to deliver the most
                        forward-thinking results when I provide my services.</p><br>
                    <div class="row g-3">
                        <div v-for="(item, index) in services" :key="index" class="col-lg-4 col-sm-6 col-12">
                            <div class="card service-card">
                                <div class="hover-box"></div>
                                <div class="service-card-content">
                                    <!-- <div class="number-box">
                                        <p class="number">{{ item.number }}</p>
                                    </div> -->
                                    <div class="service-icon-box">
                                        <font-awesome-icon class="img-service-icon" :icon="item.icon" />
                                    </div>
                                    <p class="service-title">{{ item.title }}</p>
                                    <p class="service-description">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-container">
                    <img class="img-border" src="../assets/images/borders/border-down-black.png" alt="">
                </div>
            </div>
            <div class="clients-main">
                <div class="clients res-p-y" id="clients">
                    <Title>
                        <template v-slot:title>Clients</template>
                    </Title>
                    <div class="row clients-container">
                        <div v-for="(item, index) in clients" :key="index" class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="client-box">
                                <img class="img-client" :src="require('../assets/images/clients/' + item)" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- <div class="border-container">
                        <img class="img-border" src="../assets/images/borders/border-down-secondary.png" alt="">
                    </div> -->
                </div>
            </div>
            <div ref="countBox" class="count res-p-y">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="count-box">
                            <div class="icon-box">
                                <img class="img-icon" src="../assets/images/icons/clients.png" alt="">
                            </div>
                            <div class="content">
                                <p class="title pad-mar-no">Clients</p>
                                <p class="counter pad-mar-no">{{ clientsCount }}+</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="count-box">
                            <div class="icon-box">
                                <img class="img-icon" src="../assets/images/icons/projects.png" alt="">
                            </div>
                            <div class="content">
                                <p class="title pad-mar-no">Projects</p>
                                <p class="counter pad-mar-no">{{ projectsCount }}+</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="count-box">
                            <div class="icon-box">
                                <img class="img-icon" src="../assets/images/icons/hours.png" alt="">
                            </div>
                            <div class="content">
                                <p class="title pad-mar-no">Working Hours</p>
                                <p class="counter pad-mar-no">{{ workingHoursCount }}+</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="count-box">
                            <div class="icon-box">
                                <img class="img-icon" src="../assets/images/icons/satisfication.png" alt="">
                            </div>
                            <div class="content">
                                <p class="title pad-mar-no">Satisfication</p>
                                <p class="counter pad-mar-no">{{ satisficationCount }}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact">
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<script>

import ContactForm from '../components/contact-form-com.vue'
import Title from '../components/title-com.vue'
import MainBanner from '../components/main-banner-com.vue'

export default {

    data() {
        return {
            services: [
                { number: '01.', icon: ["fas", "users"], title: 'Digital Marketing', desc: 'Elevate your brand\'s presence! Harness our expertise to amplify your product\'s reach and captivate your audience like never before.' },
                { number: '02.', icon: ["fas", "project-diagram"], title: 'Search Engine Optimization', desc: 'Unlock new horizons! Let us fine-tune your content, ensuring you dominate top spots in search engine results.' },
                { number: '03.', icon: ["fas", "code"], title: 'Software Development', desc: 'Mobile (iOS/Android) Crafting digital masterpieces! Trust our seasoned team to deliver cutting-edge mobile solutions tailored for your unique needs.' },
                { number: '04.', icon: ["fas", "pencil-square"], title: 'Content Writing', desc: 'Crafting words that resonate! Elevate your business and digital presence with our expertly penned content, tailored for profiles, websites, and social promotions.' },
            ],
            clients: ['dnata.png', 'upwork.png', 'etsy.png', 'do.png'],
            clientsCount: 0,
            clientCountTo: 25,
            projectsCount: 0,
            projectCountTo: 150,
            workingHoursCount: 0,
            workingHoursCountTo: 2000,
            satisficationCount: 0,
            satisficationCountTo: 100,
            observer: null,
            intervalId: null,
        }
    },

    components: {
        ContactForm,
        Title,
        MainBanner,
    },

    mounted() {
        // Initialize the Intersection Observer
        this.observer = new IntersectionObserver(this.handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the div is visible
        });
        this.observer.observe(this.$refs.countBox);
    },

    methods: {
        handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // The div is now visible in the viewport
                    this.startCount() // Call the method when it's visible
                    this.observer.unobserve(this.$refs.countBox); // Stop observing
                }
            });
        },

        startCount() {
            this.intervalId = setInterval(() => {
                this.clientsCount = this.clientsCount >= this.clientCountTo ? this.clientsCount : this.clientsCount + 1;
                this.projectsCount = this.projectsCount >= this.projectCountTo ? this.projectsCount : this.projectsCount + 1;
                this.workingHoursCount = this.workingHoursCount >= this.workingHoursCountTo ? this.workingHoursCount : this.workingHoursCount + 10;
                this.satisficationCount = this.satisficationCount >= this.satisficationCountTo ? this.satisficationCount : this.satisficationCount + 1;
                if (this.clientsCount === this.clientCountTo && this.projectsCount === this.projectCountTo && this.workingHoursCount === this.workingHoursCountTo && this.satisficationCount === this.satisficationCountTo) {
                    clearInterval(this.intervalId);
                    this.intervalId = null;
                }
            }, 10)
        },
    }

}

</script>

<style scoped>
/* .main {
    background-color: #262626;
} */

.services-main {
    position: relative;
    padding-bottom: 50px;
    background-image: url('../assets/images/backgrounds/bg-concrete.jpg');
}

.border-top-box {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
}

.clients-main {
    background-color: black;
    position: relative;
}

.services {
    padding-top: 80px;
    padding-bottom: 50px;
    color: black;
}

/* .circle {
    width: 35px;
    height: 35px;
    padding: 5px 0 0 15px;
    background-color: #732424;
    border-radius: 50%;
} */

.circle h3 {
    font-weight: 900;
    margin-bottom: 30px;
    color: #732424;
    font-family: 'YouthBrushDaylight';
    font-size: 80px;

}

.service-card {
    height: 100%;
    padding: 40px 20px 40px 20px;
    /* background-color: black; */
    color: black;
    position: relative;
    overflow: hidden;
    background-color: transparent;
}

.hover-box {
    width: 0%;
    height: 100%;
    /* background-color: #faf9f6; */
    position: absolute;
    top: 0;
    left: 0;
    transition: width .5s;
}

.service-card-content {
    z-index: 1;
}

.service-card:hover .hover-box {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.414);
}

.number-box {
    display: flex;
    justify-content: flex-end;
}

.number {
    font-size: 50px;
    font-weight: 900;
    color: rgb(42, 42, 42);
    transition: color .5s;
}

.service-card:hover .number {
    color: rgba(255, 255, 255, 0.469);
}

.service-icon-box {
    width: 45px;
    height: 45px;
    margin-bottom: 20px;
}

.img-service-icon {
    width: 100%;
    height: 100%;
    color: #732424;
    transition: color .5s;
}

.service-card:hover .img-service-icon {
    color: black;
}

.service-title {
    font-size: 17px;
    font-weight: 900;
    font-family: 'gothic-pro-bold';
}

.separator-box {
    width: 100%;
    display: flex;
    justify-content: center;
}

.img-separator {
    max-width: 100%;
    max-height: 100%;
}

.clients {
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
}

.clients-container {
    display: flex;
    justify-content: center;
}

.client-box {
    height: 100px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-client {
    max-width: 80%;
    max-height: 80%;
    transition: all .5s;
}

.client-box:hover .img-client {
    max-width: 100%;
    max-height: 100%;
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

.count {
    padding-top: 40px;
    padding-bottom: 20px;
    background-color: black;

}

.count-box {
    margin-bottom: 40px;
    display: flex;
}

.count-box .icon-box {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.45);
}

.count-box .icon-box .img-icon {
    max-width: 80%;
    max-height: 80%;
}

.count-box .title {
    font-weight: bold;
    color: white;
}

.count-box .counter {
    font-weight: 900;
    font-size: 45px;
    line-height: 50px;
    color: white;
}

@media only screen and (max-width: 575px) {

   .circle h3 {
        font-size: 50px;
    }
}
</style>