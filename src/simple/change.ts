const changeValue1 = (value:any) => (target: Object, propertyKey: string) => {
  Object.defineProperty(target, propertyKey, { value });
};

class RocketTest {
  @changeValue1(100)
  fuel = 50
}

const rocketTest:any = new RocketTest()
console.log(rocketTest.fuel) // 100

