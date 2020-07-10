
/**
 * 给方法加日志
 * @param target 所在类
 * @param key 方法名
 * @param descriptor 方法修饰符
 */
function logger(target:Object, key: String, descriptor: PropertyDescriptor){
  descriptor.writable = true;
  const originFun:Function = descriptor.value;
  descriptor.value = function(...args: any[]){
    console.log(`${key} method called with args:  ${JSON.stringify(args)}`);
    const result = originFun.apply(this,args)
    console.log(`${key} method called with args:  ${JSON.stringify(result)}`);
  }
}


class TestLog{
  @logger
  doTest(name: string){
    return { name }
  }
}
const log = new TestLog()
log.doTest('wuchao');
