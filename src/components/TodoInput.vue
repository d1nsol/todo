<template>
    <!-- 할 일 입력 및 추가 -->
    <div class="inputBox shadow">
        <!-- v-on:keyup.enter : enter 입력 동작 -->
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do..." v-on:keypress.enter="addTodo">
        <!-- <button v-on:click="addTodo">추가</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus-square" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" v-on:close="showModal = false">
            <!-- modal header -->
            <h3 slot="header">경고</h3>

            <!-- modal footer -->
            <span slot="footer" v-on:click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>
</template>
<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: '',
            showModal : false
        }
    },
    methods: {
        addTodo: function() {
            if(this.newTodoItem !== '') {
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    },
    components : {
        Modal: Modal
    }
}
</script>
<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #c9c14f, #7cfb63);
        display: block;
        width: 3rem;
        border-radius: 0 10px 10px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>