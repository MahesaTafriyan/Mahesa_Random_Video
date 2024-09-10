function playVideo(videoSource) {
    // Menampilkan overlay
    document.getElementById("video-overlay").style.display = "block";

    // Menambahkan video ke container
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = `
        <video controls autoplay>
            <source src="${videoSource}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
}

function closeVideo() {
    // Menyembunyikan overlay
    document.getElementById("video-overlay").style.display = "none";

    // Menghapus video dari container
    document.getElementById("video-container").innerHTML = "";
}
