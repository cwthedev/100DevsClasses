document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
try{
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?stuent=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
  }
  catch(e){
    console.log('you dun messed up now');
    console.error(error);}
}