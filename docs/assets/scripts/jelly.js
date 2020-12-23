new Vue({
  el: "#app",
  data: {
    aboutMe:
      "Ben Göksel KÜÇÜKŞAHİN, Erciyes Üniversitesi\
     Bilgisayar Mühendisliği 4. öğrencisiyim. 1998'de \
    Kayseri Kocasinan'da doğdum. İlk ve orta okulu \
    Osman Düşüngel Orta Okulunda; Liseyi Melikgaz\
     Mustafa Eminoğlu Lisesinde okudum.",
    details:
      "Küçük yaştan itibaren teknoloji \
     ve bilgisayarlara karşı ilgili olmamdan dolayı \
     Bilgisayar Mühendisi olmaya karar verdim. Hobilerim; Akrilik \
     tablo yapmak🎨 ve video oyunları🕹. Ayrıca sıkı Star Wars🌑 ve IronMaiden \
     hayranıyımdır🤘. ",
    egg: "ve JOJO!",
    link: "https://youtu.be/2MtOpB5LlUA?t=72",
    screensize: {
      w: 0,
      h: 0,
    },
    isActive: false,
    ee: false,
    kenStyle: "left: -100px; top: 3000px;",
    count: 0,
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  mounted() {
    this.updateScreen(window.innerWidth, window.innerHeight);
  },
  methods: {
    countUp() {
      this.count++;
      // console.log(this.count);
      if (this.count >= 7) {
        this.count = 0;
        this.jumpKen();
      }
    },
    updateKen(l, t) {
      this.kenStyle = `left: ${l}px; top: ${t}px`;
    },
    jumpKen() {
      this.ee = true;
      this.isActive = true;
      let kx = this.screensize.w / 2;
      let ky = this.screensize.h + 50;
      let step = this.screensize.h / 100;
      var intID = setInterval(() => {
        ky -= step;
        // console.log(kx, ky);
        this.updateKen(kx, ky);
        if (ky < -350) {
          clearInterval(intID);
          this.isActive = false;
          this.updateKen(-100, 3000);
        }
      }, 12);
    },
    updateScreen(win_w, win_h) {
      this.screensize.w = win_w;
      this.screensize.h = win_h;
      // console.log(`sw: ${this.screensize.w}, sh: ${this.screensize.h}`);
    },
    myEventHandler(e) {
      this.updateScreen(e.target.innerWidth, e.target.innerHeight);
    },
    toggleDiv(e) {
      // console.log(e.target);
      btn = e.target;
      if (btn.classList != null && btn.classList[0] != "accordion") {
        do {
          btn = btn.parentElement;
          // console.log("WHILE");
        } while (btn.classList[0] != "accordion");
      }
      btn.classList.toggle("active");
      var panel = btn.nextElementSibling;
      panel.classList.toggle("hide");
      // console.log(panel.className);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px"; // dynamic height
        // console.log(panel.style.maxHeight);
        // if(panel.style.maxHeight )
        let ratio = (panel.style.maxHeight + "").replace("px", "") / 100;
        let animDelay = "0.5";
        if (ratio > 1 && ratio <= 5) {
          animDelay = 0.5 + (ratio - 1) * 0.112;
        }
        else if (ratio > 5 && ratio <= 10){
          animDelay = 0.5 + (ratio - 1) * 0.05;
        }
        else if (ratio > 10){
          animDelay = 0.5 + (ratio - 1) * 0.025;
        }
        panel.style.transition = `max-height ${animDelay}s ease`;
        // console.log(animDelay);
      }
    },
  },
});
