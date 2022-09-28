// Puzzle configs will be packed as a JSON object that can be parsed through later
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
                     {"color":"white", "row": "1", "column": "3"}]
}

export const test = {
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
                     {"color":"white", "row": "1", "column": "3"}]
}
