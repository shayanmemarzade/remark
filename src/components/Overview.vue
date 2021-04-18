<template>
  <h4 class="font-bold text-xl text-gray-700 mb-2">Email address</h4>
  <p class="mb-6 text-gray-500 text-xs">
    Email address linked to your #Remarkable account
  </p>
  <label class="block mb-10">
    <span class="text-gray-800 font-semibold text-xs">Your Email</span>
    <input
      type="text"
      class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 lg:w-7/12"
      placeholder="abc@xyz.com"
    />
  </label>

  <h4 class="font-bold text-xl text-gray-700 mb-2">Account recovery code</h4>
  <p class="mb-6 text-gray-500 text-xs">
    Below is your unique account recovery code. Please copy this at a safe place
    as it will help you recover your lost #Remarkable account
  </p>
  <h3 class="text-blue-500 font-bold text-2xl mb-10">
    543464 <img class="inline" src="@/assets/img/duplicate.svg" />
  </h3>
  <button
    class="rounded flex px-8 py-3 border-b-4 border-green-700 text-base   rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
  >
    Save changes
  </button>
</template>

<script>
export default {
  name: "Overview",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
