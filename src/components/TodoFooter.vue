<template>
    <!-- 할 일 모두 삭제 -->
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">
            <i class="fas fa-eraser"></i>
            Clear Todo
        </span>
    </div>
</template>
<script>
export default {
    methods: {
        clearTodo: function() {
            this.$emit('removeAll');
        }
    }
}
</script>
<style scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: #c55e5e;
        border-radius: 10px;
        margin: 0 auto;
    }
    .clearAllBtn {
        color: black;
        display: block;
    }
</style>