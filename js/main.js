/* ============================================================
 * Fully static portfolio script (no import/export).
 * EDIT the CONFIG object below to customize your content.
 * Three.js is loaded globally via <script> as `THREE`.
 * ============================================================ */
(function () {
  'use strict';

  // ---------------- CONFIG: edit this ------------------------
  var CONFIG = {
    logo: 'AP.',
    kicker: 'Hello, I\u2019m',
    name: 'Arjun Parajuli',
    tagline: 'Creative developer crafting immersive web experiences that people remember.',
    avatar: 'assets/pp.jpg',
    resume: 'assets/Arjun_Parajuli_Resume.pdf',

    about:
      'I\u2019m a developer who blends engineering precision with visual storytelling. ' +
      'From performant backends to silky 60fps frontends, I ship products that feel ' +
      'as good as they look. Replace this text with your own story.',

    stats: [
      { value: '5+', label: 'Years experience' },
      { value: '30+', label: 'Projects shipped' },
      { value: '12', label: 'Happy clients' }
    ],

    skills: [
      'JavaScript / TypeScript', 'Three.js & WebGL', 'React / Vue', 'Node.js',
      'Python', 'CI/CD & GitLab', 'UI / UX Design', 'Cloud & DevOps'
    ],

    projects: [
      // Swap `image` with your own files later, e.g. 'assets/project1.jpg'
      { title: 'Project One', description: 'A real-time 3D product configurator. Replace with your own project.', tags: ['Three.js', 'WebGL', 'React'], image: 'https://picsum.photos/seed/proj1/640/400', link: '#' },
      { title: 'Project Two', description: 'High-traffic SaaS dashboard with live data visualizations.', tags: ['TypeScript', 'D3', 'Node.js'], image: 'https://picsum.photos/seed/proj2/640/400', link: '#' },
      { title: 'Project Three', description: 'Award-style marketing site with scroll-driven storytelling.', tags: ['GSAP', 'Vite', 'CSS'], image: 'https://picsum.photos/seed/proj3/640/400', link: '#' },
      { title: 'Project Four', description: 'Open-source tooling used by thousands of developers.', tags: ['OSS', 'CLI', 'Go'], image: 'https://picsum.photos/seed/proj4/640/400', link: '#' }
    ],

    // ---- EXPERIENCE: replace with details from your resume ----
    experience: [
      { role: 'Senior Developer', company: 'Company Name', period: '2023 \u2014 Present', description: 'Led development of key products and mentored the team. Replace with your real experience from your resume.' },
      { role: 'Software Engineer', company: 'Company Name', period: '2021 \u2014 2023', description: 'Built and shipped features across the stack. Replace with your real experience.' },
      { role: 'Junior Developer', company: 'Company Name', period: '2019 \u2014 2021', description: 'Started my journey building web applications. Replace with your real experience.' }
    ],

    contact: { heading: 'Let\u2019s build something great', text: 'I\u2019m currently open to new opportunities and freelance work.', email: 'you@example.com' },
    socials: [
      { label: 'GitLab', url: 'https://gitlab.com/hga-group' },
      { label: 'GitHub', url: 'https://github.com/' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/your-username' }
    ],

    footer: '\u00a9 2026 Arjun Parajuli. Built with Three.js.'
  };

  // ---------------- Populate content -------------------------
  function $(sel) { return document.querySelector(sel); }

  $('[data-logo]').textContent = CONFIG.logo;
  $('[data-kicker]').textContent = CONFIG.kicker;
  $('[data-name]').textContent = CONFIG.name;
  $('[data-tagline]').textContent = CONFIG.tagline;
  $('[data-about]').textContent = CONFIG.about;
  $('[data-contact-heading]').textContent = CONFIG.contact.heading;
  $('[data-contact-text]').textContent = CONFIG.contact.text;
  $('[data-footer]').textContent = CONFIG.footer;
  $('[data-avatar]').src = CONFIG.avatar;
  $('[data-avatar]').alt = CONFIG.name;
  $('[data-resume-link]').href = CONFIG.resume;
  $('[data-email-link]').href = 'mailto:' + CONFIG.contact.email;

  $('[data-stats]').innerHTML = CONFIG.stats.map(function (s) {
    return '<div class="stat"><span class="stat__value">' + s.value + '</span><span class="stat__label">' + s.label + '</span></div>';
  }).join('');

  $('[data-skills]').innerHTML = CONFIG.skills.map(function (s) {
    return '<li class="skill reveal">' + s + '</li>';
  }).join('');

  $('[data-projects]').innerHTML = CONFIG.projects.map(function (p) {
    return '<a class="card reveal" href="' + p.link + '" target="_blank" rel="noopener">' +
      '<div class="card__media"><img src="' + p.image + '" alt="' + p.title + '" loading="lazy" /><span class="card__media-glow"></span></div>' +
      '<div class="card__inner"><h3 class="card__title">' + p.title + '</h3>' +
      '<p class="card__desc">' + p.description + '</p>' +
      '<div class="card__tags">' + p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div></div></a>';
  }).join('');

  $('[data-socials]').innerHTML = CONFIG.socials.map(function (s) {
    return '<a href="' + s.url + '" target="_blank" rel="noopener">' + s.label + '</a>';
  }).join('');

  $('[data-experience]').innerHTML = CONFIG.experience.map(function (e, i) {
    return '<div class="tl-item reveal ' + (i % 2 === 0 ? 'tl-item--left' : 'tl-item--right') + '">' +
      '<div class="tl-node"></div>' +
      '<div class="tl-card"><div class="tl-card__inner">' +
      '<span class="tl-period">' + e.period + '</span>' +
      '<h3 class="tl-role">' + e.role + '</h3>' +
      '<span class="tl-company">' + e.company + '</span>' +
      '<p class="tl-desc">' + e.description + '</p>' +
      '</div></div></div>';
  }).join('');

  // ---------------- Scroll reveal ----------------------------
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------------- 3D tilt: cards + avatar ------------------
  if (!reducedMotion) {
    document.querySelectorAll('.card, .tl-card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 12) + 'deg) rotateX(' + (-y * 12) + 'deg) translateY(-4px)';
      });
      card.addEventListener('pointerleave', function () { card.style.transform = ''; });
    });

    var tilt = document.querySelector('[data-tilt] .avatar3d');
    if (tilt) {
      document.querySelector('[data-tilt]').addEventListener('pointermove', function (e) {
        var r = tilt.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = 'rotateY(' + (x * 22) + 'deg) rotateX(' + (-y * 22) + 'deg)';
      });
      document.querySelector('[data-tilt]').addEventListener('pointerleave', function () {
        tilt.style.transform = '';
      });
    }
  }

  // ---------------- 3D astronomical scene -------------------
  function initScene(canvas) {
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03040c, 0.022);

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 8);

    scene.add(new THREE.AmbientLight(0x8899ff, 0.4));
    var keyLight = new THREE.PointLight(0x7c5cff, 70, 60); keyLight.position.set(5, 4, 6); scene.add(keyLight);
    var rimLight = new THREE.PointLight(0x00e5ff, 50, 60); rimLight.position.set(-6, -3, 4); scene.add(rimLight);
    var moveLight = new THREE.PointLight(0xff5cdd, 40, 50); scene.add(moveLight);

    // --- Distant glowing planet ---
    var planet = new THREE.Mesh(
      new THREE.SphereGeometry(6, 48, 48),
      new THREE.MeshStandardMaterial({ color: 0x1b1740, metalness: 0.4, roughness: 0.9, emissive: 0x2a1a5e, emissiveIntensity: 0.7 })
    );
    planet.position.set(-16, 9, -38); scene.add(planet);
    var planetRing = new THREE.Mesh(
      new THREE.RingGeometry(7.5, 11, 64),
      new THREE.MeshBasicMaterial({ color: 0x7c5cff, transparent: true, opacity: 0.18, side: THREE.DoubleSide })
    );
    planetRing.position.copy(planet.position); planetRing.rotation.x = 1.1; planetRing.rotation.y = 0.4; scene.add(planetRing);

    // --- Floating foreground geometry ---
    var knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.6, 0.45, 240, 36),
      new THREE.MeshStandardMaterial({ color: 0x141627, metalness: 0.9, roughness: 0.2, emissive: 0x1a0f3c, emissiveIntensity: 0.6 })
    );
    knot.position.set(2.6, 0.2, 0); scene.add(knot);
    var shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.9, 1),
      new THREE.MeshBasicMaterial({ color: 0x7c5cff, wireframe: true, transparent: true, opacity: 0.1 })
    );
    shell.position.copy(knot.position); scene.add(shell);
    var octa = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.9, 0),
      new THREE.MeshStandardMaterial({ color: 0x00e5ff, metalness: 0.6, roughness: 0.3, emissive: 0x003844, emissiveIntensity: 0.8, flatShading: true })
    );
    octa.position.set(-4, -1.4, -1); scene.add(octa);

    // --- Starfield builder (color + size variation) ---
    function makeStars(count, spread, baseSize, opacity) {
      var pos = new Float32Array(count * 3);
      var col = new Float32Array(count * 3);
      var palette = [[1, 1, 1], [0.62, 0.71, 1], [0.0, 0.9, 1], [1, 0.78, 0.9], [0.8, 0.7, 1]];
      for (var i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
        var c = palette[(Math.random() * palette.length) | 0];
        col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
      }
      var g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      var m = new THREE.PointsMaterial({ size: baseSize, transparent: true, opacity: opacity, vertexColors: true, sizeAttenuation: true });
      return new THREE.Points(g, m);
    }

    // Layered starfields for parallax depth
    var starsNear = makeStars(1400, 46, 0.06, 0.95); scene.add(starsNear);
    var starsFar = makeStars(3000, 120, 0.10, 0.7); scene.add(starsFar);
    var dust = makeStars(800, 30, 0.035, 0.5); scene.add(dust);

    var mouse = { x: 0, y: 0 }, scrollY = 0;
    window.addEventListener('pointermove', function (e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    });
    window.addEventListener('scroll', function () { scrollY = window.scrollY; }, { passive: true });
    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    var clock = new THREE.Clock();
    function frame() {
      var t = clock.getElapsedTime();
      knot.rotation.x = t * 0.18; knot.rotation.y = t * 0.24;
      knot.position.y = 0.2 + Math.sin(t * 0.7) * 0.25;
      shell.rotation.y = -t * 0.06; shell.position.y = knot.position.y;
      octa.rotation.x = t * 0.5; octa.rotation.z = t * 0.3;
      octa.position.y = -1.4 + Math.cos(t * 0.9) * 0.4;
      planet.rotation.y = t * 0.03; planetRing.rotation.z = t * 0.02;

      // Parallax drift + subtle twinkle
      starsNear.rotation.y = t * 0.012; starsNear.rotation.x = t * 0.006;
      starsFar.rotation.y = -t * 0.005;
      dust.rotation.y = t * 0.02;
      starsNear.material.opacity = 0.8 + Math.sin(t * 2.0) * 0.15;
      moveLight.position.set(Math.sin(t * 0.6) * 6, Math.cos(t * 0.5) * 4, 5);

      camera.position.x += (mouse.x * 0.9 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.5 + scrollY * -0.0035 - camera.position.y) * 0.04;
      camera.lookAt(0.8, 0, 0);
      renderer.render(scene, camera);
    }

    if (reducedMotion) { frame(); } else { renderer.setAnimationLoop(frame); }
  }

  try {
    if (typeof THREE !== 'undefined') {
      initScene(document.getElementById('bg-canvas'));
    } else { throw new Error('THREE not loaded'); }
  } catch (err) {
    console.warn('WebGL/Three.js unavailable, using static background.', err);
    var c = document.getElementById('bg-canvas');
    if (c) { c.remove(); }
  }
})();
