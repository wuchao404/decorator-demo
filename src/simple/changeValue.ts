// 用于属性上，绝对不能写第三个参数（PropertyDescriptor）
const changeValue = (value: any) => {
  return (target:Object, key: string) => {
    console.log('target:',target)
    console.log('key:',key)
    Object.defineProperty(target,key,{ value, writable: true });
  }
}

class Value{
  @changeValue('200')
  num:string = '50';
}
// 测试无效果，无法将num修改为200
const value = new Value();
console.log('num:',value.num)