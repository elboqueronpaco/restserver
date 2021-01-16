const messageJsonUser = (res, userDB) => res.json({
    ok: true,
    data: userDB
})

module.exports = {
    messageJsonUser
}