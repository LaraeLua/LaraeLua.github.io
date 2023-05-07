function ProjetoDesenv(el){    
    
  var display = document.getElementById(el).style.display;
  var designinfo = document.getElementById("Designinfo2");
  var design = document.querySelector(".Design");
  var robotica = document.querySelector(".Robotica");
  var roboticainfo = document.getElementById("robot2");
  var footer = document.querySelector("footer");

      if (display == "none"){

          footer.style.top = "450%";
          robotica.style.top = "378%";
          roboticainfo.style.top = "378%";
          design.style.top = "337%";
          designinfo.style.top = "337%";
          document.getElementById(el).style.display = 'block';

      }else{

          footer.style.top = "360%";
          robotica.style.top = "302%";
          roboticainfo.style.top = "302%";
          design.style.top = "261%";
          designinfo.style.top = "261%";
          document.getElementById(el).style.display = 'none';
      }
}

function ProjetoDesign(el){    
  
  var display = document.getElementById(el).style.display;
  var robotica = document.querySelector(".Robotica");
  var roboticainfo = document.getElementById("robot2");
  var footer = document.querySelector("footer");
      if (display == "none"){

          footer.style.top = "450%";
          robotica.style.top = "378%";
          roboticainfo.style.top = "378%";
          document.getElementById(el).style.display = 'block';

      }else{
          footer.style.top = "360%";
          robotica.style.top = "302%";
          roboticainfo.style.top = "302%";
          document.getElementById(el).style.display = 'none';
      }
}

function ProjetoRobot(el){    
  
  var display = document.getElementById(el).style.display;
  var footer = document.querySelector("footer");
      if (display == "none"){

          footer.style.top = "450%";
          document.getElementById(el).style.display = 'block';

      }else{
          footer.style.top = "360%";
          document.getElementById(el).style.display = 'none';
      }
}

