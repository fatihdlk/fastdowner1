export async function pinterestParser(url: string){
  return {
    platform:"pinterest",
    title:"Sample Pinterest Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}