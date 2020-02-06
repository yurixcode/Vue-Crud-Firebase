<template>
  <div id="app">
    <router-link :to="{ name: 'inicio' }">
      <img src="@/assets/logo.png" alt="vue-logo">
    </router-link>
    <router-view/>
  </div>
</template>

<style>