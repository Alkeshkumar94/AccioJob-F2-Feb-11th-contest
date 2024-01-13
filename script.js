let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let arr2=
  [
    { id: 4, name: "joe", age: "22", profession: "manager" },
    { id: 5, name: "rahul", age: "21", profession: "manager" },
    { id: 6, name: "alkesh", age: "17", profession: "manager" },
  ]
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(element=>{
        if(element.profession==="developer")
        {
            console.log(`ID:${element.id},NAME:${element.name},AGE:${element.age},PROFESSION:${element.profession}`)
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    
    arr.forEach(element => {
        if(element.profession==="developer")
        {
        console.log(`ID:${element.id},NAME:${element.name},AGE:${element.age},PROFESSION:${element.profession}`)
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee =  {id:4,name:"susan",age:"20",profession:"intern"} 
    arr.push(newEmployee);
    arr.forEach(element=>
        {
            console.log(`ID:${element.id},NAME:${element.name},AGE:${element.age},PROFESSION:${element.profession}`)
        });

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr=arr.filter(element=>element.profession!=="admin");
    arr.forEach(element=>
        {
            console.log(`ID:${element.id},NAME:${element.name},AGE:${element.age},PROFESSION:${element.profession}`)
        });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
   let totalArray = arr.concat(arr2);
   console.log(totalArray);
  }