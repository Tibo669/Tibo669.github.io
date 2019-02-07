const elasticURL = "https://search-elastic-amphore-3ffd2anu3kwaco6m4gqfny3t2y.eu-west-3.es.amazonaws.com/amphore/data";
let userUUID = '';
let userUUIDStored = sessionStorage.getItem('user_uuid');
if (userUUIDStored === null) {
  userUUID = createUUID();
  sessionStorage.setItem('user_uuid', userUUID);
}
else {
  userUUID = userUUIDStored;
}

function createUUID(){
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (dt + Math.random()*16)%16 | 0;
    dt = Math.floor(dt/16);
    return (c==='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

function postElastic(etape)
{
  const xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open("POST", elasticURL, true);
  xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
  xmlHttpRequest.send(JSON.stringify(
    {
      "@timestamp": new Date().toISOString(),
      "etape": etape,
      "uuid": userUUID
    }
  ));
}