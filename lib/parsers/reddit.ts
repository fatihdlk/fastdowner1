export async function redditParser(url: string){
  return {
    platform:"reddit",
    title:"Sample Reddit Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}