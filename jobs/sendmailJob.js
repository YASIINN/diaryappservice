const kue = require('kue'),
    queue = kue.createQueue();
const sendMail = require("../utils/sendemail")
queue.process('email', function(job, done) {
    email(job.id, job.data, done);
});
const email = async function(id, email, done) {
    setTimeout(async ()=>{
        await sendMail(email.to, email.title, email.content)
        done(null, { result: 'Mail Başarıyla Gönderildi' });
    },10000)



};
queue
    .on('job enqueue', function(id, type) {
        console.log('job %s got queued of type %s with id %s', id, type);
    })
    .on('job complete', function(id, result) {
        console.log("iş bende", result)
        console.log('job complete: ' + id);
    });
module.exports = (data) => {
    for (var i = 0; i < data.length; i++) {
        queue
            .create('email', {
                id: i,
                content: data[i].text,
                title: data[i].title,
                number: i,
                to: data[i].to,
            })
            .removeOnComplete(true)
            .save();
    }
}
