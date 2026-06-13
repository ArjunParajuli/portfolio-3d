import * as THREE from 'three';

// Animated 3D background: particle starfield + floating torus knot
// that reacts to mouse movement and page scroll.
export function initScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060f, 0.035);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 8);

  // --- Lights -------------------------------------------------
  scene.add(new THREE.AmbientLight(0x8899ff, 0.4));
  const keyLight = new THREE.PointLight(0x7c5cff, 60, 50);
  keyLight.position.set(5, 4, 6);
  scene.add(keyLight);
  const rimLight = new THREE.PointLight(0x00e5ff, 40, 50);
  rimLight.position.set(-6, -3, 4);
  scene.add(rimLight);

  // --- Hero object: torus knot --------------------------------
  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.6, 0.45, 220, 36),
    new THREE.MeshStandardMaterial({
      color: 0x141627,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x1a0f3c,
      emissiveIntensity: 0.6,
    })
  );
  knot.position.set(2.4, 0.2, 0);
  scene.add(knot);

  // Wireframe shell for depth
  const shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.9, 1),
    new THREE.MeshBasicMaterial({ color: 0x7c5cff, wireframe: true, transparent: true, opacity: 0.08 })
  );
  shell.position.copy(knot.position);
  scene.add(shell);

  // --- Particles ----------------------------------------------
  const COUNT = 1500;
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    particleGeo,
    new THREE.PointsMaterial({ color: 0x9fb4ff, size: 0.045, transparent: true, opacity: 0.8 })
  );
  scene.add(particles);

  // --- Interaction state --------------------------------------
  const mouse = { x: 0, y: 0 };
  let scrollY = 0;

  window.addEventListener('pointermove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
  });
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // --- Render loop --------------------------------------------
  const clock = new THREE.Clock();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function frame() {
    const t = clock.getElapsedTime();

    knot.rotation.x = t * 0.18;
    knot.rotation.y = t * 0.24;
    knot.position.y = 0.2 + Math.sin(t * 0.7) * 0.25;
    shell.rotation.y = -t * 0.06;
    shell.position.y = knot.position.y;
    particles.rotation.y = t * 0.02;

    // Mouse parallax (eased) + scroll-driven camera dolly
    camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (mouse.y * 0.5 + scrollY * -0.0035 - camera.position.y) * 0.04;
    camera.lookAt(0.8, 0, 0);

    renderer.render(scene, camera);
  }

  if (reducedMotion) {
    // Render a single static frame for users who prefer reduced motion.
    frame();
  } else {
    renderer.setAnimationLoop(frame);
  }
}
