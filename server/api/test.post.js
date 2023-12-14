export default defineEventHandler((event)=>{
  // console.log(event.node.req.body); //{"hello":"world "}
  let postData  = JSON.parse(event.node.req.body); // 轉物件
  
  const data = {
    name: "mike",
    age: 12,
    postData ,
  };
  return data
})