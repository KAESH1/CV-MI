// Affichage du bouton de retour au sommet de page
const elt=document.querySelector(".invisible")

window.addEventListener("scroll", printElt)

function printElt(){
	const{scrollTop, clientHeight}=document.documentElement
	const topElt_to_topViewPort=elt.getBoundingClientRect().top

	if(scrollTop>(scrollTop+topElt_to_topViewPort).toFixed())
		elt.classList.add("visible")
	else
		elt.classList.remove("visible")
}