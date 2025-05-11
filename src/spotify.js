export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://192.168.1.66:3000/callback";
const clientId = '1ede66ffacf04d33b4ba664924398a04';

const scopes = [
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
}