// ------------------------------------- init  scene ------------------------------------- //
// ---- init camera
// first parameter : cajuster le champ de vue
// second parameter : taille de la fenetre
// third parameter : temps
// fourth paramter : stop le rendu si notre objet est trop loin ou trop près
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 3000 );
// ------ init rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); // taille du rendu à la meme grosseur que la fenetre
 // couleur du rendu
//ajout du rendu dans notre document HTML
document.body.appendChild( renderer.domElement);

// ------------------------------------- Deposer et creer la forme  ------------------------------------- //
// creation de la forme en 3 dimensions
// il prend 3 parametres
// le premier : le rayon
// le deuxieme : la grosseut du tube
// la troiseieme : le nombre de segments
// le 3eme: le nomnre de segments au long du tube
const geometrie = new THREE.BoxGeometry(10, 3, 100);
// creation du materiel avec une couleur par defaut en arc en ciel
// seul le wireframe a true est important dans l'objet, le reste est deja dispo
const material = new THREE.MeshBasicMaterial({
    color: 0xff000,
    // transparent: true,
    // opacity: 1,
    // wireframe: true,
    // wireframeLinewidth: 5,
    // wireframeLinejoin: 'round',
    // wireframeLinecap: 'round'
})

// ajout de geometrie et material à notre forme
const dessin = new THREE.Mesh( geometrie, material );
// ajout de la forme sur la scene
scene.add( dessin );
camera.position.z = 100;

// function animate() {
//     requestAnimationFrame( animate );

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render( scene, camera );
// };

// animate();