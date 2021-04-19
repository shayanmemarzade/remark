<template>
  <transition name="fade">
    <div
      class="modal fixed z-9 top-0 right-0 bottom-0 left-0 overflow-x-hidden overflow-y-auto w-"
      v-if="show"
    >
      <div
        class="modal__backdrop fixed w-full h-full z-1 opacity-50 bg-gray-300 top-0 left-0"
        @click="closeModal()"
      />
      <div class="modal__dialog m-auto lg:mt-16 relative bg-white flex flex-col w-full lg:max-w-lg h-full ">
        <div class="modal__header flex items-start justify-between p-10 ">
          <img src="@/assets/img/logo.svg" alt="logo" />
          <button type="button" class="modal__close" @click="closeModal()">
            <img src="@/assets/img/x.svg" />
          </button>
        </div>
        <div class="bg-gray-50 py-5">
          <span
            class="font-nunito-bold mx-2 text-xl font-bold hover:cursor-pointer"
            @click="tab = 'signin'"
            >SIGNIN</span
          >
          <span class="mx-2">|</span>
          <span
            class="font-nunito-bold mx-2 text-xl font-bold hover:cursor-pointer"
            @click="tab = 'signup'"
            >SIGNUP</span
          >
        </div>
        <div class="modal__body flex flex-col overflow-auto p-10 ">
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
@media screen and (min-width: 992px) {
  .modal__dialog {
    height: initial;
  }
}
.modal {
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
}

.modal__backdrop {
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.modal__dialog {
  border-radius: 5px;
  z-index: 2;
}

.modal__close {
  width: 30px;
  height: 30px;
}
.modal__header {
  padding: 20px 20px 10px;
}
.modal__body {
  padding: 10px 20px 10px;
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