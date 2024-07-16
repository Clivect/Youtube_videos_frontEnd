const apiKey = 'AIzaSyBXy2z08-9QwL_tYge_UJsiTw9Kd2BlB9g';
const videoContainer = document.getElementById('video-container');

async function searchVideos() {
    const query = document.getElementById('search').value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}&maxResults=10`;

    const response = await fetch(url);
    const data = await response.json();
    displayVideos(data.items);
}

function displayVideos(videos) {
    videoContainer.innerHTML = '';
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
            <h3>${video.snippet.title}</h3>
        `;
        videoContainer.appendChild(videoElement);
    });
}
