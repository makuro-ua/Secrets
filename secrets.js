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

        const audio = document.getElementById('audio-element');
        const playBtn = document.getElementById('play-pause-btn');
        const slider = document.getElementById('music-slider');

        function toggleMusic() {
            if (audio.paused) { audio.play(); playBtn.innerText = "II"; }
            else { audio.pause(); playBtn.innerText = "▶"; }
        }

        audio.ontimeupdate = () => { slider.value = (audio.currentTime / audio.duration) * 100; };
        slider.oninput = () => { audio.currentTime = (slider.value / 100) * audio.duration; };

        function openModal(src) {
            document.getElementById('img-modal').style.display = 'flex';
            document.getElementById('modal-img').src = src;
        }