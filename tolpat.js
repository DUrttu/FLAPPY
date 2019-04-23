function Tolppa() {
  this.x = 601;
  this.top = random(height - 160);
  this.bottom = this.top + 150;
  this.w = 25;
  this.xspeed = 2;



  this.show = function() {
      fill(255, 0, 0);
      rect(this.x, 0, this.w, this.top);
      rect(this.x, this.bottom, this.w, height);
  }

  this.update = function() {

    this.x -= this.xspeed;
    this.test1 = lintu.y - 25;
    this.test2 = lintu.y + 25;
    this.test3 = lintu.x + 25;
    this.test4 = lintu.x - 25;
  }

    this.hits = function(lintu) {
      if (this.test1 < this.top || this.test2 > this.bottom) {
        if (this.test3 > this.x && this.test4 < this.x + this.w)
        return true;
      }
    }


  }
