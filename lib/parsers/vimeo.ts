export async function vimeoParser(url: string){
  return {
    platform:"vimeo",
    title:"Sample Vimeo Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}