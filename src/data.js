const studentData = [
    [
        {
            "sId" : "shahs-010",
            "sName" : "Din",
            "sExamName" : "SSC",
            "sPassed" : true,
            "sGPA" : 4,
            "sOn" : 1718508747000
        },
        {
            "sId" : "shahs-010454",
            "sName" : "Islam",
            "sExamName" : "HSC",
            "sPassed" : true,
            "sGPA" : 4,
            "sOn" : 17185087470342
        }
    ],
    [
        {
            "sId" : "shahs-0140",
            "sName" : "Showrov",
            "sExamName" : "Bsc",
            "sPassed" : false,
            "sGPA" : 0,
            "sOn" : 1718508117000
        }
    ]
]

export function getStudentData() {
    return studentData;
}