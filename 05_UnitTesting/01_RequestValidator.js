function validateRequest(object) {
    let result = object;

    let methodPattern = /^GET|POST|DELETE|CONNECT$/;
    if (!result.hasOwnProperty("method") || !methodPattern.test(result.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    let uriPattern = /^[A-Za-z0-9.]+$/;
    if (!result.hasOwnProperty("uri") || !uriPattern.test(object.uri)) {
        throw new Error("Invalid request header: Invalid URI")
    }

    let versionPattern = /HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0|\*/;
    if (!result.hasOwnProperty("version") || !versionPattern.test(result.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    let messagePattern = /[<>\&'"]/;
    if  (!result.hasOwnProperty("message") || messagePattern.test(result.message)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    console.log(result);
    return result;
}
// 77 %

validateRequest(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    });