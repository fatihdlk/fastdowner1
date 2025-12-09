export async function snapchatParser(url: string){
  return {
    platform:"snapchat",
    title:"Sample Snapchat Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}