const express = require('express')
const {mongoose}=require('./db.js');
const app = express();
const dotenv=require('dotenv')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors=require('cors')
const allowedOrigins = ['http://localhost:3000',
                      'http://localhost:3001'];
//middlewares/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(cors({credentials:true,
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));   
// app.use(cors(
//         {origin:'http://localhost:3000',
//         credentials:true}
//             ));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use((req,res,next)=>
    {
        console.log(req.cookies)
        next();
    })
dotenv.config();
//middlewares/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//routes importing////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Admin Routes
        const addAttendanceDetails=require('./routes/admin/addAttendanceDetails')
        const addPaymentDetails=require('./routes/admin/addPaymentDetails')
        const addSalaryDetails=require('./routes/admin/addSalaryDetails')
        const updatePayment =require('./routes/admin/updatePayment')
        const updateSalary =require('./routes/admin/updateSalary')
        const updateAttendance =require('./routes/admin/updateAttendance')
        const viewNotification=require('./routes/admin/viewNotification')
        const adminLogin=require('./routes/admin/adminLogin')
        const viewadminUser=require('./routes/admin/viewadminUser')
        const updateAdmin=require('./routes/admin/updateAdmin')
        const logoutUser=require('./routes/user/logoutUser')
    //User Routes
        const login=require('./routes/user/login')
        const viewUser=require('./routes/user/viewUser')
        const updateUser=require('./routes/user/updateUser')
        const viewAttendanceUser=require('./routes/user/viewAttendanceUser')
        const viewSalaryUser=require('./routes/user/viewSalaryUser')
        const viewPaymentUser=require('./routes/user/viewPaymentUser')
        const salaryCalculations=require('./routes/user/salaryCalculations')
        const sendAttendanceNotification=require('./routes/user/sendAttendanceNotification')
        const sendSalaryNotification=require('./routes/user/sendSalaryNotification')
        const sendPaymentNotification=require('./routes/user/sendPaymentNotification')
        const logoutAdmin=require('./routes/admin/logoutAdmin')

    //common routes
        const forgotPassword=require('./routes/forgotPassword')
        const registration=require('./routes/registration')
        const viewSalary=require('./routes/viewSalary')
        const viewPayment=require('./routes/viewPayment')
        const viewAttendance=require('./routes/viewAttendance')
     
//routes importing////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//routes middlewares//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use('/registration',registration)
app.use('/login',login)
app.use('/adminLogin',adminLogin)
app.use('/forgotPassword',forgotPassword)
app.use('/viewUser',viewUser)
app.use('/viewadminUser',viewadminUser)
app.use('/updateUser',updateUser)
app.use('/updateAdmin',updateAdmin)
app.use('/addAttendanceDetails',addAttendanceDetails)
app.use('/viewAttendance',viewAttendance)
app.use('/viewAttendanceUser',viewAttendanceUser)
app.use('/updateAttendance',updateAttendance)
app.use('/addSalaryDetails',addSalaryDetails)
app.use('/viewSalary',viewSalary)
app.use('/viewSalaryUser',viewSalaryUser)
app.use('/updateSalary',updateSalary)
app.use('/addPaymentDetails',addPaymentDetails)
app.use('/viewPayment',viewPayment)
app.use('/viewPaymentUser',viewPaymentUser)
app.use('/updatePayment',updatePayment)
app.use('/sendAttendanceNotification',sendAttendanceNotification)
app.use('/sendSalaryNotification',sendSalaryNotification)
app.use('/sendPaymentNotification',sendPaymentNotification)
app.use('/viewNotification',viewNotification)
app.use('/salaryCalculations',salaryCalculations)
app.use('/userlogout',logoutUser)
app.use('/adminlogout',logoutAdmin)
//routes middlewares//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//server
app.listen(5000, () => console.log('Started on 5000 port'))