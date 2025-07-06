        const skills = [
            { name: 'Java', category: 'Core Languages' },
            { name: 'Python', category: 'Core Languages' },
            { name: 'C', category: 'Core Languages' },
            { name: 'React.js', category: 'Libraries' },
            { name: 'Scikit-learn', category: 'Libraries' },
            { name: 'Firebase', category: 'Tools' },
            { name: 'MySQL', category: 'Tools' },
            { name: 'Neural Networks', category: 'Interests' },
            { name: 'APIs', category: 'Interests' },
        ];

        const skillsContainer = document.getElementById('skills-container');

        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gray-700 text-gray-300 hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer';
            skillElement.textContent = skill.name;
            skillsContainer.appendChild(skillElement);
        });

        const cursor = document.getElementById('cursor-tracker');
        const dot = cursor.querySelector('.cursor-dot');
        const outline = cursor.querySelector('.cursor-outline');
        const trail = cursor.querySelector('.cursor-trail');
        
        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;
        let trailX = 0;
        let trailY = 0;

        // Smooth cursor animation
        function animate() {
            let distX = mouseX - outlineX;
            let distY = mouseY - outlineY;
            
            outlineX += distX * 0.15;
            outlineY += distY * 0.15;
            
            let trailDistX = mouseX - trailX;
            let trailDistY = mouseY - trailY;
            
            trailX += trailDistX * 0.1;
            trailY += trailDistY * 0.1;

            dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
            trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
            
            requestAnimationFrame(animate);
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Magnetic effect on interactive elements
        const magneticElements = document.querySelectorAll('a, button, .flip-card, .cursor-hover');
        
        magneticElements.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                outline.style.animation = 'magnetic 0.8s ease-in-out infinite';
            });
            
            elem.addEventListener('mouseleave', () => {
                outline.style.animation = 'none';
            });
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.display = 'none';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.display = 'block';
        });

        // Start animation
        animate();

        // Add click animation
        document.addEventListener('mousedown', () => {
            cursor.classList.add('cursor-clicking');
            outline.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(0.8)`;
        });

        document.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor-clicking');
            outline.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(1)`;
        });

        // Add check for mobile devices
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Only initialize cursor effects if not on mobile
        if (!isMobile()) {
            // ... existing cursor animation code ...
        } else {
            // Hide cursor elements on mobile
            document.getElementById('cursor-tracker').style.display = 'none';
        }
