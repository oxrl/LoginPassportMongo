var records = [
    { id: 1, username: 'oxrl', password: 'misuka1', displayName: 'Xavier', emails: [ { value: 'o.romero@gmail.com' } ] }
    , { id: 2, username: 'demon', password: 'demon', displayName: 'frijol', emails: [ { value: 'frijolito@example.com' } ] }
];

exports.buscarPorId = function(id, cb) {
    process.nextTick(function() {
        var idx = id - 1;
        if (records[idx]) {
            cb(null, records[idx]);
        } else {
            cb(new Error('User ' + id + ' does not exist'));
        }
    });
};

exports.buscarPorUsuario = function(username, cb) {
    process.nextTick(function() {
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.username === username) {
                return cb(null, record);
            }
        }
        return cb(null, null);
    });
};