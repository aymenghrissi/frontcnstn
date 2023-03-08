export interface logiciel {
    id: Number;
    name: string;
    image: string;
    link: string;
    
  }
  export const dataset: Array<logiciel> = [
    {
        "id":1,
        "name":"winrar",
        "image" : "assets/img/winrar.png",
        "link":"assets/logiciels/winrar.exe"
    },
    {
        "id":2,
        "name":"PDF Creator",
        "image" : "assets/img/PDF Creator.png",
        "link":"assets/logiciels/PDF Creator.exe"
    },
]