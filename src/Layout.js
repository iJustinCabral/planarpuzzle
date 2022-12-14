import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export const layout = {
    canvas : {
          height: "400",
          width: "400",
          border: "2px solid #000"
      },
    
    Appmain : {
      backgroundColor: "#747373",
      height: "100vh",
      width: "100vw",
    },

    text: { 
        position: "absolute",
        left:550,
        top:50,
        color:"yellow",
        backgroundColor: "#747373",
        width:150,
      },

      extendtext: { 
        position: "absolute",
        left:66,
        top:60,
        color:"yellow",
        backgroundColor: "#747373",
        width:150,
      },

    victory: { 
        position: "absolute",
        left:460,
        top:300,
        color:"green",
        backgroundColor: "white",
        width: 320,
        font: "24px Times New Roman"
      },

    buttons: { 
        position: "absolute",
        left: 500,
        top:20,
      },

      upbutton:  {
        position: "absolute",
        left: 94,
        top: 100,
      },
      
      downbutton : {
        position: "absolute",
        left: 90,
        top: 140,
      },
      
      leftbutton : {
        position: "absolute",
        top: 120,
        left: 46,
      },
      
      rightbutton : {
        position: "absolute",
        top: 120,
        left: 140,
      },


      resetbutton : {
        position: "absolute",
        left: 230,
        top: 0,
        background: "red",
        color: "white"
      },

      level1button : {
        position: "absolute",
        left: -40,
        background: "black",
        color: "white"
      },

      level2button : {
        position: "absolute",
        left: 40,
        background: "black",
        color: "white"
      },

      level3button : {
        position: "absolute",
        left: 140,
        background: "black",
        color: "white"
      },
}