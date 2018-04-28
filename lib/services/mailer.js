import nodemailer from 'nodemailer'
import Handlebars from 'handlebars'
import fs from 'fs'
import path from 'path'

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
			// cc: 'peakdrum@gmail.com',
      subject: subject,
      html: mailbody,
    };

    return this.transporter.sendMail(mailOption)
  }

  sendMailTransactionDetail(email, detail){
		const { address, province, postalCode, name, productName, price, comission } = detail
		let subject = 'You have new transaction';
		let source = fs.readFileSync(path.join(__dirname, '../templates/transaction-detail-template.hbs'), 'utf8');
		let template = Handlebars.compile(source);
		let mailbody = template({address, province, postalCode, name, productName, price, comission})
    return this.sendMail(email,subject,mailbody);
	}
	
  sendMailTransactionResult(email, detail){
		const { date, productName, price, status } = detail
		let subject = 'Transaction Result';
		let source = fs.readFileSync(path.join(__dirname, '../templates/transaction-result-template.hbs'), 'utf8');
		let template = Handlebars.compile(source);
		let mailbody = template({date, productName, price, status})
    return this.sendMail(email,subject,mailbody);
	}
	
  sendMailWithdrawResult(email, detail){
		const { date, amount, status } = detail
		let subject = 'Withdraw Result';
		let source = fs.readFileSync(path.join(__dirname, '../templates/dispute-result-template.hbs'), 'utf8');
		let template = Handlebars.compile(source);
		let mailbody = template({date, amount, status})
    return this.sendMail(email,subject,mailbody);
  }
}

export default MailerService;