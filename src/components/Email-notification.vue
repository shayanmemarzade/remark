<template>
  <h4 class="font-bold text-xl text-gray-700 mb-2 font-nunito-bold">Alerts & Notifications</h4>
  <p class="mb-6 text-gray-500 text-xs font-lato-regular">
    Select the alerts & notifications your would like to receive
  </p>
  <label class="block mb-7">
    <input
      type="checkbox"
      class="rounded text-green-500 mr-2 w-6 h-6 focus:outline-none"
    />
    <span class="text-gray-700 text-sm font-lato-regular"
      >Updates related to account activity</span
    >
  </label>
  <label class="block mb-12">
    <input
      type="checkbox"
      class="rounded text-green-500 mr-2 w-6 h-6 focus:outline-none"
    />
    <span class="text-gray-700 text-sm font-lato-regular"
      >New feature updates from #Remarkable team</span
    >
  </label>

  <button
    class="font-lato-semibold flex px-6 py-4 border-b-4 border-green-700 text-base font-semibold rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none transition duration-150 ease-in-out"
  >
    Save changes
  </button>
</template>

<script>
export default {
  name: "EmailNotification",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
