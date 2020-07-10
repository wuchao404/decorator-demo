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
