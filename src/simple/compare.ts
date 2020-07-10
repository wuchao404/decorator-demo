const compare = (num: number) => (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originFun:any = descriptor.value;
    descriptor.value = (...args: any) =>{
      const _num: any = target['num']
      const props = Object.getOwnPropertyNames(target);
      console.log('props:',props)
      console.log('_num:',_num)
      if (_num > num) {
        originFun.apply(target, args)
      }else {
        console.log("数据太小:",num)
      }
    }
    return descriptor

}
function version(options: {version: number}){
  return (target: any,propertyKey: string, descriptor: PropertyDescriptor) => {
    
  }
}



class Test {
  public num: number = 50;
  @compare(20)
  test1(){
    console.log("test1开始")
  }
  @compare(100)
  test2(){
    console.log("test2开始")
  }
}

const com = new Test();
com.test1()
com.test2()