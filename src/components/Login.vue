<template>
  <a
    @click="
      step = 'Login';
      showCode = false;
    "
    v-if="step != 'Login'"
    class="mb-6 text-left text-xs text-gray-700 hover:cursor-pointer"
  >
    <img class="inline mr-2" src="@/assets/img/arrow-narrow-left.svg" /> Back to
    SignIn</a
  >
  <div v-if="step == 'Login'">
    <label class="block mb-6 text-left">
      <span class="text-green-500 text-xs font-semibold">Email address</span>
      <input
        type="text"
        class="mt-1 block w-full rounded-md border-green-500 py-3 px-4"
        placeholder="abc@xyz.com"
      />
    </label>
    <label class="block mb-10 text-right">
      <span class="text-green-500 text-sm underline" @click="step = 'Recover'"
        >Recover account</span
      >
    </label>
    <button
      class="block w-full px-8 py-3 border-b-4 border-green-700 text-base font-semibold rounded-md text-white bg-green-500 hover:bg-green-400 transition duration-150 ease-in-out text-center"
    >
      Continue
    </button>
  </div>
  <div v-if="step == 'Recover'">
    <h4 class="text-left text-gray-700 font-bold text-xl mb-5">
      Recover your account
    </h4>
    <label class="block mb-10 text-left">
      <span class="text-gray-700 text-xs font-semibold"
        >Enter your recover code <span class="text-green-500">*</span></span
      >
      <input
        type="text"
        class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4"
        placeholder="e.g. 234546"
      />
    </label>
    <button
      class="block w-full px-8 py-3 border-b-4 border-green-700 text-base   rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 text-center"
      @click="step = 'RecoverStep2'"
    >
      Verify Recovery Code
    </button>
  </div>
  <div v-if="step == 'RecoverStep2'">
    <h4 class="text-left text-gray-700 font-bold text-xl mb-5">
      Recover your account
    </h4>
    <label class="block mb-3 text-left">
      <span class="text-gray-700 text-xs font-semibold"
        >Old email address <span class="text-green-500">*</span></span
      >
      <input
        type="email"
        class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4"
        placeholder="kevinsmith@gmail.com"
      />
    </label>
    <label class="block mb-10 text-left">
      <span class="text-gray-700 text-xs font-semibold"
        >New email address <span class="text-green-500">*</span></span
      >
      <input
        type="email"
        class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4"
        placeholder="kevinsmith@remarkable.com"
      />
    </label>
    <button
      class="block w-full px-8 py-3 border-b-4 border-green-700 text-base   rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 text-center"
      @click="showCode = true"
      v-if="!showCode"
    >
      Get confirmation code on new mail
    </button>
    <div class="" v-if="showCode">
      <hr class="mb-6 border-gray-300" />
      <p class="text-sm text-gray-800 mb-4 text-left">
        We have sent a 6 digit code to your <b>new email address</b>. Please
        enter the code in order to recover your account.
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
          class="w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
          placeholder="0"
        />
        <input
          type="text"
          class="w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
          placeholder="0"
        />
        <input
          type="text"
          class="w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
          placeholder="0"
        />
        <input
          type="text"
          class="w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
          placeholder="0"
        />
        <input
          type="text"
          class="w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          maxlength="1"
          placeholder="0"
        />
      </div>
      <button
        class="block w-full px-8 py-3 border-b-4 border-green-700 text-base   rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 text-center"
      >
        Recover Account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      step: "Login",
      showCode: false,
    };
  },
};
</script>