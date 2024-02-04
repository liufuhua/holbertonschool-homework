
try {
    var callbackName = 'func1706492776179322224dc-171b-b7e4-d88a-54846b9ec2e2';
    console.log('1、>>>>>>>>>>>>>>>>>>callbackName: ' + callbackName);
    app.setMessageCallback(callbackName, function (in_str, out_str) {
        console.log('2、>>>>>>>>>>>>>>>>>>in_str: ' + in_str);
        console.log('3、>>>>>>>>>>>>>>>>>>out_str: ' + out_str);
    });
    app.sendMessage('getMenuApp', ['260000000010000109 02028 1234 0000510302132019020243015045005000500001400000000 430120450050201902026689784', callbackName]);
} catch (e) {
    console.log('4、>>>>>>>>>>>>>>>>>>error: ' + $.toJSON(e));
}
