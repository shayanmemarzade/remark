<template>
  <h4 class="font-bold text-xl text-gray-700 mb-2">
    Delete #Remarkable account
  </h4>
  <p class="mb-6 text-gray-500">
    Your account will be permanently deleted and you won’t be able to retreive
    the information that you shared on #Remarkable.
  </p>

  <button
    class="flex px-6 py-4 border-b-4 border-red-800 text-base font-semibold rounded-md text-white bg-red-700 hover:bg-red-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
    @click="$refs.deleteAccount.openModal()"
  >
    Delete account
  </button>
  <DeleteAccount ref="deleteAccount" />
</template>

<script>
import DeleteAccount from "./Delete-account.vue";

export default {
  name: "AccountClosure",
  props: {
    msg: String,
  },
  components: {
    DeleteAccount,
  },
};
</script>

<style scoped>
</style>
