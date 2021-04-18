<template>
  <div class="relative bg-white">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex mb-10">
        <div class="flex-shrink-0">
          <img
            class="rounded-full profile-img"
            src="@/assets/img/profile.png"
            alt=""
          />
        </div>
        <div class="px-5 text-left flex flex-col justify-center">
          <div class="uppercase font-semibold text-xl text-gray-400">
            <span class="text-2xl text-gray-900">Account Settings /</span>
            {{ currentRouteName }}
          </div>
          <span class="mt-2 text-gray-500 text-base">Kevin Smith</span>
        </div>
      </div>
      <div class="md:flex">
        <div class="rounded-lg shadow-md max-w-sm w-full lg:w-3/12 h-72">
          <div
            class="rounded-lg p-8 bg-gray-50 shadow-xs overflow-hidden h-80 flex flex-col text-left"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="pt-2 pb-3">
              <router-link
                to="/account-setting/overview"
                active-class="text-blue-500"
                class="block py-2 rounded-md text-base font-semibold text-gray-700 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
                role="menuitem"
                >Overview</router-link
              >
              <router-link
                to="/account-setting/email-notification"
                active-class="text-blue-500"
                class="mt-1 block py-2 rounded-md text-base font-semibold text-gray-700 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
                role="menuitem"
                >Email Notifications</router-link
              >
              <router-link
                to="/account-setting/account-closure"
                active-class="text-blue-500"
                class="mt-1 block py-2 rounded-md text-base font-semibold text-gray-700 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
                role="menuitem"
                >Account Closure</router-link
              >
            </div>
          </div>
          <div>
            <router-link
              to="/foo"
              class="shadow-lg block rounded-md w-full px-5 py-4 text-center font-semibold text-green-500 bg-white hover:bg-green-500 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Sign Out <img class="inline" src="@/assets/img/logout.svg" />
            </router-link>
          </div>
        </div>
        <div class="rounded-lg text-left px-28">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  name: "Main",
};
</script>

<style scoped>
.profile-img {
  width: 86px;
  height: 86px;
  object-fit: contain;
}
</style>