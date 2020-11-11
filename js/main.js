// javascript

const todo = new Vue({
  el: '#todo',
  data: {

    btn: [
      "hulk",
      "captain america",
      "captain marvel",
    ],

    heroes: "",

  },
  methods:{
    pushHero(){
      if (this.heroes.trim() !== "") {
        this.btn.push(this.heroes);
        this.heroes="";
      }
    },
    removeHero(index){
      this.btn.splice(index,1);
    },
  }
});

// indexImg: 0,
// img: [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmrg98woXL2VjNUuDx8bEOYPujv0FsiBMp3g&usqp=CAU",
//   "https://primavercelli.it/media/2018/09/captain-america.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW8cBhGx_3CxBLsuwdQA3miY1W89hdzGz9AA&usqp=CAU",
//   "https://a-static.besthdwallpaper.com/fumo-caldo-black-widow-sfondo-1920x1080-32260_48.jpg",
//   "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abf4cac3-b714-4504-9957-0529ad89c60a/d2ounnu-664c8107-9a7d-4758-b324-95fa351156cc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWJmNGNhYzMtYjcxNC00NTA0LTk5NTctMDUyOWFkODljNjBhXC9kMm91bm51LTY2NGM4MTA3LTlhN2QtNDc1OC1iMzI0LTk1ZmEzNTExNTZjYy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7FjdQoeTnUAtnW77otRgE-27P1wrZsmCH_CmUI9wEBE",
//   "https://c4.wallpaperflare.com/wallpaper/835/7/584/marvel-comics-spider-man-the-avengers-avengers-infinity-war-wallpaper-preview.jpg",
//   "https://images.everyeye.it/img-topscheda/thor-v7-9913-1280.jpg",
//   "https://www.gamelegends.it/wp-content/uploads/2020/05/Doctor-Strange.jpg",
//   "https://www.drcommodore.it/wp-content/uploads/2019/01/nick-fury-captain-america-the-winter-soldier-min-990x619.jpg",
//   "https://a-static.besthdwallpaper.com/ant-man-avengers-endgame-sfondo-2560x1600-25780_7.jpg",
//   "https://images.everyeye.it/img-articoli/black-panther-storia-eroe-comune-cinema-fumetti-v7-34370.jpg",
//   "https://images.everyeye.it/img-notizie/mcu-sebastian-stan-indossato-protesi-soldato-d-inverno-v3-340171.jpg",
//   "https://c4.wallpaperflare.com/wallpaper/859/577/154/guardians-of-the-galaxy-marvel-comics-star-lord-gamora-wallpaper-preview.jpg",
//   "https://images.everyeye.it/img-notizie/avengers-4-marvel-anticipa-trailer-video-visione-v4-348360.jpg",
// ],
// "vedova nera",
// "ironman",
// "spiderman",
// "thor",
// "doctor-strange",
// "fury",
// "ant-man",
// "black panter",
// "soldato d'inverno",
// "guardiani della galassia",
// "visione",
