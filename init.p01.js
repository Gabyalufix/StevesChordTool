

function instrument(
   instrumentName,
   stringIIX,
   fretSpacing,
   fretDots,
   fretDoubleDots,
   abbrivName,
   blackoutFrets,
   stringOctaves
  ){
    this.instrumentName = instrumentName;
    this.stringIIX = stringIIX;
    this.fretSpacing = fretSpacing;
    this.fretDots = fretDots;
    this.fretDoubleDots = fretDoubleDots;
    this.abbrivName = abbrivName;
    this.blackoutFrets = blackoutFrets;
	this.stringOctaves = stringOctaves;
    
    this.copyInstrument = function(){
       return new instrument(this.instrumentName,
                         this.stringIIX.slice(),
                         this.fretSpacing.slice(),
                         this.fretDots.slice(),
                         this.fretDoubleDots.slice(),
                         this.abbrivName,
                         this.blackoutFrets,
						 this.stringOctaves)
    }
}

















