var boxshow = document.getElementById('bx_show');
var main = document.getElementById('main');
var aside = document.getElementById('aside');
var nav = document.getElementById('nav');

var height = 80;
var width = 80;

var startHeight = 995; 
var boxesWidth = 0; 

var charArray = ['I','L','A','N','I'];

var list = [];

var make_boxes = function(){

    for(var i = 0; i < 3; ++i){
        box = document.createElement('DIV');
        box.style.height = height+'px';
        box.style.width = width+'px';
        box.className = 'box';
        var random = Math.floor(Math.random()*charArray.length);
        box.innerHTML= '<p style="margin-top: '+height*0.25+'px; font-size: '+height*0.35+'px;">'+charArray[random]+'</p>';
        height = height + 20;
        width = width + 20;
        boxesWidth += width + 128 ;
        
        box.addEventListener('click', function(){
            if(list.length >= 2){
                clearItems();
            }

            if( !this.className.includes('show')){
                if(!this.className.includes('correct')){
                    this.className = this.className + ' show';
                    list.push(this);
                    if(list.length == 2){
                        chech_game();
                    }
                }
            }
            else{
                clearItems();
            }
          });
        boxshow.appendChild(box);
    }

var chech_value = function(){

    var str1 = list[0].innerHTML;
    var str2 = list[1].innerHTML;

    var index=str1.indexOf('">');
    var slashIndex=str1.indexOf('</p');
    var fstr1=str1.substring(index+2,slashIndex);

    index=str2.indexOf('">');
    slashIndex=str2.indexOf('</p');
    var fstr2=str2.substring(index+2,slashIndex);

    if(fstr1 == fstr2)
        return true;
    return false;
};

var clearItems = function(){
    for( var i = 0; i < list.length; ++i){
        list[i].className = list[i].className.replace('show','');
    } 
    list = [];
}

var chech_game = function(){
    if(chech_value()){
        for( var i = 0; i < list.length; ++i){
            list[i].className = list[i].className.replace('show','correct');
        }   
    }
    else{
        setTimeout(function(){ //timer delay after 0.5 sec to show the letter.
            clearItems();
        }, 500);
    }
}
}