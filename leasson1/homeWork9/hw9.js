const someArray = [1, 2, 3 ]

function getArray(someArray){
    let [first, ...other] = someArray
    return first+" " +other
}

console.log(getArray(someArray))

// const organisation = {  
//     name: 'Google',   
//     info: { employees: ["Vlad", "Olga"], partners: ['Microsoft', 'Facebook', 'Xing']   } 
//   };

  function object(team){
    //   const elem = "name: ${name}, employees: ${employees}, partners: ${partners}"
    const {  name: Google,   info: { employees: [Vlad, Olga], partners: [Microsoft, Facebook, Xing]   } } = team 
      let inf = {
          name,
          employees,partners
      }
      console.log("name :" + inf.name + "\nemployees:" + inf.employees + " partners:" + inf.partners)
  }
//   console.log(object(organisation))
object()

