<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/product">About us</router-link> |
        <router-link to="/dev">Dev</router-link>
        <!-- Remember to delete dev -->
    </nav>
    <!-- Language and dark mode should be here -->
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
