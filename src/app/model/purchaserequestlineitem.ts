export class PurchaseRequestLineItem {
   Id                   : number;
   PurchaseRequestID    : number;
   ProductID            : number;
   ProductName          : string;
   ProductPrice         : number;
   Quantity             : number;
   LineItemTotal        : number;

   static sortableKeys =
       ['ProductID','Quantity'];

   constructor (
      Id                  : number = 0,
      PurchaseRequestID   : number = 0,
      ProductID           : number = 0,
      ProductName         : string = '',
      ProductPrice        : number = 0,
      Quantity            : number = 0,
      LineItemTotal       : number = 0
      )    
   {
       this.Id                  = Id;
       this.PurchaseRequestID   = PurchaseRequestID;
       this.ProductID           = ProductID;
       this.ProductName         = ProductName;
       this.ProductPrice        = ProductPrice;
       this.Quantity            = Quantity;
       this.LineItemTotal       = LineItemTotal;
   }
}