export class PurchaseRequest {
  Id                  : number;
  UserID              : number;
  Description         : string;
  Justification       : string;
  DateNeeded          : string;
  DeliveryMode        : string;
  StatusID            : number;
  Total               : number;
  SubmittedDate       : string;  
  ReasonForRejection  : string;
  UpdatedByUser       : number;  

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
      DateNeeded          : string = '',
      // DateNeeded          : Date = null,
      DeliveryMode        : string = '',
      StatusID            : number = 0,
      Total               : number = 0,
      SubmittedDate       : string = '',  
      // SubmittedDate       : Date = null,  
      ReasonForRejection  : string = '',
      UpdatedByUser       : number = 0     
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
       this.ReasonForRejection = ReasonForRejection;
       this.UpdatedByUser      = UpdatedByUser;                  
   }
}