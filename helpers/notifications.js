const nodemailer = require('nodemailer');
var auth = {
    type: 'oauth2',
    user: 'summegreintelligence@gmail.com',
    clientId: '1016590334455-l7nrah3969t7j8ce54rf12uia8eh2ivn.apps.googleusercontent.com',
    clientSecret: 'aaC8Y_TckaxQ3_3Z4DBHD_mU',
    refreshToken: '1/CK8uHTdTYSfaNuTQlZahCykDQ8qa6K0zdPlOD-zs_NY',
    accessToken: 'ya29.GlvZBvIipg0qIrlBhmO4tC7DoBXIX5oBzZ1SMOKBI2ur5fO_TpsuJir7GKCZNFhQBm1jnRKOcgloc-uBxAqgL9KpiKS-gEr0mD46UhTsZiWnj-hED6qlGwxblrYH',
    expires      : 1494388182480,
};



exports.notifyUserForCaseUpdates = function(User,Form){
var mailOptions = {
    from: "Notification Regarding Your Case <summergeintelligence@gmail.com>",
    to: User.email,
    subject: 'Updates!!',
    text: 'Your Case for Company ' + Form.companyName + ' have some updates, Go and check it',
};

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: auth,
});

transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(JSON.stringify(res));
    }
    transporter.close()
});
}
