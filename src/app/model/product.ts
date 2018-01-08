export class Product {
   Id          :  number;
   VendorID    :  number;
   VendorName  :  string;
   PartNumber  :  string;
   Name        :  string;
   Price       :  number;
   Unit        :  string;
   PhotoPath   :  string;

   static sortableKeys =
       ['Name','PartNumber','Price', 'Id'];

   constructor (
       ID          :  number = 0,
       VendorId    :  number = 0,
       VendorName  :  string = '';
       PartNumber  :  string = '',
       Name        :  string = '',
       Price       :  number = 0,
       Unit        :  string = '',
       PhotoPath   :  string = '' )    
   {
       this.Id          = Id;
       this.VendorID    = VendorId;
       this.VendorName  = VendorName;
       this.PartNumber  = PartNumber;
       this.Name        = Name;
       this.Price       = Price;       
       this.Unit        = Unit;
       this.PhotoPath   = PhotoPath;     
   }
}