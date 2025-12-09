export async function POST() {
  console.log("Index notify received");
  return Response.json({ok:true});
}
