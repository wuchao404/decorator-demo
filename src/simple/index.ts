function readonly(target: any, key:any, descriptor:any){
  descriptor.writable = false;
  return descriptor;
}
class Cat{
  
  
}
const test =() => {
  let json = {
    version: '1.0.0',
    description: 'this is a json'
  }
  const {version} = json;
  return {
    ...json,
    versionX:version
  }
}
