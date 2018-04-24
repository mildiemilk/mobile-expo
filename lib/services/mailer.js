import nodemailer from 'nodemailer';

class MailerService {
  constructor() {
    const transportOptions = {
			host: 'smtp.office365.com',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: 'admin@sharemai.com', // generated ethereal user
				pass: '8tMX2bVjVmyMU86L' // generated ethereal password
			},
			requireTLS:true
    }
		this.transporter = nodemailer.createTransport(transportOptions);
		this.verify()
  }

  verify() { // verify connection configuration
    this.transporter.verify(function(error, success) {
			if (error) {
					console.log(error);
			} else {
					console.log('Server is ready to take our messages');
			}
    });
  }

  sendMail(to, subject, mailbody) {
    let mailOption = {
      from: '"share mai" <admin@sharemai.com>', // sender address
			to: to,
			cc: 'peakdrum@gmail.com',
      subject: subject,
      html: mailbody,
    };

    return this.transporter.sendMail(mailOption)
  }

  sendMailTransactionDetail(email, detail){
		const { transportDetail, name, productName, comission } = detail
    let subject = 'You have new transaction';
		let mailbody = '<p>Transaction detail</p>' +
		'<ul style="list-style-type:none">' +
		'<li>Customer address: '+ transportDetail + '</li>' +
		'<li>Customer name: ' + name + '</li>' +
		'<li>Product name: ' + productName + '</li>' +
		'<li>Comission: ' + comission + '</li></ul> ';
    return this.sendMail(email,subject,mailbody);
	}
	
  sendMailTransactionResult(email, text){
    let subject = 'Transaction Result';
    let mailbody = '<p>' + text +'</p>';
    return this.sendMail(email,subject,mailbody);
	}
	
  sendMailWithdrawResult(email, text){
    let subject = 'Withdraw Result';
    let mailbody = '<p>' + text +'</p>';
    return this.sendMail(email,subject,mailbody);
  }
}

export default MailerService;