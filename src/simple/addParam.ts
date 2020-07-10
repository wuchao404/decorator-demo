// 给类添加变量
const addParam = (target:any) => {
  return class extends target {
    p = 50;
  }
}

@addParam
class Rocket{

}
const r:any = new Rocket();
console.log('param:',r.p)