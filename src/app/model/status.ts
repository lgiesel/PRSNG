export class Status {
   Id          : number;
   Description : string;

   static sortableKeys = ['Description'];

   constructor (
       ID          :  number = 0,
       Description :  string = '' )    
   {
       this.Id          = ID;
       this.Description = Description;  
   }
}