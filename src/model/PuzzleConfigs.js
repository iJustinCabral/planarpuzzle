// Puzzle configs will be packed as a JSON object that can be parsed through later
export const test = {
  "name": "Level-1",
  "rows" : "2",
  "columns" : "4",
  "squares" : [
    { "color" : "red", "row": "0", "column" : "0" },
    { "color" : "red", "row": "0", "column" : "2"  },
    { "color" : "orange", "row": "0", "column" : "3" },
    { "color" : "orange", "row": "1", "column" : "2" },
    {"color":"white", "row": "0", "column": "1"},
    {"color":"white", "row": "1", "column": "0"},
    {"color":"white", "row": "1", "column": "1"},
    {"color":"white", "row": "1", "column": "3"} 
    ],
  "paths" : "2",
}

export const config1 = {
    "name": "Level-1",
    "rows" : "2",
    "columns" : "4",
    "baseSquares" : [
      { "color" : "red", "row": "0", "column" : "0" },
      { "color" : "red", "row": "0", "column" : "2"  },
      { "color" : "orange", "row": "0", "column" : "3" },
      { "color" : "orange", "row": "1", "column" : "2" } ],
     "unusedSquares" : [],
     "emptySquares" : [{"color":"white", "row": "0", "column": "1"},
                     {"color":"white", "row": "1", "column": "0"},
                     {"color":"white", "row": "1", "column": "1"},
                     {"color":"white", "row": "1", "column": "3"}],
    "paths" : 2,
}

export const config2 = {
  "name": "Level-2",
  "rows" : "4",
  "columns" : "8",
  "baseSquares" : [
    { "color" : "red", "row": "0", "column" : "1" },
    { "color" : "blue", "row": "0", "column" : "2"  },
    { "color" : "blue", "row": "0", "column" : "5" },
    { "color" : "yellow", "row": "1", "column" : "4" },
    { "color" : "red", "row": "2", "column" : "4" } ,
    { "color" : "yellow", "row": "3", "column" : "4" }],
   "unusedSquares" : [{ "color" : "black", "row": "1", "column" : "1" }],
   "emptySquares" : [{"color":"white", "row": "0", "column": "0"},
                     {"color":"white", "row": "0", "column": "3"},
                     {"color":"white", "row": "0", "column": "4"},
                     {"color":"white", "row": "0", "column": "6"},
                     {"color":"white", "row": "0", "column": "7"},
                     {"color":"white", "row": "1", "column": "0"},
                     {"color":"white", "row": "1", "column": "2"},
                     {"color":"white", "row": "1", "column": "3"},
                     {"color":"white", "row": "1", "column": "5"},
                     {"color":"white", "row": "1", "column": "6"},
                     {"color":"white", "row": "1", "column": "7"},
                     {"color":"white", "row": "2", "column": "0"},
                     {"color":"white", "row": "2", "column": "1"},
                     {"color":"white", "row": "2", "column": "2"},
                     {"color":"white", "row": "2", "column": "3"},
                     {"color":"white", "row": "2", "column": "5"},
                     {"color":"white", "row": "2", "column": "6"},
                     {"color":"white", "row": "2", "column": "7"},
                     {"color":"white", "row": "3", "column": "0"},
                     {"color":"white", "row": "3", "column": "1"},
                     {"color":"white", "row": "3", "column": "2"},
                     {"color":"white", "row": "3", "column": "3"},
                     {"color":"white", "row": "3", "column": "5"},
                     {"color":"white", "row": "3", "column": "6"},
                     {"color":"white", "row": "3", "column": "7"},]
}
