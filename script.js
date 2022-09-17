// ------------------------------------- init  scene ------------------------------------- //
let scene = new THREE.Scene()

// ---- init camera
// first parameter : cajuster le champ de vue
// second parameter : taille de la fenetre
// third parameter : temps
// fourth paramter : stop le rendu si notre objet est trop loin ou trop près
let camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000)
// positionnement de la camera sur l'axe de Z
camera.position.z = 100;

// ------ init rendu
let rendu = new THREE.WebGLRenderer()
rendu.setSize(window.innerWidth, window.innerHeight)// taille du rendu à la meme grosseur que la fenetre
rendu.setClearColor(0x132644) // couleur du rendu

//ajout du rendu dans notre document HTML
document.body.appendChild(rendu.domElement)

// ajout du rendu de notre scene et de notre camera
rendu.render(scene,camera)