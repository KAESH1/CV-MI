// Objet contenant l'ensemble des carrousels présents sur la page
const dicoCarrousel=[
	{
		imgAffichee: document.getElementById("imgAffichée1"), // Image affichée à l'écran
		lstBtn: document.getElementById("btnBox1").children, // Nombre de bouton
		path: "Sonic", // Nom du projet
		bool: false, // Gestion du clic via un booléen
		compt: 0 // Compteur
	},
	{
		imgAffichee: document.getElementById("imgAffichée2"), // Image affichée à l'écran
		lstBtn: document.getElementById("btnBox2").children, // Nombre de bouton
		path: "Zelda", // Nom du projet
		bool: false, // Gestion du clic via un booléen
		compt: 0 // Compteur
	}
]

// Fonction qui change le style des cellules associées aux images
function switchCirc(lstBtn, compt){
	for(let i=0; i<lstBtn.length; i++){
		if(lstBtn[i].className=="circIn"){
			lstBtn[i].className="circOut"
			break
		}
	}
	lstBtn[compt].className="circIn"
}

// Fonction qui remplace l'image à l'écran par celle qui suit
function switchImg(c){
	if(c.bool===false){
		c.compt = c.compt < (c.lstBtn.length-1) ? c.compt+1 : 0
	}else{c.bool=false}
	c.imgAffichee.src="Pic/img/"+c.path+"/"+c.compt+".png"
	switchCirc(c.lstBtn, c.compt)
}

// Appel des fonctions sur tous les carrousels
dicoCarrousel.forEach(function(c){
	setInterval(function(){switchImg(c)}, 6500)
})

// Changement du numéro d'image en fonction de la barre de navigation
function clic(nbrCar, nbrImg){
	dicoCarrousel[nbrCar].compt=nbrImg
	dicoCarrousel[nbrCar].bool=true
}