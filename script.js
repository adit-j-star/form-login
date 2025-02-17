document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.5;  // Sesuaikan volume jika diperlukan

    // Pastikan audio berjalan di beberapa browser dengan interaksi user
    document.body.addEventListener("click", function() {
        audio.play();
    });
});