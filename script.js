let lines = document.querySelectorAll('.lines')
let player = false;
let value = "X";

lines.forEach(line =>{
    line.addEventListener('click',() => {
        if(!player && line.textContent === "")
        {
            line.textContent = value;
            if(add(value))
            {
                alert('win  ' + value);
                player = true;
            }
            else if([...lines].every(line => line.textContent !== "")){
                alert("nicha")
            }
            else{
                value = value === "X" ? "O" : "X";
            }
        }
    });
});



function add(val)
{
    let arr = [[0,1,2],[3,4,5],[6,7,8],
               [0,3,6],[1,4,7],[2,5,8],
               [0,4,8],[2,4,6]];

    return arr.some(arry => {
        return arry.every(index => lines[index].textContent === val);
    })           
}