
     var content = document.getElementsByTagName('body')[0];
     var tet = document.getElementsByTagName('h1')[0];
     var darkmode = document.getElementById('dark-change');
     darkmode.addEventListener('click', function(){
         content.classList.toggle('night');
         darkmode.classList.toggle('active');
         tet.classList.toggle('htg');
     })