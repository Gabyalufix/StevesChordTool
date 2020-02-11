


var pianoKeys = document.getElementsByClassName("PIANO_KEY");
for( var nidx = 0; nidx < pianoKeys.length; nidx++){
    var fiix = nidx % 12;
    var pk = pianoKeys[nidx];
    pk.fiix = fiix;
    pk.onclick = function(){
               if(this.classList.contains("PIANO_ACTIVEKEY")){
                   delNoteToChord(this.fiix);
               } else {
                   addNoteToChord(this.fiix);
               }
    }
    /*pk.onmousedown = function(event){
            if(event.button == 0){
               if(! this.classList.contains("PIANO_ACTIVEKEY")){
                   addNoteToChord(this.fiix);
               }
            } else if(event.button == 2){
               
            }
    }*/
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         INITIALIZATION
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


console.log("Creating panels, etc...")

INSTRUMENTS_IDLIST = [
 ["MANDOLIN","Mandolin"],
 ["UKELELE","Ukelele"],
 ["GUITAR","Guitar"],
 ["BANJO","Banjo"]
]

console.log("Setting scale chords...")

setupScaleChords()

console.log("Setting instrument...")

addInstrument("UKELELE");

//var iselect0 = document.createElement("select");
//iselect0.id = "INSTRUMENT_SELECT_0";
//iselect0.classList.add("INSTRUMENT_SELECT");
//addValuesToSelect(iselect0,INSTRUMENTS_IDLIST);
//ipanel0.selector = iselect0;
//
///ipanel0.fretBoard = document.createElement("div")
//ipanel0.fretBoard.id = "fretBoard_0";
//ipanel0.fretBoard.classList.add("fretBoard");
//ipanel0.setInstrument = setInstrument
//
//ipanel0.appendChild(iselect0);
//ipanel0.appendChild(ipanel0.fretBoard);
//
//ipanel0.setInstrument();


console.log("Instrument set!")

document.getElementById("SELECT_SCALEKEY").onchange = calculateChords
document.getElementById("SELECT_ROOT").onchange = calculateChords
document.getElementById("SELECT_CHORDTYPE").onchange = calculateChords
document.getElementById("SELECT_SCALEKEY").onchange = calculateChords
document.getElementById("SELECT_SCALEKEYTYPE").onchange = calculateChords
document.getElementById("SELECT_CHORDDEGREE").onchange = calculateChords

//document.getElementById("INSTRUMENT_SELECT").onchange = calculateChords

//Array.prototype.map.call(document.getElementsByClassName("INSTRUMENT_SELECT"),
//                          x => x.onchange = calculateChords );

document.getElementById("SELECT_SCALEKEY").onchange = setupScaleChords
document.getElementById("SELECT_SCALEKEYTYPE").onchange = setupScaleChords

//KEY_TYPE_INTERVALS KEY_TYPE_TITLES

console.log("Setting common chords:")

document.getElementsByClassName("CHORD_BUTTON")[0].onclick();
console.log("Setting other chords:")

setupOtherChords();

document.getElementById("ADD_INSTRUMENT_BUTTON").selector = document.getElementById("INSTRUMENT_SELECT_ADD")
document.getElementById("ADD_INSTRUMENT_BUTTON").onclick = function(){
  addInstrument( this.selector.value )
}

document.getElementById("ShowPiano").onchange = function(){
  if(this.checked){
    document.getElementById("PIANO_KEYBOARD_SUPER").style.display = "block";
  } else {
    document.getElementById("PIANO_KEYBOARD_SUPER").style.display = "none";
  }
}
document.getElementById("ShowStaff").onchange = function(){
  if(this.checked){
    document.getElementById("STAFF_HOLDER").style.display = "block";
  } else {
    document.getElementById("STAFF_HOLDER").style.display = "none";
  }
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// 
//                         Chord panelset controls
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


var CHORD_PANELSET_EXPANDALL_BUTTON = document.createElement("button");
CHORD_PANELSET_EXPANDALL_BUTTON.textContent = "SHOW ALL";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_EXPAND_BUTTON = document.createElement("button");
CHORD_PANELSET_EXPAND_BUTTON.textContent = "++";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_REDUCE_BUTTON = document.createElement("button");
CHORD_PANELSET_REDUCE_BUTTON.textContent = "--";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_UP_BUTTON = document.createElement("button");
CHORD_PANELSET_UP_BUTTON.textContent = "^";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_DN_BUTTON = document.createElement("button");
CHORD_PANELSET_DN_BUTTON.textContent = "v";
//CHORD_PANELSET_EXPAND_BUTTON.classList.add("");

var CHORD_PANELSET_CURRVIS_CT  = 20;
var CHORD_PANELSET_CURRVIS_IDX = 0;
var CHORD_PANELSET_PANELS = document.getElementById("CHORD_PANELSET").children

function chordPanelSet_setVisiblePanels(){
  for(var i=0; i < CHORD_PANELSET_PANELS.length; i++){
    console.log("panel: "+CHORD_PANELSET_PANELS[i]);
    if(i < CHORD_PANELSET_CURRVIS_IDX || i >= CHORD_PANELSET_CURRVIS_IDX + CHORD_PANELSET_CURRVIS_CT){
        CHORD_PANELSET_PANELS[i].style.display = "none";
    } else {
        CHORD_PANELSET_PANELS[i].style.display = "grid";
    }
  }
}
chordPanelSet_setVisiblePanels();

CHORD_PANELSET_EXPAND_BUTTON.onclick = function(){
    CHORD_PANELSET_CURRVIS_CT = CHORD_PANELSET_CURRVIS_CT + 1;
    if(CHORD_PANELSET_CURRVIS_IDX + CHORD_PANELSET_CURRVIS_CT >= CHORD_PANELSET_PANELS.length){
        this.disabled =true;
    }
    CHORD_PANELSET_REDUCE_BUTTON.disabled = false;
    chordPanelSet_setVisiblePanels();
}
CHORD_PANELSET_REDUCE_BUTTON.onclick = function(){
    CHORD_PANELSET_CURRVIS_CT = CHORD_PANELSET_CURRVIS_CT -1;
    if(CHORD_PANELSET_CURRVIS_CT == 0){
        this.disabled = true;
    }
    CHORD_PANELSET_EXPAND_BUTTON.disabled = false;   
    chordPanelSet_setVisiblePanels();
}
CHORD_PANELSET_UP_BUTTON.onclick = function(){
    CHORD_PANELSET_CURRVIS_IDX = CHORD_PANELSET_CURRVIS_IDX - 1;
    if(CHORD_PANELSET_CURRVIS_IDX == 0){
        this.disabled =true;
    }
    CHORD_PANELSET_DN_BUTTON.disabled = false;
    chordPanelSet_setVisiblePanels();
}
CHORD_PANELSET_DN_BUTTON.onclick = function(){
    CHORD_PANELSET_CURRVIS_IDX = CHORD_PANELSET_CURRVIS_IDX + 1;
    if(CHORD_PANELSET_CURRVIS_IDX + CHORD_PANELSET_CURRVIS_CT >= CHORD_PANELSET_PANELS.length){
        this.disabled =true;
    }
    CHORD_PANELSET_UP_BUTTON.disabled = false;
    chordPanelSet_setVisiblePanels();
}
CHORD_PANELSET_EXPANDALL_BUTTON.onclick = function(){
   CHORD_PANELSET_CURRVIS_IDX = 0;
   CHORD_PANELSET_CURRVIS_CT  = CHORD_PANELSET_PANELS.length;
    chordPanelSet_setVisiblePanels();

}

document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_EXPAND_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_REDUCE_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_UP_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_DN_BUTTON)
document.getElementById("CHORD_PANELSET").insertAdjacentElement("afterend",CHORD_PANELSET_EXPANDALL_BUTTON)

assignChordButtonEvents()
