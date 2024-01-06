// curd
// create
// update
// read
// delete
// تعریف کلاس
class CRUD{

    // property ویژگی
    firstname : string;
    age : number;
    lastname : string;

    // method یکسری کار انجام
  create(): string{
      return "create form";
  }
  update(): string {
      return "update";
  }
  read(){
      return "read";
  }

  delete():string{
      return "delete"
  }

  method1(){
    let k = 1
      if(k == 2){
          k = k *3
      }else{
          k = k + 1
      }
      console.log(k)
  }
}

// ایجاد یک کلاس
let c = new CRUD()

class Person {
    // constructor 1.method 2.new
    constructor(n, a) {
        this.firstname = n
        this.age = a
    }
    firstname : string;
    age;
    walking(){
        console.log("walk")
    }
}
class Animal{
    // visibility public private protected
    // یکسری ویژگی برای آن تعریف می کنیم
    public name; // public
    kind; // public
    private secretname;
    protected secondname;
    // sound یکسری کار انجام می دهیم
    eating(food):string{
        this.secretname = "mycow"
        return  "eating" + food
    }
}

// یک نمونه از کلاس می سازیم
let cat = new Animal()
// برای صدا زدن متد خوردن برای گربه
cat.eating("apple")

let cow = new Animal()
cow.eating("grass")
cow.name = "zari"

// create person
// create instance from class
let reza = new Person("reza", 30)
// reza.firstname = "reza"
// reza.age = 30
reza.walking()
let hasan = new Person("hasan", 23)

