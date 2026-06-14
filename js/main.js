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
    name: 'Arzunn',
    tagline: 'Creative developer crafting immersive software that people remember.',
    avatar: 'assets/pp.jpg',
    resume: 'https://drive.google.com/file/d/1v2tg_EJ1-hcLHR8-1UIaNaJV4foOFEJj/view?usp=sharing',


    about:
      'I\u2019m a developer who blends engineering precision with visual storytelling. ' +
      'From performant backends to silky 60fps frontends, I ship products that feel ' +
      'as good as they look.',

    stats: [
      { value: '2+', label: 'Years experience' },
      { value: '30+', label: 'Projects shipped' },
    ],

    skills: [
      'JavaScript / TypeScript', 'React', 'Node.js', 'ExpressJS', 'React Native', 'WebRTC',
      'Python', 'CI/CD & GitLab', 'Git', 'Github', 'Cloud & DevOps', "Docker", "Kubernetes", "Linux", "GitHub Actions", "AWS", "NextJS", "Java", "PostgreSQL", "MongoDB"
    ],

    projects: [
  { 
    title: 'AI Powered Study Abroad Counsellor', 
    description: 'Developed an AI-powered counsellor during a hackathon, earning a Certificate of Recognition. Implemented speech and text interaction for accessible form filling, integrated personalized university recommendations, and designed action-driven AI capabilities to execute tasks like shortlisting via voice/text commands.', 
    tags: ['JavaScript', 'Python', 'NextJS', 'FastAPI', 'AI Integration', 'Speech-to-Text', 'Docker'], 
    image: 'assets/studyabroad.png', 
    link: '#' 
  },
  { 
    title: 'Cloud-Native E-Commerce Platform Deployment', 
    description: 'Architected and deployed a highly scalable 5+ microservices platform on AWS EKS using Terraform for modular IaC. Implemented an automated CI/CD pipeline using GitHub Actions alongside declarative GitOps delivery using ArgoCD, cutting build times by 10x and deployment time to seconds.', 
    tags: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'ArgoCD'], 
    image: 'assets/devops.png', 
    link: '#' 
  },
  { 
    title: 'Role Based User Management System', 
    description: 'Developed and deployed a robust Role-Based Access Control (RBAC) system, including a fully functional backend on Render and a responsive frontend on Netlify. Implemented secure authentication and authorization using cookies, JWT and also integrated OAuth2.0 for seamless Sign in.', 
    tags: ['React.js', 'Node.js', 'JWT', 'OAuth2.0'], 
    image: 'assets/rolebased.jpg', 
    link: '#' 
  },
  { 
    title: 'InstaFood', 
    description: "Developed a food delivery web app with real-time restaurant listings and menu integration using Swiggy's API, incorporating Redux for efficient state management.", 
    tags: ['React.js', 'Redux', 'JavaScript', 'Tailwind CSS'], 
    image: 'assets/instafood.jpg', 
    link: '#' 
  },
  { 
    title: 'Kaun Banega Crorepati Game', 
    description: "Developed a web-based version of the popular Indian game show using React.js and Tailwind CSS, with efficient state management via React Context API and authentic gameplay features like '50-50', 'Audience Poll,' and 'Flip the Question.'", 
    tags: ['JavaScript', 'Context API', 'React.js', 'Tailwind CSS'], 
    image: 'assets/kbc.jpg', 
    link: '#' 
  },
  { 
    title: 'RentNest', 
    description: 'Developed a property listing platform with features like user authentication and authorization, pagination, image upload. Designed and built RESTful APIs for handling property listings. Integrated an AI chatbot that helps users with queries related to the listings in the site.', 
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', "Langchain.js"], 
    image: 'assets/rentnest.jpg', 
    link: '#' 
  },
  { 
    title: 'TheaterGPT', 
    description: 'Developed a Netflix-inspired streaming platform using React and Redux, with Firebase authentication. Integrated Gemini API for personalized movie recommendations.', 
    tags: ['React', 'Redux', 'Firebase', 'GeminiAI API'], 
    image: 'assets/theatergpt.png', 
    link: '#' 
  },
],


    // ---- EXPERIENCE: replace with details from your resume ----
    experience: [
  {
    role: 'Software Engineer',
    company: 'TCS',
    period: 'Aug 2025 — Present',
    location: 'Noida',
    description: 'Architected and optimized cloud-native infrastructure for a high-scale platform. Provisioned scalable AWS environments using modular Terraform, reducing infrastructure setup time from over 1 hour to under 10 minutes. Containerized microservices with multi-stage Docker builds (10x faster builds, 150MB+ smaller images) and orchestrated 5+ services on Amazon EKS with RBAC. Designed cost-efficient traffic routing via AWS ALB Ingress Controller and implemented end-to-end GitOps CI/CD using GitHub Actions + ArgoCD, achieving sub-8-minute builds and near-instant deployments.'
  },
  {
    role: 'Software Developer Intern',
    company: 'Rhinostream Technologies',
    period: 'Dec 2024 — May 2025',
    location: 'Remote',
    description: 'Developed core features for a Remote Access Platform using React, TypeScript, Node.js, and WebRTC. Built advanced input mapping systems (keyboard-to-gamepad, touch-to-keyboard, touch-to-mouse) enabling touchscreen devices to function as full controllers. Offloaded frame rendering to Web Workers, improving streaming performance by 20-30%. Implemented real-time performance monitoring (FPS, latency, jitter, bitrate, etc.) for optimal user experience.'
  },
  {
    role: 'Web Developer Intern',
    company: 'ADM Education & Welfare Society',
    period: 'Aug 2024 — Oct 2024',
    location: 'Remote',
    description: 'Developed a task management platform using React, Node.js, Express, MongoDB, and TypeScript. Built an automated deadline reminder system with Nodemailer and node-cron, increasing course completion rates by 20%. Implemented task assignment, status tracking, and Role-Based Access Control (RBAC), improving team workflow efficiency by 25% and saving 6+ hours per week for 100+ interns.'
  }
],

    contact: { heading: 'Let\u2019s build something great', text: 'I\u2019m currently open to new opportunities and freelance work.', email: 'arjunparajuliofficial55555@gmail.com' },
    socials: [
      { label: 'GitHub', url: 'https://github.com/ArjunParajuli' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arjun-parajuli-0b82361b9/' },
      { label: 'Leetcode', url: 'https://leetcode.com/u/Ar_June/' },
    ],


    // footer: '\u00a9 2026 Arjun Parajuli. Built with Three.js.'
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
