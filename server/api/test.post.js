export default defineEventHandler(async (event)=>{
  const postData = await readBody(event);
  console.log(postData)
  // let postData  = JSON.parse(event.node.req.body); // 轉物件
  
  // api 處理
  const data = {
    name: "mike",
    age: 12,
    postData
  };
  return data
})