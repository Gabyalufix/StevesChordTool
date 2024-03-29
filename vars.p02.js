


CLEF_LIST = [
   { name : "Treble", checkBoxId: "ShowTrebleClef",
     nlinesUP : 9, nlinesDN : 4, nlinesMD : 5,
     img: "media/trebleclef.png", imgtop : -36, imght : 170,
     baselineNote: 1, baselineOctave: 4	, baselineNoteName : "D4",
     defaultHidden: false	 },
   { name : "Bass", checkBoxId: "ShowBassClef",
     nlinesUP : 2, nlinesDN : 7, nlinesMD : 5,
     img: "media/800px-FClef.svg.png", imgtop : 0, imght : 80,
     baselineNote: 3, baselineOctave: 2	,baselineNoteName : "F2",
     defaultHidden: false	 },
   { name : "Alto", checkBoxId: "ShowAltoClef",
     nlinesUP : 2, nlinesDN : 2, nlinesMD : 5,
     img: "media/800px-CClef.svg.png", imgtop : 0, imght : 96,
   baselineNote: 2, baselineOctave: 3,baselineNoteName : "E3",
     defaultHidden : true   }	 
]


SCALENOTE_NAMES = ["C","D","E","F","G","A","B"]

SCALENOTE_LOOKUP = {
	"C" : 0,
	"D" : 1,
	"E" : 2,
	"F" : 3,
	"G" : 4,
	"A" : 5,
	"B" : 6
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROCEDURAL TEXT PARSING
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



NOTE_NAMES_GENERAL = ["C","C#/Db","D","D#/Eb",
                    "E","F","F#/Gb","G",
                    "G#/Ab","A","A#/Bb","B"];

NOTE_NAMES_SHARP = ["C","C#","D","D#",
                    "E","F","F#","G",
                    "G#","A","A#","B"]
NOTE_NAMES_FLAT  = ["C","Db","D","Eb",
                    "E","F","Gb","G",
                    "Ab","A","Bb","B"]

KEYROOT_NAMES = [
  "C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"
]
KEYROOT_NAMES_WITHALTS = [
  "C",["Db","C#"],"D","Eb","E","F",["Gb","F#"],"G","Ab","A","Bb",["B","Cb"]
]
KEYROOT_NAMES_FLATS = [
  "F","Db","Eb","Gb","Ab","Bb"
]
KEYROOT_IIX_FLATS = [
  1,3,5,6,8,10
]

NOTE_TRANSLATE_TOFLAT = {
	"C#" : "Db",
	"D#" : "Eb",
	"F#" : "Gb",
	"G#" : "Ab",
	"A#" : "Bb",
	"Db" : "Db",
	"Eb" : "Eb",
	"Gb" : "Gb",
	"Ab" : "Ab",
	"Bb" : "Bb",
	"C" : "C","A" : "A","B" : "B","D" :"D","E":"E","F":"F","G":"G"
}
NOTE_TRANSLATE_TOSHARP = {
	"Db" : "C#",
	"Eb" : "D#",
	"Gb" : "F#",
	"Ab" : "G#",
	"Bb" : "A#",
	"C#" : "C#",
	"D#" : "D#",
	"F#" : "F#",
	"G#" : "G#",
	"A#" : "A#",
	"C" : "C","A" : "A","B" : "B","D" :"D","E":"E","F":"F","G":"G"
}

 
var NOTE_BASENAMES_SHARP = ["C","C","D","D",
                    "E","F","F","G",
                    "G","A","A","B"]
var NOTE_BASENAMES_FLAT  = ["C","D","D","E",
                    "E","F","G","G",
                    "A","A","B","B"]

var NOTE_BASEMOD_SHARP = ["","#","","#",
                    "","","#","",
                    "#","","#",""]
var NOTE_BASEMOD_FLAT  = ["","b","","b",
                    "","","b","",
                    "b","","b",""]

var NOTE_NUMS = {
    "C":0,
    "D":1,
    "E":2,
    "F":3,
    "G":4,
    "A":5,
    "B":6
}


CURRENT_SCALE_SHARPTYPE = "sharp";

KEY_TYPE_INTERVALS = {
  "Major":[2,2,1,2,2,2],
  "Minor":          [2,1,2,2,1,2,2],
  "MelodicMinor":   [2,1,2,2,2,2,1],
  "HarmonicMinor":  [2,1,2,2,1,3,1],
  "MergedMinor":    [2,1,2,2,1,1,1,1,1],
  "Dorian":[2,1,2,2,2,1,2],
  "Phrygian":[1,2,2,2,1,2,2],
  "Lydian":[2,2,2,1,2,2,1],
  "Mixolydian":[2,2,1,2,2,1,2],
  "Aeolian":[2,1,2,2,1,2,2],
  "HungarianMjr":[3,1,2,1,2,1,2],
  "HungarianMnr":[2,1,3,1,1,3,1],
  "DoubleHarmonic":[1,3,1,2,1,3,1],
  "Chromatic":[1,1,1,1,1,1,1,1,1,1,1],
  "MajorPentatonic":[2,2,3,2,3],
  "MinorPentatonic":[3,2,2,3,2],
  "ChinesePentatonic":[4,2,1,4,1]
}
KEY_TYPE_TITLES=[
    ["Major","Major"],
    ["Minor","Natural Minor"],
    ["MelodicMinor","Melodic Minor"],
    ["HarmonicMinor","Harmonic Minor"],
    ["MergedMinor","Merged Minor"],	
    ["Dorian","Dorian"],
    ["Phrygian","Phrygian"],
    ["Lydian","Lydian"],
    ["Mixolydian","Mixolydian"],
    ["Aeolian","Aeolian"],
    ["HungarianMjr","Hungarian Major"],
	["HungarianMnr","Hungarian Minor"],
    ["DoubleHarmonic","\"Double Harmonic\""],
    ["Chromatic","Chromatic"],
    ["MajorPentatonic","Major Pentatonic"],
    ["MinorPentatonic","Minor Pentatonic"],
    ["ChinesePentatonic","Chinese Pentatonic"]
]

CHORD_TYPE_INTERVALS = {
  "M":[4,3],
  "m":[3,4],
  "7":[4,3,3],
  "maj7":[4,3,4],
  "m7":[3,4,3],
  "dim":[3,3],
  "aug":[4,4],
  "6":[4,3,2],
  "m6":[3,4,2],
  "6/9":[4,3,2,5],
  "sus2":[2,5],
  "sus4":[5,2],
  "m7b5":[3,3,4],
  "dim7":[3,3,3],
  "7b5":[4,2,4],
  "7#5":[4,4,2],
  "m(maj7)":[3,4,4],
  "m7b5":[3,3,4],
  "dim7":[3,3,3],
  "9":[4,3,3,4],
  "9b5":[4,2,4,4],
  "9#5":[4,4,2,4],
  "maj9":[4,3,4,3],
  "m9":[3,4,3,4],
  "m11":[3,4,3,7],
  "7sus4":[5,2,3],
  "7sus2":[2,5,3],
  "9sus4":[5,2,3,4]
}
//CHORD_TYPE_LIST
CHORD_TYPE_DEF = {
  "M":["R","3","5"],
  "m":["R","m3","5"],
  "6":["R","3","5","6"],
  "m6":["R","m3","5","6"],
  "6/9":["R","3","5","6","9"],
  "maj7":["R","3","5","7"],
  "7":["R","3","5","m7"],
  "7b5":["R","3","m5","m7"],
  "7#5":["R","3","#5","m7"],
  "m7":["R","m3","5","m7"],
  "m(maj7)":["R","m3","5","7"],
  "m7b5":["R","m3","m5","m7"],
  "dim7":["R","m3","m5","6"],
  "hdim7":["R","m3","m5","m7"],
  "9":["R","3","5","m7","9"],
  "9b5":["R","3","m5","m7","9"],
  "9#5":["R","3","#5","m7","9"],
  "maj9":["R","3","5","7","9"],
  "m9":["R","m3","5","m7","9"],
  "m11":["R","m3","5","m7","11"],
  "13":["R","3","5","m7","13"],
  "maj13":["R","3","5","7","13"],
  "m13":["R","m3","5","m7","13"],
  "sus4":["R","4","5"],
  "sus2":["R","2","5"],
  "7sus4":["R","4","5","m7"],
  "7sus2":["R","2","5","m7"],
  "9sus4":["R","4","5","m7","9"],
  "9sus2":["R","2","5","m7","9"],
  "aug":["R","3","m6"],
  "dim":["R","m3","m5"],
  "5":["R","5"],
  "add9":["R","3","5","9"],
  "add11":["R","3","5","11"],
  "add13":["R","3","5","13"],
  "m(add9)":["R","m3","5","9"],
  "m(add11)":["R","m3","5","11"],
  "m(add13)":["R","m3","5","13"]
}
CHORD_TYPE_LIST = [
  "M"   ,       
  "m"   ,       
  "6"   ,       
  "m6"  ,       
  "6/9" ,       
  "maj7",       
  "7"   ,       
  "7b5" ,       
  "7#5" ,       
  "m7"  ,       
  "m(maj7)" ,   
  "m7b5"    ,   
  "dim7"    ,
  "hdim7",
  "9"       ,   
  "9b5"     ,   
  "9#5"     ,   
  "maj9"    ,   
  "m9"      ,   
  "m11"     ,   
  "13"      ,   
  "maj13"   ,   
  "m13"     ,   
  "sus4"    ,   
  "sus2"    ,   
  "7sus4"   ,   
  "7sus2"   ,   
  "9sus4"   ,   
  "9sus2"   ,   
  "aug"     ,   
  "dim"     ,   
  "5"       ,
  "add9",  "add11","add13",
  "m(add9)",  "m(add11)","m(add13)"
]

CHORDNOTE_INTERVALS = {
  "R":0,
  "b2":1,  
  "2":2,
  "m3":3,
  "3":4,
  "4":5,
  "m5":6,
  "5":7,
  "#5":8,
  "m6":8,
  "6":9,
  "m7":10,
  "7":11,
  "9":14, //or 2?
  "11":17, //or 5
  "13":21 //or 9
}

CHORDNOTE_INTERVAL_LIST = [
 "R","b2","2","m3","3","4","m5","5","#5","m6","6","m7","7","9","11","13"
]

REV_CHORDNOTE_INTERVALS = {
  0:"R",
  1:"b2",
  2:"2",
  3:"m3",
  4:"3",
  5:"4",
  6:"m5",
  7:"5",
  8:  "#5",
  9:  "6",
  10: "m7",
  11: "7"
}

//  "6/9":[2,2,3,2],


CHORDSETS = {
 Major:[
    [ [0,"M"],[1,"m"],[2,"m"],[3,"M"],[4,"M"],[5,"m"],[6,"dim"] ],
    [ [0,"maj7"],[1,"m7"],[2,"m7"],[3,"maj7"],[4,"7"],[5,"m7"], [6,"hdim7"] ],
    [ [0,"6"], [1,"m6"],[3,"6"],[4,"6"], [6,"dim7"] ],
    [ [0,"sus4"],[1,"sus4"],[2,"sus4"],[4,"sus4"],[5,"sus4"]],
    [ [0,"sus2"],[1,"sus2"],[3,"sus2"],[4,"sus2"],[5,"sus2"]]
 ],
 Minor:[
    [ [0,"m"],[1,"dim"],[2,"M"],[3,"m"],[4,"m"],[5,"M"],[6,"M"] ],
    [ [0,"m7"],[1,"m7b5"],[2,"maj7"],[3,"m7"],[4,"m7"],[5,"maj7"],[6,"7"]],
    [  [2,"m6"],[3,"m6"],[5,"6"],[6,"6"] ],
    [ [0,"sus4"],[2,"sus4"],[3,"sus4"],[4,"sus4"],[6,"sus4"]],
    [ [0,"sus2"],[2,"sus2"],[3,"sus2"],[5,"sus2"],[6,"sus2"]]
 ]
 
}
CHORDSET_ROW_LABELS = {
  Major : ["I","ii","iii","IV","V","vi","vii"]
}

CHORDSET_OPTIONS = [
    ["M","m","dim","aug","5","sus4","sus2"],
    ["7","m7","maj7","m(maj7)","m7b5","7b5","7#5","hdim7"],
    ["6","m6","dim7"],
    ["sus4"],
    ["sus2"],
    ["7sus4","7sus2"]
]



INSTRUMENT_MANDOLIN = new instrument(
  "Mandolin",
  [7,2,9,4],
  [  20,  56.126,  52.976,  50.002,  47.196,  44.547,  42.047,  39.687,  37.459,  35.357,  33.373,  31.499,  29.732,  28.063,  26.488,  25.001,  23.598,22.273],
  [],
  [],"Mando",[],
  [3,4,4,5]
)
INSTRUMENT_UKELELE = new instrument(
  "Ukelele",
  [7,0,4,9],
  [  20,  56.126,  52.976,  50.002,  47.196,  44.547,  42.047,  39.687,  37.459,  35.357,  33.373,  31.499,  29.732,  28.063,  26.488,  25.001,  23.598,22.273],
  [],
  [],"Uke",[],
  [3,4,4,4]
)
INSTRUMENT_GUITAR = new instrument(
  "Guitar",
  [4,9,2,7,11,4],
  [  20,  56.126,  52.976,  50.002,  47.196,  44.547,  42.047,  39.687,  37.459,  35.357,  33.373,  31.499,  29.732,  28.063,  26.488,  25.001,  23.598,22.273],
  [],
  [],"Guitar",[],
  [3,3,4,4,4,5]
)
INSTRUMENT_GUITALELE = new instrument(
  "Guitalele",
  [9,2,7,0,4,9],
  [  20,  56.126,  52.976,  50.002,  47.196,  44.547,  42.047,  39.687,  37.459,  35.357,  33.373,  31.499,  29.732,  28.063,  26.488,  25.001,  23.598,22.273],
  [],
  [],"Guitalele",[],
  [2,3,3,4,4,4]
)
//NOTE_NAMES_GENERAL = ["C","C#/Db","D","D#/Eb",
//                    "E","F","F#/Gb","G",
//                    "G#/Ab","A","A#/Bb","B"];

INSTRUMENT_BANJO = new instrument(
  "Banjo",
  [7,2,7,11,2],
  [  20,  56.126,  52.976,  50.002,  47.196,  44.547,  42.047,  39.687,  37.459,  35.357,  33.373,  31.499,  29.732,  28.063,  26.488,  25.001,  23.598,22.273],
  [],
  [],"Banjo",[[0,5]],
  [4,3,3,4,4]
)

INSTRUMENTS = {
 MANDOLIN:INSTRUMENT_MANDOLIN,
 UKELELE:INSTRUMENT_UKELELE,
 GUITAR:INSTRUMENT_GUITAR,
 BANJO:INSTRUMENT_BANJO,
 GUITALELE:INSTRUMENT_GUITALELE
}
CURRENT_INSTRUMENT = INSTRUMENTS["UKELELE"];
FRETBOARD_LENGTH = 800;

CURRENT_CHORDROOT_IIX = 0;
CURRENT_CHORDTYPE     = "M";
CURRENT_CHORDINTERVALS = CHORD_TYPE_DEF[CURRENT_CHORDTYPE];



CHORDSET_OPTIONS = [
    ["M","m","dim","aug"],
    ["7","m7","maj7","m(maj7)","m7b5","7b5","7#5","hdim7"],
    ["6","m6","dim7"],
    ["sus4"],
    ["sus2"],
    ["7sus4","7sus2"]
]

var activeInstruments = []




var TUTORIAL_CIRCLED_ELEMENT = false;
var TUTORIAL_CIRCLE_SHADOW   = false;


