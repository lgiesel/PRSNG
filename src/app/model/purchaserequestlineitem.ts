export class PurchaseRequestLineItem {
   Id                   : number;
   PurchaseRequestID    : number;
   ProductID            : number;
   ProductName          : string;
   Quantity             : number;

   static sortableKeys =
       ['ProductID','Quantity'];

   constructor (
      Id                  : number = 0,
      PurchaseRequestID   : number = 0,
      ProductID           : number = 0,
      ProductName         : string = '',
      Quantity            : number = 0
      )    
   {
       this.Id                 = Id;
       this.PurchaseRequestID  = PurchaseRequestID;
       this.ProductID          = ProductID;
       this.ProductName        = ProductName;
       this.Quantity           = Quantity;
   }
}