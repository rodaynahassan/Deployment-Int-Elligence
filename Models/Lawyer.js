const uuid = require('uuid')
//require case class in mongo 
class Lawyer{

constructor(firstName,lastName,gender,nationality,identificationType,identificationNum,birthDate,address,telephone,mobile,fax,email,password){

    this.lawyerID = uuid.v4();
    this.firstName=firstName;                       //String
    this.lastName=lastName;                         //String
    this.gender=gender;                             //String
    this.nationality=nationality;                   //String
    this.identificationType=identificationType;     //String
    this.identificationNum=identificationNum;       //String
    this.birthDate=birthDate;                       //Date
    this.address=address;                           //String
    this.telephone=telephone;                       //String
    this.mobile=mobile;                             //String
    this.fax=fax;                                   //String
    this.email=email;                               //Email Format
    this.cases=[];                                  //Array of cases
    this.password=password                          //String
    }
}

module.exports=Lawyer
//export lawyer class in mongo 