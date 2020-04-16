var elem = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron'];
    var elemname = elem[Math.floor(Math.random()*elem.length)];
        
    function findatomno(){
        var game = document.getElementById('gamezone')        
        var contentArea = document.getElementById('display');
        
        game.innerHTML = "What is the atomic number of:"
	
		contentArea.innerHTML = elemname;
        var atomIndex = elem.indexOf(elemname);
        var atomNo = atomIndex + 1;
        return atomNo;                
    }