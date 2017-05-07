for (var i = 0; i < 1890; i++) {
    var mybox = document.createElement('a-entity');
    
    var myrotate = document.createElement('a-animation');
    myrotate.setAttribute('attribute',"rotation");
    myrotate.setAttribute('dur',"5000");
    myrotate.setAttribute('to',"0 360 0");
    
    mybox.appendChild(myrotate);
    
    mybox.setAttribute('geometry',"primitive:box");
    
    var x = (Math.random()*500).toString();
    var y = (Math.random()*500).toString();
    var z = (Math.random()*500).toString();
    
    mybox.setAttribute('position',x+" "+y+" "+z)
    
    var myscene = document.querySelector('a-scene');
    
    myscene.appendChild(mybox);
}