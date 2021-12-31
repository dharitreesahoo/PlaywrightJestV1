module.exports={
    preset:'jest-playwright-preset',
    testRunner:"jasmine2",
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    verbose:true,
    "reporters":[
        "default",
        ["jest-html-reporters",{
            "publicPath":"./html-report",
            "filename":"report.html",
            "openReport":false
        }]
    ]
}