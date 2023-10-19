class System{
     constructor(name, id, description, domain, base){
          this.name = name;
          this.id = id;
          this.description = description;
          this.domain = domain;
          this.base = base;
     }
     
     getName(){
          return this.name;
     }

     getId(){
          return this.id;
     }

     getDescription(){
          return this.description;
     }

     getDomain(){
          return this.domain;
     }

     getBase(){
          return this.base;
     }
}

export default System;