export async function tiktokParser(url: string){
  return {
    platform:"tiktok",
    title:"Sample TikTok Title",
    thumbnail:"",
    formats:[
      {quality:"480p", url:"#"},
      {quality:"720p", url:"#"}
    ]
  };
}