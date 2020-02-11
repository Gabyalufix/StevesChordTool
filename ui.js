
var coll = document.getElementsByClassName("collapsible");
var i;

for (var i = 0; i < coll.length; i++) {
  var cc = coll[i];
  cc.ELEMS_CONTENT = cc.nextElementSibling;
  cc.ELEMS_MODE1 = cc.ELEMS_CONTENT.getElementsByClassName("COLLAPSE_MODE1")
  cc.ELEMS_MODE2 = cc.ELEMS_CONTENT.getElementsByClassName("COLLAPSE_MODE2")

  if(cc.ELEMS_MODE2.length > 0){
    cc.MODALITY = "TRIPLE"
    cc.CURRMODE = "MODE2";
      cc.addEventListener("click", function() {
        if(this.CURRMODE == "MODE0"){
          console.log("MODE 1");
          this.CURRMODE = "MODE1";
          this.classList.toggle("active");
          this.ELEMS_CONTENT.style.display = "block";
          if(this.ELEMS_MODE1.length > 0){
            for(var i=0; i < this.ELEMS_MODE1.length;i++){
               this.ELEMS_MODE1[i].style.display = "block";
            }
          }
        } else if(this.CURRMODE == "MODE1"){
          if(this.ELEMS_MODE2.length > 0){
            var anyActive=false;
            for(var i=0; i < this.ELEMS_MODE2.length;i++){
              anyActive = anyActive || this.ELEMS_MODE2[i].overrideMode == null || (! this.ELEMS_MODE2[i].overrideMode)
            }
            if(! anyActive){
              console.log("SKIP MODE 2, goto MODE0");
              this.CURRMODE = "MODE0"
              this.classList.toggle("active");
              this.ELEMS_CONTENT.style.display = "none";
              if(this.ELEMS_MODE1.length > 0){
                for(var i=0; i < this.ELEMS_MODE1.length;i++){
                   this.ELEMS_MODE1[i].style.display = "none";
                }
              }
            } else {
              console.log("MODE 2");
              this.CURRMODE = "MODE2"
              if(this.ELEMS_MODE1.length > 0){
                for(var i=0; i < this.ELEMS_MODE1.length;i++){
                   this.ELEMS_MODE1[i].style.display = "none";
                }
              }
              if(this.ELEMS_MODE2.length > 0){
                for(var i=0; i < this.ELEMS_MODE2.length;i++){
                   this.ELEMS_MODE2[i].style.display = "block";
                }
              }
            }
          }
        

        } else if(this.CURRMODE == "MODE2"){
          console.log("MODE 0");
          this.CURRMODE = "MODE0"
          this.classList.toggle("active");
          this.ELEMS_CONTENT.style.display = "none";
          if(this.ELEMS_MODE2.length > 0){
            for(var i=0; i < this.ELEMS_MODE2.length;i++){
               this.ELEMS_MODE2[i].style.display = "none";
            }
          }

        } else {
          console.log("ERROR: Impossible STATE: " +this.CURRMODE)
        }
      });

  } else {
    cc.MODALITY = "SIMPLE"
      cc.addEventListener("click", function() {

        this.classList.toggle("active");
        if (this.ELEMS_CONTENT.style.display === "none") {
          this.ELEMS_CONTENT.style.display = "block";
        } else {
          this.ELEMS_CONTENT.style.display = "none";
        }
      });
  }


}
