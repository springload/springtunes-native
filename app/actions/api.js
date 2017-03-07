const api = {};

api.fetchSong = () => fetch('http://localhost:3000/api/playing');

api.togglePause = () => fetch('http://localhost:3000/api/playing', {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

api.next = () => fetch('http://localhost:3000/api/playing', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'next' }),
});

api.back = () => fetch('http://localhost:3000/api/playing', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'back' }),
});

api.mute = () => fetch('http://localhost:3000/api/volume', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'mute' }),
});

api.unmute = () => fetch('http://localhost:3000/api/volume', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'unmute' }),
});

api.changeVolume = (volumeValue) => fetch('http://localhost:3000/api/volume', {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ volume: volumeValue }),
});

export default api;
