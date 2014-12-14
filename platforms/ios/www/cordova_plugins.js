cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.plugin.datepicker/www/ios/DatePicker.js",
        "id": "com.plugin.datepicker.DatePicker",
        "clobbers": [
            "datePicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.plugin.datepicker": "0.5.0"
}
// BOTTOM OF METADATA
});