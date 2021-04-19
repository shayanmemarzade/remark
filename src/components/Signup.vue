<template>
  <a
    @click="step = 'Signup'"
    v-if="step != 'Signup'"
    class="mb-6 text-xs text-gray-700 text-left hover:cursor-pointer font-lato-regular"
    ><img class="inline mr-2" src="@/assets/img/arrow-narrow-left.svg" /> Back
    to Details</a
  >
  <div v-if="step == 'Signup'">
    <div class="flex">
      <label class="mb-4 mr-3 text-left w-6/12">
        <span class="text-gray-700 text-xs font-semibold font-lato-semibold"
          >First Name <span class="text-green-500">*</span></span
        >
        <input
          type="text"
          class="font-lato-regular mt-1 block w-full rounded-md border-gray-300 py-3 px-4"
          placeholder="Kevin"
        />
      </label>
      <label class="mb-4 ml-3 text-left w-6/12">
        <span class="text-gray-700 text-xs font-semibold font-lato-semibold"
          >Last Name <span class="text-green-500">*</span></span
        >
        <input
          type="text"
          class="font-lato-regular mt-1 block w-full rounded-md border-gray-300 py-3 px-4"
          placeholder="Smith"
        />
      </label>
    </div>
    <label class="block mb-7 text-left w-full">
      <span
        class="text-gray-700 text-xs font-semibold text-left block font-lato-semibold"
        >Email address <span class="text-green-500">*</span></span
      >
      <input
        type="text"
        class="font-lato-regular mt-1 block w-full rounded-md border-gray-300 py-3 px-4"
        placeholder="kevinsmith@remarkable.com"
      />
    </label>
    <label class="block mb-7 text-left">
      <input
        type="checkbox"
        class="rounded text-green-500 mr-2 w-6 h-6 focus:outline-none"
      />
      <span class="text-gray-700 text-sm font-lato-regular"
        >I am 16 years old or older</span
      >
    </label>
    <label class="block mb-10 text-left">
      <input
        type="checkbox"
        class="rounded text-green-500 mr-2 w-6 h-6 focus:outline-none"
      />
      <span class="text-gray-700 text-sm font-lato-regular"
        >I have read, understand and agree to #Remarkable’s</span
      >
      <span class="text-gray-700 text-sm font-lato-regular"
        ><a class="text-green-500 underline"> Privacy Policy </a> and
        <a class="text-green-500 underline"> Terms of Service </a></span
      >
    </label>
    <button
      class="font-lato-semibold block mb-2 w-full px-8 py-3 border-b-4 border-green-700 text-base font-semibold rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none transition duration-150 ease-in-out text-center"
      @click="step = 'Step2'"
    >
      Continue
    </button>
    <p class="font-lato-regular text-left text-xs">
      Your data is not for sale, we are serious about privacy. No ads, no
      spyware ever.
    </p>
  </div>
  <div v-if="step == 'Step2'">
    <h4 class="text-left text-gray-700 font-bold text-xl mb-5 font-nunito-bold">
      One last step!
    </h4>
    <div class="">
      <p class="text-sm text-gray-700 text-left mb-8 font-lato-regular">
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
          class="font-lato-semibold w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
          placeholder="0"
        />
        <input
          type="text"
          class="font-lato-semibold w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
          placeholder="0"
        />
        <input
          type="text"
          class="font-lato-semibold w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
          placeholder="0"
        />
        <input
          type="text"
          class="font-lato-semibold w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
          placeholder="0"
        />
        <input
          type="text"
          class="font-lato-semibold w-12 h-12 text-xl font-semibold mr-2 rounded-md border-gray-400 text-gray-700 text-center"
          maxlength="1"
          placeholder="0"
        />
      </div>
      <button
        class="font-lato-semibold block mb-2 w-full px-8 py-3 border-b-4 border-green-700 text-base font-semibold rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none transition duration-150 ease-in-out text-center"
      >
        Sign Up
      </button>
      <p class="text-xs font-lato-regular">
        Your data is not for sale, we are serious about privacy. No ads, no
        spyware ever.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      step: "Signup",
      showCode: true,
    };
  },
};
</script>
