export class Product {
   Id          :  number;
   VendorId    :  number;
   PartNumber  :  string;
   Name        :  string;
   Price       :  number;
   Unit        :  string;
   PhotoPath   :  string;

   static sortableKeys =
       ['Name','PartNumber','Price', 'Id'];

   constructor (
       Id          :  number = 0,
       VendorId    :  number = 0,
       PartNumber  :  string = '',
       Name        :  string = '',
       Price       :  number = 0,
       Unit        :  string = '',
       PhotoPath   :  string = '' )    
   {
       this.Id          = Id;
       this.VendorId    = VendorId;
       this.PartNumber  = PartNumber;
       this.Name        = Name;
       this.Price       = Price;       
       this.Unit        = Unit;
       this.PhotoPath   = PhotoPath;     
   }
}