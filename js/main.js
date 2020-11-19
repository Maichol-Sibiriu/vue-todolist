// javascript

const todo = new Vue({
  el: '#todo',
  data: {

    btn: [
      "fare la spesa",
      "pulire casa",
      "far da mangiare",
    ],

    heroes: "",

    indexTodo: 0,
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
    act(index){
       this.indexTodo = index;
     },

  },
});
