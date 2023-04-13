
    
function ProjetoDesenv(el){    
    
    var display = document.getElementById(el).style.display;
    var designinfo = document.querySelector(".designdiv");
    var design = document.querySelector(".Design");
    var robotica = document.querySelector(".Robotica");
    var roboticainfo = document.querySelector(".Roboticainfo");
    var footer = document.querySelector("footer");
        if (display == "none"){

            footer.style.top = "400%";
            robotica.style.top = "343%";
            roboticainfo.style.top = "343%";
            design.style.top = "302%";
            designinfo.style.top = "302%";
            document.getElementById(el).style.display = 'block';

        }else{
            footer.style.top = "400%";
            robotica.style.top = "302%";
            roboticainfo.style.top = "302%";
            design.style.top = "500%";
            designinfo.style.top = "500%";
            document.getElementById(el).style.display = 'none';
        }
}

function ProjetoDesign(el){
    var display = document.getElementById(el).style.display;

    var design = document.querySelector(".Design");
    var robotica = document.querySelector(".Robotica");
    var roboticainfo = document.querySelector(".Roboticainfo");
    var footer = document.querySelector("footer");

        if (display == "none"){

            footer.style.top = "400%";
            robotica.style.top = "343%";
            roboticainfo.style.top = "343%";
            design.style.top = "400%";
            designinfo.style.top = "302%";
            document.getElementById(el).style.display = 'block';

        }else{
            footer.style.top = "400%";
            robotica.style.top = "302%";
            roboticainfo.style.top = "302%";
            design.style.top = "400%";
            designinfo.style.top = "400%";
            document.getElementById(el).style.display = 'none';
        }
  }

