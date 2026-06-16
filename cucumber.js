export default{
    default: {
        require: [
            'features/step-defination/*.js'
        ],
        format: [
            'progress',
            'html:reports/cucumber-report.html'
        ]
    }
}