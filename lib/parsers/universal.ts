export async function universalResolver(url: string){
  return {
    platform:"unknown",
    title:"Unknown URL",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}