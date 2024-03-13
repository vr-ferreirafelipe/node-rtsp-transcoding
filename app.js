Stream = require("node-rtsp-stream");

stream = new Stream({
  name: "name",
  streamUrl:
    "rtsp://admin:Mob$2024@192.168.0.17:554/cam/realmonitor?channel=1&subtype=0",
  wsPort: 9999,
  ffmpegOptions: {
    "-stats": "",
    "-r": 30,
  },
});
