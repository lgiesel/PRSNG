export class PurchaseRequest {
  Id                  : number;
  UserID              : number;
  Description         : string;
  Justification       : string;
  DateNeeded          : Date;
  DeliveryMode        : string;
  StatusID            : number;
  Total               : number;
  SubmittedDate       : string;  


  // FOR THE TWO DATE TIMESTAMPS - DATENEEDED, SUBMITTED DATE
  // @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS")  
  // Timestamp dateNeeded;

   static sortableKeys =
       ['UserID','DateNeeded','Total', 'StatusId'];

   constructor (
      Id                  : number = 0,
      UserID              : number = 0,
      Description         : string = '',
      Justification       : string = '',
      DateNeeded          : Date = null,
      DeliveryMode        : string = '',
      StatusID            : number = 0,
      Total               : number = 0,
      SubmittedDate       : string = '' 
      // SubmittedDate       : Date = null, 
      )    
   {
       this.Id                 = Id;
       this.UserID             = UserID;   
       this.Description        = Description;
       this.Justification      = Justification;
       this.DateNeeded         = DateNeeded;
       this.DeliveryMode       = DeliveryMode;
       this.StatusID           = StatusID;
       this.Total              = Total;
       this.SubmittedDate      = SubmittedDate;               
   }
}