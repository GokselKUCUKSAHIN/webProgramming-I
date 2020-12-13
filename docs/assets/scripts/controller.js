new Vue({
  el: "#navbar_app",
  data: {
    isMobile: false,
    isOpen: false,
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  mounted() {
    this.toggle(window.innerWidth);
  },
  methods: {
    hamburgerClick() {
      this.isOpen = !this.isOpen;
    },
    toggle(width) {
      this.isMobile = width < 992;
      if (this.isOpen === true && this.isMobile === false) {
        this.isOpen = false;
      }
    },
    myEventHandler(e) {
      //console.log(e.target.innerWidth);
      this.toggle(e.target.innerWidth);
    },
  },
});