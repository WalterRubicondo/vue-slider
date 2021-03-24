var app = new Vue ({

  el: "#root",
  data: {
    index: 0,
    imgArray:[
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
      "https://www.architetturaecosostenibile.it/images/stories/2016/promuoviamo-paesaggio-italiano.jpg"
    ],
  },
  methods: {
      next: function (){
        if (this.index < this.imgArray.length - 1) {
          this.index ++;
        } else {
          this.index = 0;
        }
      },
      prev: function (){
        if (this.index > 0) {
          this.index --;
        } else {
          this.index = this.imgArray.length - 1;
        }
      },
      selector: function (index) {
        this.index = index;
      },
      autoPlay: function () {
        var temp = this;
        setInterval(function () {
          if (temp.index < temp.imgArray.length - 1) {
            temp.index ++;
          } else {
            temp.index = 0;
          }
        }, 3000);
    }
  },
  created: function () {
    setInterval(this.next,3000);
  }
})
