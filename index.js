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


const Allwhite=document.querySelectorAll('.white')
const Allblack=document.querySelectorAll('.black')

//black
for(let black_index=8;black_index<16;black_index++){
    
    const pawns=document.createElement('img')
    pawns.src='./source/Black_Pawn.png'
    pawns.alt = 'Pawn';
    pawns.style.width = '40px';
    pawns.style.height = '40px';

    if(black_index%2===0){
        Allwhite[Math.floor(black_index/2)].append(pawns)
    }
    else{
        Allblack[Math.floor(black_index/2)].append(pawns)
    }
}

//white
for(let black_index=48;black_index<56;black_index++){
    
    const pawns=document.createElement('img')
    pawns.src='./source/White_Pawn.png'
    pawns.alt = 'Pawn';
    pawns.style.width = '40px';
    pawns.style.height = '40px';

    if(black_index%2===0){
        Allwhite[Math.floor(black_index/2)].append(pawns)
    }
    else{
        Allblack[Math.floor(black_index/2)].append(pawns)
    }
}

// ♙