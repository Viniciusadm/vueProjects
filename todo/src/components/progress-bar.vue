<template>
    <div class="progressBar">
        <div class="outside">
            <p class="progressNumber">{{ progress }}%</p>
            <div :style="{width: progress + '%'}" class="progress"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
    .progressNumber {
        text-align: center;
        font-size: 1.3rem;
        position: absolute;
    }
    .outside {
        width: 90vw;
        height: 3rem;
        border: 1px white solid;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .progress {
        height: 100%;
        background-color: green;
        border-radius: 0.5rem;
        transition: width 1s;
    }
</style>