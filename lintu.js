function Lintu() {
  this.x = 275;
  this.y = 385;


  this.gravity  = 0;
  this.velocity = 0;

  this.show = function() {
    if (this.velocity < 0.4 ) {
      image(kuva2, lintu.x, lintu.y);
    } else {
      image(kuva1, lintu.x, lintu.y);
    }
    //fill(0)
    //ellipse(this.x, this.y, 50, 50)



  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

  this.ylös = function() {
    this.velocity = -8
  }

}
}
