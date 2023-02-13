// change the background color by generating random rgb color by clicking ea button
// step1: create onload handler
window.onload = () =>{
    main();
}
function main(){
    const root = document.getElementById('root');
    const changeBtn = document.getElementById('change-btn');
    changeBtn.addEventListener('click', function(){
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}
// step2: random color generator function
function generateRGBColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`;
}
// step3: collect all necessary reference
