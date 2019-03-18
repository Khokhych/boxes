
class boxCreator  {
    constructor (BGcolor,size,position){

        let box = document.createElement('div');
        let styleBox =  `
        background-color:${BGcolor};
        width:${size[0]}px;
        height:${size[1]}px;
        position:absolute;
        top:${position[0]}px;
        left:${position[1]}px;
        `;
        console.log(BGcolor);
        box.style.cssText = styleBox;
        document.querySelector('body').appendChild(box);
    }
};

let boxGenerator = function() {

    for (let i = 0; i <= 100; i ++){
        let rundon1 = Math.round(Math.random() * 100) + 1;
        let rundon2 = Math.round(Math.random() * 100) + 1;
        let rundon3 = Math.round(Math.random() * 100);
        let positionTop = Math.random() * (1000 - 0) + 0;
        let positionLeft = Math.random() * (1000 - 0) + 0;

        new boxCreator(
            `rgba(
                ${rundon1},
                ${rundon2},
                ${rundon3},
                ${+(rundon1 /100).toFixed(1)})`
            ,[rundon1,rundon2]
            ,[positionTop,positionLeft]
            );
    
    }
};
boxGenerator();
