/**
 * @param{express} nodeJs를 빠르게 대처하기 위함
 */
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// 허가된 webpage만 진행
const cors = require('cors');
const app = express();
app.use(cors()); // app에 cors정책을 사용

// 데이터베이스 연결
mongoose.connect(process.env.DB).then(() => console.log('connected to database'));

module.exports = app;
