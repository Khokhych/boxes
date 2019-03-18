
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
        box.style.cssText = styleBox;
        document.querySelector('body').appendChild(box);
    }
};

let boxGenerator = function() {
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = document.documentElement.clientHeight;
    for (let i = 0; i <= 1000; i ++){
        let rundon1 = Math.round(Math.random() * 100) + 1;
        let rundon2 = Math.round(Math.random() * 100) + 1;
        let rundon3 = Math.round(Math.random() * 100);
        let positionTop = Math.random() * (windowHeight - rundon2);
        let positionLeft = Math.random() * (windowWidth - rundon1);
        setTimeout(() => {
            new boxCreator(
                `rgba(
                    ${rundon1},
                    ${rundon2},
                    ${rundon3},
                    ${+(rundon1 /100).toFixed(1)})`
                ,[rundon1,rundon2]
                ,[positionTop,positionLeft]
                );
        }, 1500);

    
    }
};
boxGenerator();
