export async function facebookParser(url: string){
  return {
    platform:"facebook",
    title:"Sample Facebook Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}