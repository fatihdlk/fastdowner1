export async function twitterParser(url: string){
  return {
    platform:"twitter",
    title:"Sample Twitter Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}