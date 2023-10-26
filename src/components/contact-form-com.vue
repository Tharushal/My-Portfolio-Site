<template>
    <div>
        <div class="main">
            <div class="border-top-container">
                <img class="img-border" src="../assets/images/borders/border-up-black.png" alt="">
            </div>
            <div class="bg-container">
                <div class="bg-dark-container">
                    <div class="content-container res-p-y">
                        <h1>Contact Us</h1>
                        <div class="form row">
                            <div class="details col-lg-6">
                                <div class="contact-detail-box">
                                    <div class="icon-box">
                                        <img class="img-icon" src="../assets/images/icons/phone.png" alt="">
                                    </div>
                                    <a href="tel:+94719496882">+94 71 949 6882</a>
                                </div>
                                <div class="contact-detail-box">
                                    <div class="icon-box">
                                        <img class="img-icon" src="../assets/images/icons/email.png" alt="">
                                    </div>
                                    <p class="pad-mar-no">tharushalakshan3@gmail.com</p>
                                </div>
                                <div class="contact-detail-box-2">
                                    <div class="icon-box">
                                        <img class="img-icon" src="../assets/images/icons/map-maker.png" alt="">
                                    </div>
                                    <p class="pad-mar-no">Kandy - Sri Lanka</p>
                                </div>
                            </div>
                            <div class="inp-fields col-lg-6">
                                <form ref="form" @submit.prevent="contactSubmit">
                                    <div class="inp-box">
                                        <input v-model="name" type="text" name="name" id=""
                                            :class="errors.name !== '' ? 'inp-error form-control' : 'form-control'"
                                            placeholder="Name">
                                        <p v-if="errors.name !== ''" class="txt-error">{{ errors.name }}</p>
                                    </div>
                                    <div class="row inp-box">
                                        <div class="col-lg-6 inp-rem-pad pad-ri">
                                            <input v-model="email" type="text" name="email" id=""
                                                :class="errors.email !== '' ? 'inp-error form-control inp-email' : 'form-control inp-email'"
                                                placeholder="Email">
                                            <p v-if="errors.email !== ''" class="txt-error">{{ errors.email }}</p>
                                        </div>
                                        <div class="col-lg-6 inp-rem-pad pad-le">
                                            <input v-model="phone" type="text" name="phone" id=""
                                                :class="errors.phone !== '' ? 'inp-error form-control' : 'form-control'"
                                                placeholder="Phone">
                                            <p v-if="errors.phone !== ''" class="txt-error">{{ errors.phone }}</p>
                                        </div>
                                    </div>
                                    <div class="inp-box">
                                        <textarea v-model="message"
                                            :class="errors.message !== '' ? 'inp-error form-control' : 'form-control'"
                                            name="message" id="" rows="5" placeholder="Message"></textarea>
                                        <p v-if="errors.message !== ''" class="txt-error">{{ errors.message }}</p>
                                    </div>
                                    <button type="submit" class="btn-send">
                                        <div class="txt-submit" v-if="!isLoading">{{ contactSubmitStatus }}</div>
                                        <loading v-model:active="isLoading" loader="bars" color="white" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-container">
                    <img class="img-border" src="../assets/images/borders/separator.png" alt="">
                </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import emailjs from "emailjs-com";
import Loading from 'vue-loading-overlay';

export default {

    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            isLoading: false,
            contactSubmitStatus: 'SUBMIT',
        }
    },

    components: {
        Loading,
    },

    methods: {

        validation() {
            if (this.name === '') {
                this.errors.name = 'Name is required!';
            } else {
                this.errors.name = '';
            }

            if (!this.email) {
                this.errors.email = 'Email is required!';
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.errors.email = 'Invalid email format!';
            } else {
                this.errors.email = '';
            }

            if (this.phone === '') {
                this.errors.phone = 'Phone is required!';
            } else {
                this.errors.phone = '';
            }

            if (this.message === '') {
                this.errors.message = 'Message is Required!';
            } else {
                this.errors.message = '';
            }
        },

        contactSubmit() {
            this.validation()
            if (this.errors.name === '' && this.errors.email === '' && this.errors.phone === '' && this.errors.message === '') {
                this.isLoading = true;

                const serviceId = 'service_8tm315u';
                const templateId = 'template_xj7asbg';
                const publicKey = '1noZiBG0HYJBfm8GR';

                emailjs.sendForm(serviceId, templateId, this.$refs.form, publicKey).then((result) => {
                    this.isLoading = false;
                    this.contactSubmitStatus = 'SUBMITTED'
                    this.name = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                }, (error) => {
                    this.isLoading = false;
                    this.contactSubmitStatus = 'ERROR'
                })
            }
        }
    },


    //template_ul3qtdk
    //service_10r22dc
    //sUx6d2mirMJ-LTbeW
}
</script>
<style scoped>
a,
p {
    font-size: 22px;
    text-decoration: none;
    color: white;
}

h1 {
    color: white;
    text-align: center;
    font-family: 'YouthBrushDaylight';
    font-size: 80px;
}

.txt-error {
    color: rgb(247, 97, 97);;
    font-size: 15px;
    padding: 0;
    margin: 0;
}

.inp-error {
    min-height: 50px;
    border: 1px solid rgb(247, 97, 97);
}

.inp-rem-pad{
    padding: 0;
}

.pad-ri{
    padding-right: 10px;
}

.pad-le{
    padding-left: 10px;
}

.main {
    position: relative;
}

.border-top-container {
    height: 100px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    z-index: 1;
}

.border-container {
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    z-index: 1;
}

.img-border {
    width: 100%;
    max-height: 100%;
}

.bg-container {
    width: 100%;
    /* background-image: url('../assets/images/backgrounds/bg-contact.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
}

.bg-dark-container {
    width: 100%;
    background-color: #2c2a2b;
}

.content-container {
    padding-top: 100px;
    padding-bottom: 100px;
}

.form {
    margin-top: 70px;
}

.contact-detail-box {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
}

.contact-detail-box-2 {
    margin-bottom: 30px;
    display: flex;
    align-items: flex-start;
}

.icon-box {
    width: 35px;
    height: 35px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.img-icon {
    max-width: 100%;
    max-height: 100%;
}

.inp-box {
    margin-bottom: 20px;
}

.form-control {
    min-height: 50px;
}

.btn-send {
    padding: 18px 80px;
    background-image: url('../assets/images/backgrounds/button-white.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: none;
}

.txt-submit{
    margin-top: 5px;
}

@media only screen and (max-width: 991px) {

    .pad-ri, .pad-le{
        padding: 0;
    }

    .inp-email {
        margin-bottom: 20px;
    }
}

@media only screen and (max-width: 767px) {

    .contact-detail-box,
    .contact-detail-box-2 {
        margin-bottom: 20px;
    }

    a,
    p {
        font-size: 17px;
    }

    .icon-box {
        width: 30px;
        height: 30px;
    }
}

@media only screen and (max-width: 575px) {

    a,
    p {
        font-size: 15px;
    }

    .icon-box {
        margin-right: 10px;
    }
}</style>