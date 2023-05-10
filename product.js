class Product
{

     constructor(productName,productCost,prodDesc) 

    {

          this.proname=productName
          this.procost=productCost
          this.prodesc=prodDesc
    }

              showDetails()
          {
            console.log(this.proname,this.procost,this.prodesc)
          }
}

         let obj=new Product("Creta",600000,"nice vehical")
    // console.log(obj.proname,obj.peocost,obj.prodesc)
     
     console.log(obj) 
     obj.showDetails()

       ///////////////json file
     let arr=[]

      arr.push(new Product("BMW",10000000,"seafy vehical"))
      arr.push(new Product("XUV",20000000,"seafy vehical"))
      arr.push(new Product("NEXON",50000000,"good  vehical"))
      arr.push(new Product("wagnao",10000000,"only cab booking vehical"))

       console.log(arr)
