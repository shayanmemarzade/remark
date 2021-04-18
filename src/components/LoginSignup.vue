<template>
  <transition name="fade">
    <div
      class="modal fixed z-9 top-0 right-0 bottom-0 left-0 overflow-x-hidden overflow-y-auto"
      v-if="show"
    >
      <div
        class="modal__backdrop fixed w-full h-full z-1 opacity-50 bg-gray-300 top-0 left-0"
        @click="closeModal()"
      />
      <div class="modal__dialog p-10">
        <div class="modal__header">
          <img src="@/assets/img/logo.svg" alt="logo" />
          <button type="button" class="modal__close" @click="closeModal()">
            <img src="@/assets/img/x.svg" />
          </button>
        </div>
        <div class="bg-gray-50 py-5">
          <span
            class="mx-2 text-xl font-bold hover:cursor-pointer"
            @click="tab = 'signin'"
            >SIGNIN</span
          >
          <span class="mx-2">|</span>
          <span
            class="mx-2 text-xl font-bold hover:cursor-pointer"
            @click="tab = 'signup'"
            >SIGNUP</span
          >
        </div>
        <div class="modal__body">
          <Signin v-if="tab == 'signin'" />
          <Signup v-if="tab == 'signup'" />
        </div>
      </div>
    </div>
  </transition>
 
</template>

<script>
import Signin from "./Login.vue";
import Signup from "./Signup.vue";
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
  },
  name: "LoginSignup",
  data() {
    return {
      show: false,
      tab: "signin",
    };
  },
  components: {
    Signin,
    Signup,
  },
};
</script>

<style scoped>
.modal {
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
}

.modal__backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.modal__dialog {
  position: relative;
  width: 600px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
}
@media screen and (max-width: 992px) {
  .modal__dialog {
    width: 90%;
  }
}
.modal__close {
  width: 30px;
  height: 30px;
}
.modal__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 20px 10px;
}
.modal__body {
  padding: 10px 20px 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.modal__footer {
  padding: 10px 20px 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>