var fs = require('fs');
var spawn = require('child_process').spawn;


//var cmd = 'java -jar /Users/hu/AndroidBuild/PackerNg-1.0.7.jar ${WORKSPACE}/app/build/outputs/apk/AndResGuard_app-pgyer-release/app-pgyer-release_signed_7zip_aligned.apk ${WORKSPACE}/config/market_pgyer.txt';
//exec(cmd, function(err,stdout,stderr){
//    if(err) {
//        console.log('PackerNG'+stderr);
//    } else {
//        console.log("PackerNG "+stdout);
//
//    }
//
//    var args = process.argv.splice(2);
//	var cmd = 'curl -F "file=@${WORKSPACE}/apks/app-pgyer-release_signed_7zip_aligned-pgyer.apk" -F "uKey=b7b7c394273b4a322c6c581454322ece" -F "_api_key=01a6c110c8ca950f35eb85722ae5d037" https://www.pgyer.com/apiv1/app/upload';
//	exec(cmd, function(err,stdout,stderr){
//	    if(err) {
//	        console.log('Upload Error: '+stderr);
//	    } else {
//	        var result = JSON.parse(stdout);
//	        console.log("RCodeURL="+result.data.appQRCodeURL+"appVersion="+result.data.appVersion);
//
//	    }
//	});
//
//});
//var cmd = 'gradlew resguardRelease';

var cmd = process.platform === "win32" ? "gradlew.bat" : "./gradlew";

var gradlew = spawn(cmd,['resguardRelease']);

gradlew.stdout.on('data', function(stdout){
    console.log('Upload data: '+stdout);
});

gradlew.stderr.on('data', function(stderr){
    console.log('Upload stderr: '+stderr);
});

gradlew.on('error', function(err){
    console.log('Upload err: '+err);
});

gradlew.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

//exec(cmd, function(err,stdout,stderr){
//    if(err) {
//        console.log('Upload err: '+err);
//    } else {
//       console.log('Upload stdout: '+stdout);
// console.log('Upload stderr: '+stderr);
//    }
//});