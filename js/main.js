function Menu(){
    var adMenu = document.getElementById("ad-menu");
    var f = function(){
            var nav = document.getElementsByClassName("nav")[0];
            if(nav.style.display == "block"){
                nav.style.display = "none";
                var ps2 = document.createElement("a");
                ps2.setAttribute("href", "#");
                var ps2Img = document.createElement("img");
                ps2Img.setAttribute("src","img/resp/menu.png");
                ps2.appendChild(ps2Img);
                var ps1 = adMenu.getElementsByTagName("a")[0];
                adMenu.replaceChild(ps2,ps1);
                var li = document.getElementsByClassName("list-li");
                for (var i = 0; i < li.length; i++){
                    if(li[i].className == "list-li active"){
                        var liSubMenu = li[i].children[2];
                        var respImg2 = document.createElement("img");
                        var respImg1 = li[i].children[1];
                        li[i].setAttribute('class','list-li');
                        respImg2.setAttribute("src","img/resp/resp-arrow-pos1.png");
                        respImg2.className = "li-arrow";
                        li[i].replaceChild(respImg2,respImg1);
                        liSubMenu.style.display = "none";
                        li[i].removeAttribute('id');
                        liSubMenu.style.display = "none";
                    }
                }
            }
            else {
                nav.style.display = "block";
                var pos2 = document.createElement("a");
                pos2.setAttribute("href", "#");
                var pos2Img = document.createElement("img");
                pos2Img.setAttribute("src","img/resp/ad-menu-pos2.png");
                pos2.appendChild(pos2Img);
                var pos1 = adMenu.getElementsByTagName("a")[0];
                adMenu.replaceChild(pos2,pos1);
            }
    }
    this.call = function(){
        var callMenu = document.getElementById("ad-menu").onclick = f;
    }
}
var f = new Menu();
f.call();

function RepsList(){
    var li = document.getElementsByClassName("list-li");
    for (var i = 0, len = li.length; i < len; i++ ){
        li[i].addEventListener("click", (function(e){
            e.preventDefault();
            var target  = e.target;
            var lis = e.currentTarget;
            var respImg2 = document.createElement("img");
            var respImg1 = lis.children[1];
            var liSubMenu = lis.children[2];
            if(target == lis  || target.className == lis.children[0].className){
                if(lis.className == "list-li active"){
                    lis.setAttribute('class','list-li');
                    respImg2.setAttribute("src","img/resp/resp-arrow-pos1.png");
                    respImg2.className = "li-arrow";
                    lis.replaceChild(respImg2,respImg1);
                    liSubMenu.style.display = "none";
                }
                else {
                    for (var j = 0; j < li.length; j++){
                        if(li[j].className == "list-li active" ) {
                            li[j].setAttribute('class','list-li');
                            li[j].children[2].style.display = "none";
                            li[j].children[1].setAttribute("src","img/resp/resp-arrow-pos1.png");
                            li[j].children[1].className = "li-arrow";

                        }
                    }
                    lis.className += " active";
                    respImg2.setAttribute("src","img/resp/resp-arrow-pos2.png");
                    respImg2.className = "li-arrow";
                    lis.replaceChild(respImg2,respImg1);
                    liSubMenu.style.display = "block";
                }
            }
        }));
    }
}
if(document.documentElement.clientWidth <= 960){
    var resp = new RepsList();
}
