const messageError = (err, res, numberError) => res.status(numberError).json({
    ok: false,
    err
})

const messageErrorWithMessage = (err, res, numberError, messageErr) =>  res.status(numberError).json({
    ok: false,
    err: {
        message: messageErr
    }
})

module.exports= {
    messageError,
    messageErrorWithMessage
}