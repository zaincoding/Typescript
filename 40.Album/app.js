/*interface Album {
  artist:string;
  album_title:string;
  num_truck?:number;
} */
function music_album(artist, album_title, num_truck) {
    var Album = {
        artist: artist,
        album_title: album_title,
    };
    if (num_truck !== undefined) {
        Album.num_truck = num_truck;
    }
    return Album;
}
var album1 = music_album("Pink Floyd", "The Dark Side of the Moon.", 10);
var album2 = music_album("The Beatles", "Abbey Road.");
var album3 = music_album("Michael Jackson", "Thriller", 20);
console.log(album1);
console.log(album2);
console.log(album3);
