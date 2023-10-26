<template>
    <div>
        <div class="main">
            <!-- <div class="circle"> -->
                <h3 class="pad-mar-no">
                    <slot name="title"></slot>
                </h3>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>

export default {

}

</script>

<style scoped>
h3 {
    font-weight: 900;
    color: white;
    font-family: 'YouthBrushDaylight';
    font-size: 80px;
}

.main{
    margin-bottom: 30px;
}

.circle {
    width: 35px;
    height: 35px;
    padding: 5px 0 0 15px;
    background-color: #732424;
    border-radius: 50%;
}

@media only screen and (max-width: 575px) {

h3{
    font-size: 50px;
}
}
</style>