const container = document.querySelector('.container')

for(let row_box=1;row_box<=8;row_box++){
    for(let col_box=0;col_box<4;col_box++){
        
        const white = document.createElement('div');
        const black = document.createElement('div');
        white.classList.add('white')
        black.classList.add('black')
    
        if(row_box%2===0){
            container.append(white)
            container.appendChild(black)
        }
        else{
            container.appendChild(black)
            container.append(white)
        }
    }
}

for(let row_box=1;row_box<=8;row_box++){
    for(let col_box=0;col_box<4;col_box++){
        if(row_box===1){
            const pawns=document.createElement('div')
            pawns.innerText='♙'
            white.append(pawns)
            black.append(pawns)
        }
// ♙