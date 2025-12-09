export async function instagramParser(url: string){
  return {
    platform:"instagram",
    title:"Sample Instagram Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}