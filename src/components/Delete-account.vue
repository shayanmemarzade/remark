<template>
  <transition name="fade">
    <div
      class="modal fixed z-9 top-0 right-0 bottom-0 left-0 overflow-x-hidden overflow-y-auto"
      v-if="showDelete"
    >
      <div
        class="modal__backdrop fixed w-full h-full z-1 opacity-50 bg-gray-300 top-0 left-0"
        @click="closeModal()"
      />
      <div class="modal__dialog p-10">
        <div class="modal__header">
          <span class="block text-2xl text-gray-900 font-bold"
            >Delete account</span
          >
          <button type="button" class="modal__close" @click="closeModal()">
            <img src="@/assets/img/x.svg" />
          </button>
        </div>
        <div class="modal__body">
          <p class="text-sm text-gray-500 mb-8">
            Your account will be permanently deleted and you won’t be able to
            retreive the information that you shared on #Remarkable. Please
            enter your email address to get an account deletion code -
          </p>
          <label class="block mb-10 text-left">
            <span class="text-gray-800 font-semibold text-xs"
              >Enter your email address</span
            >
            <input
              type="email"
              class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 lg:w-7/12"
              placeholder="abc@xyz.com"
            />
          </label>
          <div class="" v-if="step == 'deleteStep1'">
            <button
              class="px-6 py-4 border-b-4 border-green-700 text-base font-semibold rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none transition duration-150 ease-in-out text-center"
              @click="step = 'deleteStep2'"
            >
              Get account deletion code
            </button>
          </div>
          <div class="" v-if="step == 'deleteStep2'">
            <hr class="mb-6 border-gray-300" />
            <p class="text-sm text-gray-800 mb-4">
              We have sent a 6 digit code to your <b>email address</b>. Please
              enter the code in order to delete your account.
            </p>

            <div class="flex mb-10">
              <input
                type="text"
                class="w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
                v-on:keyup="$event.target.nextElementSibling.focus()"
                maxlength="1"
                placeholder="0"
              />
              <input
                type="text"
                class="w-12 h-12 text-xl font-semibold mx-2 rounded-md border-gray-400 text-gray-700 text-center"
                v-on:keyup="$event.target.nextElementSibling.focus()"
                maxlength="1"
                placeholder="0"
              />
              <input
                type="text"
                class="w-12 h-12 text-xl font-semibold mx-2 rounded-md border-gray-400 text-gray-700 text-center"
                v-on:keyup="$event.target.nextElementSibling.focus()"
                maxlength="1"
                placeholder="0"
              />
              <input
                type="text"
                class="w-12 h-12 text-xl font-semibold mx-2 rounded-md border-gray-400 text-gray-700 text-center"
                v-on:keyup="$event.target.nextElementSibling.focus()"
                maxlength="1"
                placeholder="0"
              />
              <input
                type="text"
                class="w-12 h-12 text-xl font-semibold mx-2 rounded-md border-gray-400 text-gray-700 text-center"
                v-on:keyup="$event.target.nextElementSibling.focus()"
                maxlength="1"
                placeholder="0"
              />
              <input
                type="text"
                class="w-12 h-12 text-xl font-semibold ml-2 rounded-md border-gray-400 text-gray-700 text-center"
                maxlength="1"
                placeholder="0"
              />
            </div>

            <button
              class="px-8 py-3 border-b-4 border-red-700 text-base   rounded-md text-white bg-red-500 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 text-center"
              @click="step = 'deleteStep2'"
            >
              Get account deletion code
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.showDelete = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.showDelete = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
  },
  name: "DeleteAccount",
  data() {
    return {
      showDelete: false,
      step: "deleteStep1",
    };
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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