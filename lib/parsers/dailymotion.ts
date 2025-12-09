export async function dailymotionParser(url: string){
  return {
    platform:"dailymotion",
    title:"Sample Dailymotion Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}