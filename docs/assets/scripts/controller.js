// index.html'in çalışabilmesi için gerekli 
// fonksiyonları barındıran kendi yazdığım Controller.
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

new Vue({
  el: "#card_app",
  data: {
    imgs: [
      "assets/res/site/img/0victoria.jpg",
      "assets/res/site/img/0peace.jpg",
      "assets/res/site/img/0aviator.jpg",
      "assets/res/site/img/0hendrix.jpg",
      "assets/res/site/img/0pickup.jpg",
      "assets/res/site/img/0episode5.jpg",
      "assets/res/site/img/0adam.jpg",
      "assets/res/site/img/0norman.jpg",
      "assets/res/site/img/0slash.jpg",
      "assets/res/site/img/0dave.jpg",
      "assets/res/site/img/0leger.jpg",
      "assets/res/site/img/0riff_lord.jpg",
      "assets/res/site/img/0guitar.jpg",
      "assets/res/site/img/0virtual.jpg",
      "assets/res/site/img/0string.jpg",
      "assets/res/site/img/0g3.jpg",
    ],
  },
});

new Vue({
  el: "#footer_app",
  data: {
    gmodels: [
      "Les Paul Models",
      "SG Models",
      "ES-Style Models",
      "Basses",
      "Designer Models",
      "Gibson Custom Shop",
      "Super Jumbo Models",
      "Square Shoulder Models",
      "Round Shoulder Models",
      "Small Body Models",
      "Songwriter Models",
      "Gibson Gear",
      "Gibson Hardware",
      "Gibson Lifestyle & Apparel",
    ],
    ourcomp: [
      "About Gibson Brands",
      "Careers",
      "Contact Us",
      "News",
      "Gibson TV",
      "Gibson Gives",
      "Gibson Generation Group",
    ],
    supp: [
      "Customer Service",
      "Virtual Guitar Tech",
      "Warranty Registration & Info",
      "Repair and Restoration",
      "Report Counterfeits",
      "Serial Number FAQ",
      "Store Policies & FAQ",
      "Gibson Guitar Specs (2015-2019)",
    ],
    dealer: [
      "Find a Gibson Dealer",
      "Online Dealers",
      "Dealer Resource Center",
    ],
  },
});
