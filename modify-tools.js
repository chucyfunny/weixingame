// modify-tools.js

// 读取请求的 body 数据
let body = JSON.parse($request.body);

// 修改 ToolCleanBoxObject 的值为 120
body.archives[0].data.playerSelfArchive = body.archives[0].data.playerSelfArchive.replace(/"ToolCleanBoxObject":\d+/g, '"ToolCleanBoxObject":120');

// 将修改后的数据转换回字符串并返回
$done({ body: JSON.stringify(body) });
