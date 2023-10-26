<template>
    <div>
        <div class="card">
            <div class="number-box">
                <p class="number">
                    <slot name="number"></slot>
                </p>
            </div>
            <div class="icon-box">
                <slot name="icon"></slot>
            </div>
            <p class="title">
                <slot name="title"></slot>
            </p>
            <p class="description">
                <slot name="description"></slot>
            </p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>

p{
    color: white;
}

.card {
    padding: 0 20px 40px 20px;
    background-color: black;
}

.number-box {
    display: flex;
    justify-content: flex-end;
}

.number {
    font-size: 50px;
    font-weight: 900;
}

.icon-box{
    width: 45px;
    height: 45px;
    background-color: rgb(255, 145, 0);
}
</style>