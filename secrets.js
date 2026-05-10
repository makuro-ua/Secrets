function populateGrid(gridId, tabName) {
            const grid = document.getElementById(gridId);
            for(let i=1; i<=10; i++) {
                grid.innerHTML += `
                    <div class="item-card">
                        <img src="pngs/a.jpg" onclick="openModal(this.src)">
                        <div class="item-title">${tabName} Project #${i}</div>
                        <div class="item-desc">A detailed description of this specific work goes here.</div>
                    </div>
                `;
            }
        }

        window.addEventListener('load', () => {
            ['grid-code', 'grid-writing', 'grid-sketches', 'grid-art'].forEach(id => {
                populateGrid(id, id.split('-')[1].toUpperCase());
            });

            setTimeout(() => {
                document.getElementById('startup-screen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('startup-screen').style.display = 'none';
                    document.getElementById('main-content').style.display = 'block';
                }, 500);
            }, 2200);
        });

        function showTab(event, tabId) {
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            event.currentTarget.classList.add('active');
        }
            function toggleMusic() {
                const audio = document.getElementById('audio-element');
                const playBtn = document.getElementById('play-pause-btn');

                if (audio.paused) {
                    audio.play().then(() => {
                        playBtn.innerText = "II";
                        console.log("Music started successfully!");
                    }).catch(error => {
                        console.error("Playback failed:", error);
                        alert("Check if 'audios/Butcher_Vanity.mp3' exists in your folder!");
                    });
                } else {
                    audio.pause();
                    playBtn.innerText = "▶";
                }
            }