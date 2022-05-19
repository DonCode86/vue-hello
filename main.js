const app = new Vue({
    el: '#app',
    data: {
        message: "Primi passi Vue",
        img: "https://miro.medium.com/max/1024/1*vMbqi7D_I9ZufeE-Bh7Fiw.png",
        classe: "blue",
    },
    methods: {
        changeColor() {
            if (this.classe === "blue") {
                this.classe = "red";
            } else {
                this.classe = "blue";
            }
        }
    }
})