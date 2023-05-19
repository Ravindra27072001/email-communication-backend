const express = require('express');
const router = express.Router();


const { VerifyOtpController, ReSendOTPController } = require('../../email-communication-engine-backend-master/controller/verification.controller');

router.post('/verifyOTP', async (req, res) => {
    VerifyOtpController(req, res)
})

router.post('/resendOTPVerification', (req, res) => {
    ReSendOTPController(req, res)
})


module.exports = router;