const musicManager = {
    audio: null,
    isPlaying: false,
    init() {
        this.audio = new Audio("./Ly.mp3");
        this.audio.loop = true;
        this.audio.volume = 0.7;
        this.audio.preload = "auto";
        this.audio.setAttribute("playsinline", "");
        this.audio.onplay = () => {
            this.isPlaying = true;
            this.updateUI();
        };
        this.audio.onpause = () => {
            this.isPlaying = false;
            this.updateUI();
        };
        document.addEventListener(
            "click",
            () => {
                if (!this.isPlaying) {
                    this.audio.play()["catch"]((_0x13d798) => {
                        console.warn("Không thể phát nhạc:", _0x13d798);
                    });
                }
            },
            {
                once: true,
            }
        );
        this.updateUI();
    },
    togglePlayback() {
        if (!this.audio) {
            return;
        }
        if (this.audio.paused) {
            this.audio.play()["catch"]((_0xb8a46a) => {
                console.warn("Lỗi phát nhạc:", _0xb8a46a);
            });
        } else {
            this.audio.pause();
        }
    },
    updateUI() {
        const _0x178346 = document.getElementById("audio-icon");
        if (this.isPlaying) {
            _0x178346.classList.remove("fa-volume-xmark");
            _0x178346.classList.add("fa-volume-high");
        } else {
            _0x178346.classList.remove("fa-volume-high");
            _0x178346.classList.add("fa-volume-xmark");
        }
    },
};
document.addEventListener("DOMContentLoaded", () => {
    musicManager.init();
    document.getElementById("toggle-audio").addEventListener("click", () => {
        musicManager.togglePlayback();
    });
});
