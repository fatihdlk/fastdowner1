export async function youtubeParser(url: string){
  return {
    platform:"youtube",
    title:"Sample YouTube Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}