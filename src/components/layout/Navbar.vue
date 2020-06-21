<template>
    <header id="header">
        <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #056E34">
            <router-link to="/" class="nav-brand">
                <img src="../../assets/logo_medprev.png" alt="Logo">
            </router-link>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li
                        v-for="item in items"
                        :key="item.id"
                        :class="[currentPage.includes(item.path) ? 'active': '' ]" class="nav-item">
                        <router-link :to="`/${item.path}`" class="nav-link">
                            <span :class="item.icon"></span> {{ item.text }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            activeClass: 'active',
            items: [
                {
                    id: 1,
                    path: 'clientes',
                    icon: 'fa fa-users',
                    text: 'CLIENTES',
                },
            ],
        };
    },
    computed: {
        currentPage() {
            return this.$route.path;
        },
    },
};
</script>

<style scoped>
#header .navbar-nav .nav-link {
    font-weight: 400;
    color: #ffffff;
    padding: 30px 0 29px;
    font-size: 15px;
    margin: 0 14px;
    position: relative;
    text-transform: uppercase;
}

#header .navbar-nav .nav-link:hover:before, .nav-link:focus:before, .active .nav-link:before {
    content: "";
    width: 100%;
    height: 3px;
    background: #01b759;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
