function receivesAFunction(callback){
    callback();
}


function returnsANamedFunction(){
   return function postnutClarity(){

   }
}


function  returnsAnAnonymousFunction(){
    return () => console.log(`unnamed function`)
}
  