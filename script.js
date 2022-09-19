// ------------------------------------- init  scene ------------------------------------- //
const scene = new THREE.Scene()

// ---- init camera
// first parameter : cajuster le champ de vue
// second parameter : taille de la fenetre
// third parameter : temps
// fourth paramter : stop le rendu si notre objet est trop loin ou trop près
const camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000)

// ------ init rendu
const rendu = new THREE.WebGLRenderer();
rendu.setSize(window.innerWidth, window.innerHeight); // taille du rendu à la meme grosseur que la fenetre
rendu.setClearColor(0x00000); // couleur du rendu

//ajout du rendu dans notre document HTML
document.body.appendChild(rendu.domElement);

// ------------------------------------- Deposer et creer la forme  ------------------------------------- //
const forme = new THREE.Group();

// creation de la forme en 3 dimensions
// il prend 3 parametres
// le premier : le rayon
// le deuxieme : la grosseut du tube
// la troiseieme : le nombre de segments
// le 3eme: le nomnre de segments au long du tube
const geometrie = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// creation du materiel avec une couleur par defaut en arc en ciel
// seul le wireframe a true est important dans l'objet, le reste est deja dispo
const material = new THREE.MeshNormalMaterial({
    color: 0xff000,
    transparent: true,
    opacity: 1,
    wireframe: true,
    wireframeLinewidth: 5,
    wireframeLinejoin: 'round',
    wireframeLinecap: 'round'
})

const dessin = new THREE.Mesh( geometrie, material );

//ajout de geometrie et material à notre forme
forme.add(dessin);

//ajout de la forme sur la scene
scene.add(forme);

const animate = () => {
    requestAnimationFrame( animate );
    dessin.rotation.x += 0.005;
    dessin.rotation.y += 0.005;

    rendu.render(scene,camera);
};

animate();