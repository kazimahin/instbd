module.exports = [{
  name: "Dashbord",
  icon: "far fa-tachometer-fast",
  link: "/d/",
  permission:{read:true,write:false}
   
},
{
  name: "User",
  icon: "fas fa-user-friends",
  permission:{read:true},
   
  link: [{
      name: "Admin",
      link: "/d/user/admin",
      permission:{read:true, write:false,writeAdmin:[],addAdmin:false } //on admin writeAdmin:[hisid] //on student read and write false // writeadmin:[all ] on super admin
         
    },
    {
      name: "Teacher",
      link: "/d/user/teacher", 
      permission:{read:true, write:true,  writeTeacher:[],addTeacher:false} //on admin and super admin writeTeacher:[all] // on student read true ,write:false 
       
         
    },
    {
      name: "Student",
      link: "/d/user/student",
      permission:{read:true,write:true, writeStudent:[],addStudent:false}
         
    }
  ]
},
{
  name: "Academic",
  icon: "fas fa-school",
  permission:{read:true},
   
  link: [{
      name: "Class",
      link: "/d/academic/class",
      permission: {read:true,write:true,addClass:false,writeClass:[] ,  } //add class er vitorei subject attach korbe
         
    },
    {
      name: "Subject",
      link: "/d/academic/subject",
      permission: {read:true,write:false,addSubject:false,}
         
    },
    {
      name: "Syllabus",
      link: "/d/academic/ad",
      permission: {read:true,write:true,writeSyllabus:[]}
       
         
    },
    {
      name: "Routine",
      link: "/d/academic/routine",
      permission: {read:true,write:true,writeRutine:[]}
       
         
    },
    {
      name: "Event",
      link: "/d/academic/event",
      permission: {read:true,write:false}

         
    },
    {
      name: "Notice",
      link: "/d/academic/notice",
      permission: {read:true,write:true,writeNotice:[]}

         
    },
  ]
},
{
  name: "Exam",
  icon: "fas fa-file-edit",
  permission: {read:true,write:false},

   
  link: [{
      name: "All Exam",
      link: "/d/exam/all",
      permission: {read:true,write:false}

         
    },
    {
      name: "Result",
      link: "/d/exam/result",
      permission: {read:true,write:false}

         
    },
    {
      name: "Grade",
      link: "/d/exam/grade",
      permission: {read:true,write:false}

         
    },
    {
      name: "Promotion",
      link: "/d/exam/promotion",
      permission: {read:true,write:false}

         
    },
  ]
},
{
  name: "Setting",
  icon: "fas fa-cog",
  permission: {read:true,write:false},
   
  link: [{
      name: "Software Setting",
      link: "/d/setting/software",
      permission: {read:true,write:false}

         
    },
    {
      name: "Account Setting",
      link: "/d/setting/account",
      permission: {read:true,write:false}

     },
    {
      name: "about",
      link: "/d/about",
      permission: {read:true,write:false}

    },
  ]
},
{
  name: "Log Out",
  icon: "fas fa-sign-out-alt",
  link: "/d/logout",
  permission: {read:true,write:false}

   
}
]