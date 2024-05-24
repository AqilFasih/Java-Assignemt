

var heading = document.getElementById('heading');
var text = document.getElementById('text');

function bold() {
   
    // heading.style.fontWeight = 'bold';
    // text.style.fontWeight = 'bold';
      
    if(heading.style.fontWeight =='bold' && text.style.fontWeight == 'bold'){
       
        text.style.fontWeight='400'
          heading.style.fontWeight = '400'
    }
    else{
        text.style.fontWeight = 'bold'
        heading.style.fontWeight = 'bold'
        }
}

function italic() {

    // heading.style.fontStyle = 'italic';
    // text.style.fontStyle = 'italic';
    if(heading.style.fontStyle == 'italic'&& text.style.fontStyle == 'italic'){
          
        heading.style.fontStyle ='normal'
        text.style.fontStyle = 'normal'

    }
    else{
        heading.style.fontStyle ='italic'
        text.style.fontStyle = 'italic'

    }
}

function underline() {
    
    if(heading.style.textDecoration == 'underline' && text.style.textDecoration == 'underline'){
        
        heading.style.textDecoration = 'none';
        text.style.textDecoration = 'none';
    }
    else{
        heading.style.textDecoration = 'underline';
        text.style.textDecoration = 'underline';
    }
}

function right_align() {
    
    heading.style.textAlign = 'right';
    text.style.textAlign = 'right';


    // if( heading.style.textAlign == 'right' &&  text.style.textAlign == 'right'){
        
    //             heading.style.textAlign = 'center';
    //            text.style.textAlign = 'center';
    // }
    // else{
    //     heading.style.textAlign = 'right';
    //     text.style.textAlign = 'right';
    // }
}

function center_align() {
    heading.style.textAlign = 'center';
    text.style.textAlign = 'center';
}

function left_align() {
    heading.style.textAlign = 'left';
    text.style.textAlign = 'left';
}

