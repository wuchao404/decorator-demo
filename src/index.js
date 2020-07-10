function readonly(target, key, descriptor){
  descriptor.writable = false;
  return descriptor;
}
class Cat{
  @readonly
  eat() {

  }
}