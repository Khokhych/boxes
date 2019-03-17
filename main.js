
class boxCreator  {
    constructor (BGcolor,size,position){
        let box = document.createElement('div');
        let styleBox =  `
        background-color:${BGcolor};
        width:${size[0]}px;
        height:${size[1]}px;
        `;
        box.style.cssText = styleBox;
        document.querySelector('body').appendChild(box);
    }
};

let boxGenerator = function() {
    for (let i = 0; i <= 50; i ++){
        let rundon1 = Math.round(Math.random() * 100) + 1;
        let rundon2 = Math.round(Math.random() * 100) + 1;
        let rundon3 = Math.round(Math.random() * 100);
        new boxCreator(`rgb(${rundon1},${rundon2},${rundon3})`,[rundon1,rundon2]);
    }
};
boxGenerator();
console.log(boxCreator);