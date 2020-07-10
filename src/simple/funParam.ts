// 方法的参数加装饰器
/**
 * 
 * @param target 所在类
 * @param key    方法名 
 * @param index  参数顺序，从0开始计算 
 */
function funParam(target: Object, key:string, index: number){
  console.log('target:',target)
  console.log('name:',name)
  console.log('index:',index)
}
class TestFuncParam{
  test(@funParam name: string, @funParam age:number,sex:string){
    return { name, age, sex }
  }
}

new TestFuncParam().test('john',22,'boy')
