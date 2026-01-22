(() => {
  const playlist = [
  {
    title: "ミドリサワー (Midori Sour) - what is?",
    src: "https://files.catbox.moe/tz3pg9.mp3",
    url: "https://open.spotify.com/track/2IWOpbAYwYFIQ1D43LK3HP?si=54c5c1e0a85241ae"
  },
  {
    title: "retailing - what is?",
    src: "https://files.catbox.moe/sb10m3.mp3",
    url: "https://open.spotify.com/track/53i3wuAk1ugX4UOqWDWpdU?si=3c2ff9de096a4d02"
  },
  {
    title: "Stay Tune - what is?",
    src: "https://files.catbox.moe/gfbs5e.mp3",
    url: "https://file.garden/ZkVg_PCtvnSJZ3-N/%C3%B8neheart%20x%20reidenshi%20-%20snowfall%20(slowed).m4a"
  },
  {
    title: "EXT - what is?",
    src: "https://files.catbox.moe/2ivtnr.mp3",
    url: "https://open.spotify.com/track/3KTjsvKw3EOd9RuO0GGbJZ?si=f8fe04363c3041dd"
  },
  {
    title: "Reminiscence - Garoad",
    src: "https://files.catbox.moe/6dp615.mp3",
    url: "https://open.spotify.com/track/6qydpasmogJGMWcccfcm8Q?si=63e83ef6f85d4182"
  },
];
  let currentIndex = 0;
  let isPlaying = false;
  let isRepeat = false;
  let isShuffled = false;
  let playedHistory = [];
  let historyIndex = -1;
  let playerBox, audio, titleEl, playPauseBtn, progressBar, currentTimeEl, durationEl;
  let repeatBtn, shuffleBtn, prevBtn, nextBtn, progressContainer;
  let volumeTrack, volumeFill, volumeThumb, volToggle;
  let playlistListEl;
  function escapeHtml(s = '') {
    return (s + '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]);
  }
  function normalizeSrcPath(path) {
    if (!path) return path;
    if (/^https?:\/\//i.test(path)) return path;
    const forward = path.replace(/\\/g, '/').trim();
    return encodeURI(forward);
  }
  function formatTime(seconds) {
    if (!seconds || !isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }
  function renderDynamicPlaylist() {
    if (!playlistListEl) return;
    playlistListEl.innerHTML = '';
    playlist.forEach((track, i) => {
      const li = document.createElement('li');
      li.className = 'playlist-track';
      li.dataset.index = i;
      li.tabIndex = 0;
      li.innerHTML = `
        <button class="playlist-item-btn" type="button" aria-label="Play ${escapeHtml(track.title)}">
          <span class="p-title">${escapeHtml(track.title)}</span>
        </button>
        ${track.url ? `<a class="external-link" href="${track.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(track.title)} externally">⧉</a>` : ''}
      `;
      li.querySelector('.playlist-item-btn').addEventListener('click', () => {
        loadTrack(i, true);
      });
      li.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          li.querySelector('.playlist-item-btn').click();
        }
      });
      playlistListEl.appendChild(li);
    });
    updatePlaylistUI();
  }
  function updatePlaylistUI() {
    const items = document.querySelectorAll('.playlist-track');
    items.forEach((el) => {
      const idx = Number(el.dataset.index);
      el.classList.toggle('active-track', idx === currentIndex);
    });
  }
  function loadTrack(index, autoplay = false) {
    if (index < 0 || index >= playlist.length) return;
    currentIndex = index;
    const track = playlist[index];
    audio.src = normalizeSrcPath(track.src);
    titleEl.textContent = track.title || '—';
    titleEl.href = track.url || '#';
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    durationEl.textContent = '0:00';
    isPlaying = false;
    updatePlayButton(false);
    updatePlaylistUI();
    if (isShuffled) {
      if (playedHistory[historyIndex] !== currentIndex) {
        playedHistory = playedHistory.slice(0, historyIndex + 1);
        playedHistory.push(currentIndex);
        historyIndex = playedHistory.length - 1;
      }
    }
    if (autoplay) {
      audio.play().then(() => {
        isPlaying = true;
        updatePlayButton(true);
        playerBox?.classList.add('playing');
      }).catch(() => {
        isPlaying = false;
      });
    }
  }
  function togglePlay() {
    if (!audio.src) loadTrack(currentIndex, false);
    if (audio.paused) {
      audio.play().then(() => {
        isPlaying = true;
        updatePlayButton(true);
        playerBox?.classList.add('playing');
      }).catch(() => {
      });
    } else {
      audio.pause();
      isPlaying = false;
      updatePlayButton(false);
      playerBox?.classList.remove('playing');
    }
  }
  function updatePlayButton(playing) {
    if (!playPauseBtn) return;
    playPauseBtn.textContent = playing ? '❚❚' : '▶';
  }
  function nextTrack() {
    if (isShuffled) {
      if (historyIndex < playedHistory.length - 1) {
        historyIndex++;
        currentIndex = playedHistory[historyIndex];
      } else {
        currentIndex = getRandomIndex(currentIndex);
        playedHistory.push(currentIndex);
        historyIndex = playedHistory.length - 1;
      }
    } else {
      currentIndex = (currentIndex + 1) % playlist.length;
    }
    loadTrack(currentIndex, isPlaying);
  }
  function prevTrack() {
    if (audio.currentTime > 5) {
      audio.currentTime = 0;
      return;
    }
    if (isShuffled) {
      if (historyIndex > 0) {
        historyIndex--;
        currentIndex = playedHistory[historyIndex];
      } else {
        const newIndex = getRandomIndex(currentIndex);
        playedHistory.unshift(newIndex);
        historyIndex = 0;
        currentIndex = newIndex;
      }
    } else {
      currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    }
    loadTrack(currentIndex, isPlaying);
  }
  function getRandomIndex(exclude) {
    if (playlist.length <= 1) return 0;
    let idx;
    do { idx = Math.floor(Math.random() * playlist.length); } while (idx === exclude);
    return idx;
  }
  function toggleRepeat() {
    isRepeat = !isRepeat;
    audio.loop = isRepeat;
    repeatBtn.classList.toggle('active', isRepeat);
  }
  function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active', isShuffled);
    if (isShuffled) {
      playedHistory = [currentIndex];
      historyIndex = 0;
    } else {
      playedHistory = [];
      historyIndex = -1;
    }
  }
function setupProgress() {
  if (!progressContainer || !progressBar) return;
  let seeking = false;
  let rafId = null;
  let lastClientX = 0;
  let pendingSeekPct = null;
  function applySeekPercent(pct) {
    pct = Math.max(0, Math.min(1, pct));
    if (!audio.duration || !isFinite(audio.duration)) {
      pendingSeekPct = pct;
      return;
    }
    audio.currentTime = pct * audio.duration;
    progressBar.style.width = (pct * 100) + '%';
    pendingSeekPct = null;
  }
  function scheduleSeek(clientX) {
    lastClientX = clientX;
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      const rect = progressContainer.getBoundingClientRect();
      let pct = (lastClientX - rect.left) / (rect.width || 1);
      applySeekPercent(pct);
    });
  }
  progressContainer.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    seeking = true;
    try { e.target.setPointerCapture(e.pointerId); } catch (err) {  }
    scheduleSeek(e.clientX);
  });
  window.addEventListener('pointermove', (e) => {
    if (!seeking) return;
    scheduleSeek(e.clientX);
  });
  window.addEventListener('pointerup', (e) => {
    if (!seeking) return;
    seeking = false;
    scheduleSeek(e.clientX);
    try { progressContainer.releasePointerCapture(e.pointerId); } catch (err) {  }
  });
  progressContainer.addEventListener('click', (e) => {
    const clientX = (e.touches && e.touches[0] && e.touches[0].clientX) || e.clientX;
    scheduleSeek(clientX);
  });
  audio.addEventListener('loadedmetadata', () => {
    if (pendingSeekPct !== null) {
      applySeekPercent(pendingSeekPct);
      pendingSeekPct = null;
    }
    durationEl.textContent = formatTime(audio.duration);
  });
  audio.addEventListener('timeupdate', () => {
    if (seeking) return; 
    if (!audio.duration || !isFinite(audio.duration)) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = pct + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });
}
  function setupVolumeUI() {
  if (!volumeTrack || !volumeFill || !volumeThumb) return;
  let raf = null;
  let pendingClientX = null;
  let dragging = false;
  let pointerId = null;
  function applyPct(pct) {
    pct = Math.max(0, Math.min(1, pct));
    audio.volume = pct;
    volumeFill.style.width = `${pct * 100}%`;
    volumeThumb.style.left = `${pct * 100}%`;
    audio.muted = false;
    if (volToggle) volToggle.textContent = '🔊';
  }
  function scheduleUpdate(clientX) {
    pendingClientX = clientX;
    if (raf !== null) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      if (pendingClientX === null) return;
      const rect = volumeTrack.getBoundingClientRect();
      const pct = (pendingClientX - rect.left) / (rect.width || 1);
      applyPct(pct);
      pendingClientX = null;
    });
  }
  function handlePointerDown(e) {
    e.preventDefault();
    try { volumeTrack.setPointerCapture(e.pointerId); pointerId = e.pointerId; } catch (err) { pointerId = null; }
    dragging = true;
    volumeTrack.classList.add('dragging');
    scheduleUpdate(e.clientX);
  }
  function handlePointerMove(e) {
    if (!dragging) return;
    scheduleUpdate(e.clientX);
  }
  function handlePointerUp(e) {
    if (!dragging) return;
    dragging = false;
    try { if (pointerId !== null) volumeTrack.releasePointerCapture(pointerId); } catch (err) {}
    pointerId = null;
    if (raf === null) {
      volumeTrack.classList.remove('dragging');
    } else {
      requestAnimationFrame(() => volumeTrack.classList.remove('dragging'));
    }
  }
  volumeTrack.addEventListener('pointerdown', handlePointerDown);
  window.addEventListener('pointermove', handlePointerMove, { passive: true });
  window.addEventListener('pointerup', handlePointerUp);
  volumeTrack.addEventListener('pointercancel', handlePointerUp);
  volumeTrack.addEventListener('click', (e) => {
    if (dragging) return;
    const clientX = (e.touches && e.touches[0] && e.touches[0].clientX) || e.clientX;
    scheduleUpdate(clientX);
  });
  volumeTrack.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      audio.volume = Math.max(0, audio.volume - 0.05);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      audio.volume = Math.min(1, audio.volume + 0.05);
    } else {
      return;
    }
    const pct = audio.volume * 100;
    volumeFill.style.width = `${pct}%`;
    volumeThumb.style.left = `${pct}%`;
    if (audio.volume > 0 && volToggle) volToggle.textContent = '🔊';
  });
  if (volToggle) {
    volToggle.addEventListener('click', () => {
      audio.muted = !audio.muted;
      volToggle.textContent = audio.muted ? '🔈' : '🔊';
      if (audio.muted) {
        volumeFill.style.width = '0%';
        volumeThumb.style.left = '0%';
      } else {
        const pct = audio.volume * 100;
        volumeFill.style.width = `${pct}%`;
        volumeThumb.style.left = `${pct}%`;
      }
    });
  }
}
  function bindAudioEvents() {
    if (!audio) return;
    audio.addEventListener('timeupdate', () => {
      if (!audio.duration || !isFinite(audio.duration)) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = pct + '%';
      currentTimeEl.textContent = formatTime(audio.currentTime);
    });
    audio.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('ended', () => {
      if (audio.loop) return; 
      nextTrack();
      audio.play().catch(() => {  });
    });
    audio.addEventListener('play', () => {
      isPlaying = true;
      updatePlayButton(true);
      playerBox?.classList.add('playing');
    });
    audio.addEventListener('pause', () => {
      isPlaying = false;
      updatePlayButton(false);
      playerBox?.classList.remove('playing');
    });
  }
  function bindControlButtons() {
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlay);
    if (prevBtn) prevBtn.addEventListener('click', prevTrack);
    if (nextBtn) nextBtn.addEventListener('click', nextTrack);
    if (repeatBtn) repeatBtn.addEventListener('click', toggleRepeat);
    if (shuffleBtn) shuffleBtn.addEventListener('click', toggleShuffle);
  }
  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      const tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        nextTrack();
      } else if (e.code === 'ArrowLeft') {
        prevTrack();
      }
    });
  }
  function initDOMRefs() {
    playerBox = document.querySelector('.player-box');
    audio = document.getElementById('audio');
    titleEl = document.getElementById('track-title');
    playPauseBtn = document.getElementById('play-pause');
    progressBar = document.getElementById('progress-bar');
    currentTimeEl = document.getElementById('current-time');
    durationEl = document.getElementById('duration');
    repeatBtn = document.getElementById('repeat-btn');
    shuffleBtn = document.getElementById('shuffle-btn');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('skip-btn') || document.getElementById('next-btn');
    progressContainer = document.getElementById('progress-container');
    volumeTrack = document.getElementById('custom-volume-track');
    volumeFill = document.getElementById('custom-volume-fill');
    volumeThumb = document.getElementById('custom-volume-thumb');
    volToggle = document.getElementById('vol-toggle');
    playlistListEl = document.getElementById('playlist-list');
  }
  function init() {
    initDOMRefs();
    renderDynamicPlaylist();
    bindControlButtons();
    setupProgress();
    setupVolumeUI();
    bindAudioEvents();
    setupKeyboardShortcuts();
    loadTrack(currentIndex, false);
    const pct = audio.volume || 0.5;
    audio.volume = pct;
    if (volumeFill && volumeThumb) {
      volumeFill.style.width = `${pct * 100}%`;
      volumeThumb.style.left = `${pct * 100}%`;
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.VeilPlayer = {
    playlist,
    loadTrack: (i, autoplay) => loadTrack(i, autoplay),
    togglePlay,
    nextTrack,
    prevTrack,
    toggleShuffle,
    toggleRepeat,
    getState: () => ({ currentIndex, isPlaying, isRepeat, isShuffled })
  };
})();