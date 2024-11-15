import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {  lightBlue} from '../theme';

const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

export  const GlobeAnimation = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
        let particles: THREE.Points;
        let count = 0;
        let mouseX = 0, mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const vertexShader = `
            attribute float scale;
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                gl_PointSize = scale * ( 300.0 / -mvPosition.z );
                gl_Position = projectionMatrix * mvPosition;
            }
        `;

        const fragmentShader = `
            uniform vec3 color;
            void main() {
                if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
                gl_FragColor = vec4( color, 1.0 );
            }
        `;

        const init = () => {
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.z = 1000;

            scene = new THREE.Scene();
            scene.background = new THREE.Color("#f4f4f4")
            const numParticles = AMOUNTX * AMOUNTY;
            const positions = new Float32Array(numParticles * 3);
            const scales = new Float32Array(numParticles);

            let i = 0, j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
                    positions[i + 1] = 0; // y
                    positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z
                    scales[j] = 1;
                    i += 3;
                    j++;
                }
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: { color: { value: new THREE.Color(lightBlue[400]) } },
                vertexShader: vertexShader,
                fragmentShader: fragmentShader
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            if (mountRef.current) {
                mountRef.current.appendChild(renderer.domElement);
            }
            window.addEventListener('resize', onWindowResize);
            document.addEventListener('pointermove', onPointerMove);
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const onPointerMove = (event: PointerEvent) => {
            if (event.isPrimary === false) return;
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };

        const animate = () => {
            requestAnimationFrame(animate);
            render();
        };

        const render = () => {
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            const positions = particles.geometry.attributes.position.array as Float32Array;
            const scales = particles.geometry.attributes.scale.array as Float32Array;

            let i = 0, j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                    scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 + (Math.sin((iy + count) * 0.5) + 1) * 20;
                    i += 3;
                    j++;
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;

            renderer.render(scene, camera);

            count += 0.1;
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('pointermove', onPointerMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, }} />;
};