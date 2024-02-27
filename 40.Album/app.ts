
function music_album(artist:string,album_title:string,num_truck?:number){
const Album:{artist:string,album_title:string,num_truck?:number}={
    artist:artist,
    album_title:album_title,

}
  if(num_truck !== undefined){
    Album.num_truck = num_truck
  }


 return Album;
}

const album1 = music_album("Pink Floyd","The Dark Side of the Moon.", 10)
const album2 = music_album("The Beatles","Abbey Road.")
const album3 = music_album("Michael Jackson","Thriller",20)

console.log(album1)
console.log(album2)
console.log(album3)