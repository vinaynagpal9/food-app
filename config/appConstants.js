'use strict';

const _appConstant = {};

_appConstant.STATUS_MSG = {
	ERROR: {
		DB_ERROR: {
			statusCode: 400,
			customMessage: 'DB Error : ',
			type: 'DB_ERROR'
		},
		INVALID_VERIFICATION_CODE: {
			statusCode: 401,
			customMessage: 'Invalid Verification Code',
			type: 'INVALID_VERIFICATION_CODE'
		},
		INVALID_USER_EMAIL: {
			statusCode: 401,
			customMessage: 'Invalid email',
			type: 'INVALID_USER_EMAIL'
		},
		INVALID_USER_PASS: {
			statusCode: 401,
			customMessage: 'Invalid password',
			type: 'INVALID_USER_PASS'
		},
		INVALID_COMPANYID: {
			statusCode: 401,
			customMessage: 'Invalid company id',
			type: 'INVALID_COMPANYID'
		},
		ALREADY_VERIFIED: {
			statusCode: 401,
			customMessage: 'This account is already verified',
			type: 'ALREADY_VERIFIED'
		},
		INVALID_PROMO_CODE: {
			statusCode: 401,
			type: 'Enter valid promo code',
			customMessage: 'INVALID_PROMO_CODE'
		},
		FIRST_LOGIN_NOT_UPDATED: {
			statusCode: 400,
			customMessage: 'First login not updated',
			type: 'FIRST_LOGIN_NOT_UPDATED'
		},
		DO_CHECKOUT: {
			statusCode: 401,
			customMessage: 'Please checkout first',
			type: 'DO_CHECKOUT'
		},
		USER_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'User not found',
			type: 'USER_NOT_FOUND'
		},
		COMPANY_NAME_NOT_UPDATED: {
			statusCode: 400,
			customMessage: 'Company name not updated',
			type: 'COMPANY_NAME_NOT_UPDATED'
		},
		CONFIG_OBJECT_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Config Object Not Found',
			type: 'CONFIG_OBJECT_NOT_FOUND'
		},
		NDA_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'NDA Not Found',
			type: 'NDA_NOT_FOUND'
		},
		EMPLOYEE_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Employee Not Found with given email',
			type: 'EMPLOYEE_NOT_FOUND'
		},
		LOCATION_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Location not found',
			type: 'Location_NOT_FOUND'
		},
		EMPLOYEES_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'No employees found for specified company',
			type: 'EMPLOYEES_NOT_FOUND'
		},
		DEVICE_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'No Device found for specified device id',
			type: 'DEVICE_NOT_FOUND'
		},
		DEVICES_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'No Device found for specified specified company',
			type: 'DEVICES_NOT_FOUND'
		},
		INVALID_PAIR_CODE: {
			statusCode: 400,
			customMessage: 'Please enter valid pair code',
			type: 'INVALID_PAIR_CODE'
		},
		DEVICE_ALREADY_PAIRED: {
			statusCode: 401,
			customMessage: 'A different device is already paired with given pair code.Please enter different pair code',
			type: 'DEVICE_ALREADY_PAIRED'
		},
		INCORRECT_OTP: {
			statusCode: 400,
			customMessage: 'You have entered the wrong OTP, Please check the OTP and try again!',
			type: 'INCORRECT_OTP'
		},
		INCORRECT_PAIR_CODE: {
			statusCode: 400,
			customMessage: 'You have entered wrong pairing code, Please check the OTP and try again!',
			type: 'INCORRECT_PAIR_OTP'
		},
		INVAID_DEVICE_ID: {
			statusCode: 400,
			customMessage: 'Please enter valid device Id',
			type: 'INVAID_DEVICE_ID'
		},
		INVALID_TOKEN: {
			statusCode: 401,
			customMessage: 'Invalid token provided',
			type: 'INVALID_TOKEN'
		},
		IMP_ERROR: {
			statusCode: 500,
			customMessage: 'Implementation Error',
			type: 'IMP_ERROR'
		},
		INCORRECT_OLD_PASS: {
			statusCode: 400,
			customMessage: 'Incorrect Old Password',
			type: 'INCORRECT_OLD_PASS'
		},
		SAME_PASSWORD: {
			statusCode: 400,
			customMessage: 'Old password and new password are same',
			type: 'SAME_PASSWORD'
		},
		EMAIL_ALREADY_EXISTS: {
			statusCode: 400,
			customMessage: 'This email already exists...Login to continue',
			type: 'EMAIL_ALREADY_EXISTS'
		},
		INCORRECT_TOKEN: {
			statusCode: 400,
			customMessage: 'Enter Correct Token Key',
			type: 'INCORRECT_TOKEN'
		},
		VERIFY_EMAIL: {
			statusCode: 401,
			customMessage: 'Verify Email To Proceed Further',
			type: 'VERIFY_EMAIL'
		},
		SUBSCRIPTION_EXPIRED: {
			statusCode: 401,
			customMessage: 'To continue services please upgrade your account to premium',
			type: 'SUBSCRIPTION_EXPIRED'
		},
		UNAUTHORIZED: {
			statusCode: 401,
			customMessage: 'Invalid api key',
			type: 'UNAUTHORIZED'
		},
		BAD_REQUEST_ERROR: {
			statusCode: 400,
			customMessage: 'Bad Request',
			type: 'BAD_REQUEST_ERROR'
		},
		ORDER_NOT_SAVED: {
			statusCode: 400,
			customMessage: 'Unable to save order in database',
			type: 'ORDER_NOT_SAVED'
		},
		ORDER_NOT_FOUND: {
			statusCode: 400,
			customMessage: 'No order found.Please create an order to proceed further',
			type: 'ORDER_NOT_FOUND'
		},
		ORDER_NOT_UPDATED: {
			statusCode: 400,
			customMessage: 'Unable to update order',
			type: 'ORDER_NOT_UPDATED'
		},
		RECORD_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'No record found for specified company',
			type: 'RECORD_NOT_FOUND'
		},
		EMAIL_LIMIT_EXHAUSTED: {
			statusCode: 401,
			customMessage: 'You have exhausted your email limit.Please recharge to continue sending emails',
			type: 'EMAIL_LIMIT_EXHAUSTED'
		},
		VISITOR_NOT_CREATED: {
			statusCode: 400,
			customMessage: 'Unable to create visitor',
			type: 'VISITOR_NOT_CREATED'
		},
		VISITOR_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'No visitor found',
			type: 'VISITOR_NOT_FOUND'
		},
		VISITORS_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'No visitors found',
			type: 'VISITORS_NOT_FOUND'
		},
		UNABLE_TO_CHECKOUT: {
			statusCode: 404,
			customMessage: 'Unable to checkout',
			type: 'UNABLE_TO_CHECKOUT'
		},
		NO_BALANCE_EXISTS: {
			statusCode: 400,
			customMessage: 'Balance not found for specified company',
			type: 'NO_BALANCE_EXISTS'
		},
		NO_EMAIL_EXISTS: {
			statusCode: 400,
			customMessage: 'No emailID exists for specified company',
			type: 'NO_EMAIL_EXISTS'
		},
		NO_MOBILE_EXISTS: {
			statusCode: 400,
			customMessage: 'No emailID exists for specified company',
			type: 'NO_MOBILE_EXISTS'
		},
		BALANCE_NOT_UPDATED: {
			statusCode: 400,
			customMessage: 'Balance not updated or balance details do not exist for specified company',
			type: 'BALANCE_NOT_UPDATED'
		},
		PROMOTION_BALANCE_NOT_SET: {
			statusCode: 400,
			customMessage: 'Email/SMS balance not set in database',
			type: 'PROMOTION_BALANCE_NOT_SET'
		},
		DEVICE_COUNT_NOT_SET: {
			statusCode: 400,
			customMessage: 'Device count not set in database',
			type: 'DEVICE_COUNT_NOT_SET'
		},
		DEVICE_COUNT_NOT_SET: {
			statusCode: 400,
			customMessage: 'Device count not set in database',
			type: 'DEVICE_COUNT_NOT_SET'
		},
		DEVICE_COUNT_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Device count not found or invalid location Id',
			type: 'DEVICE_COUNT_NOT_FOUND'
		},
		DEVICE_LIMIT_NOT_REMOVED: {
			statusCode: 400,
			customMessage: 'Device limit not removed',
			type: 'DEVICE_LIMIT_NOT_REMOVED'
		},
		DEVICE_LIMIT_EXCEEDED: {
			statusCode: 403,
			customMessage: 'Device limit exceeded',
			type: 'DEVICE_LIMIT_EXCEEDED'
		},
		LOCATION_NOT_CREATED: {
			statusCode: 400,
			customMessage: 'Unable to create location',
			type: 'LOCATION_NOT_CREATED'
		},
		LOCATIONS_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Unable to get locations',
			type: 'LOCATIONS_NOT_FOUND'
		},
		LOCATION_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Unable to get location',
			type: 'LOCATION_NOT_FOUND'
		},
		LOCATION_NOT_UPDATED: {
			statusCode: 304,
			customMessage: 'Unable to update location',
			type: 'LOCATION_NOT_UPDATED'
		},
		LOCATION_NOT_DELETED: {
			statusCode: 400,
			customMessage: 'Unable to delete location',
			type: 'LOCATION_NOT_DELETED'
		},
		LOCATION_LIMIT_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Unable to get location count',
			type: 'LOCATION_LIMIT_NOT_FOUND'
		},
		LOCATION_LIMIT_EXCEEDED: {
			statusCode: 403,
			customMessage: 'Location limit reached. Upgrade your plan',
			type: 'LOCATION_LIMIT_EXCEEDED'
		},
		ACTIVE_LOCATION_COUNT_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Acitve locations count not found',
			type: 'ACTIVE_LOCATION_COUNT_NOT_FOUND'
		},
		INVALID_LOCATION_ID: {
			statusCode: 401,
			customMessage: 'Invalid Location Id',
			type: 'INVALID_LOCATION_ID'
		},
		INVALID_LOGO_DIM: {
			statusCode: 401,
			customMessage: 'Please upload logo of size 512 * 512',
			type: 'INVALID_LOGO_DIM'
		},
		HOST_CONTENT_NOT_UPDATED: {
			statusCode: 304,
			customMessage: 'Unable To Update Host Notification Content',
			type: 'HOST_CONTENT_NOT_UPDATED'
		},
		HOST_CONTENT_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Host Notification Content Not Found',
			type: 'HOST_CONTENT_NOT_FOUND'
		},
		HOST_CONTENT_NOT_DELETED: {
			statusCode: 400,
			customMessage: 'Host Notification Content Not Deleted',
			type: 'HOST_CONTENT_NOT_DELETED'
		},
		VISITOR_CONTENT_NOT_UPDATED: {
			statusCode: 304,
			customMessage: 'Unable To Update Visitor Notification',
			type: 'VISITOR_CONTENT_NOT_UPDATED'
		},
		VISITOR_CONTENT_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'Visitor Notification Content Not Found',
			type: 'VISITOR_CONTENT_NOT_FOUND'
		},
		INVITEE_NOT_FOUND: {
			statusCode: 404,
			customMessage: 'No invitee found',
			type: 'INVITEE_NOT_FOUND'
		},
		LEAD_NOT_CREATED: {
			statusCode: 400,
			customMessage: 'Unable to create lead',
			type: 'LEAD_NOT_CREATED'
		},
		VISITOR_CONTENT_NOT_DELETED: {
			statusCode: 400,
			customMessage: 'Host Notification Content Not Deleted',
			type: 'VISITOR_CONTENT_NOT_DELETED'
		},
		SMS_COUNT_NOT_UPDATED: {
			statusCode: 304,
			customMessage: 'Unable to update sms count',
			type: 'SMS_COUNT_NOT_UPDATED'
		}
	},
	SUCCESS: {
		CREATED: {
			statusCode: 201,
			customMessage: 'Created Successfully',
			type: 'CREATED'
		},
		DEFAULT: {
			statusCode: 200,
			customMessage: 'Success',
			type: 'DEFAULT'
		},
		UPDATED: {
			statusCode: 200,
			customMessage: 'Updated Successfully',
			type: 'UPDATED'
		},
		LOGOUT: {
			statusCode: 200,
			customMessage: 'Logged Out Successfully',
			type: 'LOGOUT'
		},
		DELETED: {
			statusCode: 200,
			customMessage: 'Deleted Successfully',
			type: 'DELETED'
		},
		DISABLE_SUCCESS: {
			statusCode: 200,
			customMessage: 'Manager disabled successfully',
			type: 'DISABLE_SUCCESS'
		},
		ENABLE_SUCCESS: {
			statusCode: 200,
			customMessage: 'Manager enabled successfully',
			type: 'ENABLE_SUCCESS'
		}
	}
};

_appConstant.notificationMessages = {
	sendVerificationCode: {
		emailSubject: 'Please verify your email to use Vizitor'
		//emailMessage: 'Please click the following link to verify your email:<br><br><a href = "http://localhost:3000/company/getToken/{{accessToken}}">Verify Email!</a> '
	},
	notifySuperAdmin: {
		emailSubject: 'New Company Registration',
		emailMessage: '<h4><u>Company Details:</u></h4>Email: {{email}}<br>Name: {{name}}<br>Mobile: {{phoneNo}}<br>Company Name: {{companyName}}<br>Registration Date: {{registrationDate}}<br>Country: {{country}}<br>Category: {{category}}<br>Platform: {{platform}}'
	},
	forgotPassword: {
		emailSubject: 'Reset your pasword',
		emailMessage: 'Please click the following link to reset your password:<br><br><a href = "http://localhost:3000/company/getToken/{{token}}">Reset Your Password!</a> '
	},
	generateOtp: {
		emailSubject: 'One Time Password',
		emailMessage: 'Dear {{name}}, <br><br>  Your One Time Password (OTP) is <strong>{{generatedOTP}}</strong>'
	},
	sendInvite: {
		emailSubject: 'Invitation From Vizitor',
		emailMessage: 'Hi {{visitorName}}, <br><br> You are invited to visit our comapany at <strong>{{date}}.'
	},
	sendNdaToAdmin: {
		emailSubject: 'NDA pdf'
	},
	sendHostNotification: {
		emailSubject: 'New Visitor is here to see you',
		emailMessage: '<b>{{visitorName}} is here to see you'
	},
	sendPaymentConfirmation: {
		emailSubject: 'Subscription extended',
		emailMessage: 'Your company {{companyName}} has been successfully subscribed until {{expiryDate}}'
	},
	sendContactDetails: {
		emailSubject: 'Vizitor - New User Contacted',
		emailMessage: '<b>{{name}}</b> has contacted on vizitorapp <br>Email Id: <b>{{email}}</b><br>PhoneNo: <b>{{phoneNo}}</b><br>Message: <b>{{message}}</b>'
	},
	sendReferral: {
		emailSubject: 'Refer & Earn for every successful signup',
		emailMessage: 'Please signup using Promo Code: {{promoCode}} to earn free credits'
	},
	sendercerditsEarned: {
		emailMessage: 'Earned 1 month subscription',
		emailSubject: 'Congrats! You have earned 1 month subscription'
	},
	receiverCreditsEarned: {
		emailSubject: 'Earned 1 month subscription',
		emailMessage: 'Congrats! You have earned 1 + 1 month subscription'
	},
	subscriptionReminder: {
		emailSubject: 'Vizitorapp Subscription Reminder',
		emailMessage: 'Your subscription is going to end on {{expiryDate}}.<br>Recharge before {{expiryDate}} to continue services of vizitor app'
	},
	sendEmailVerificationReminder: {
		emailSubject: 'Hi from Vizitor',
		emailMessage:
			'Hi {{name}},<br><br>Thanks for choosing Vizitor application. We hope to provide you with all the facilities you need. I just noticed that your account has not been verified, in case you are facing any issue while verifying your account just let me know. I would be really happy to assist you.<br><br>Feel free to contact me anytime.<br><br>Regards,<br><br>Gurmandeep Kaur<br>Digital Marketing Intern<br>Skype id: gurmandeep.kaur'
	},
	visitorCheckoutEmail: {
		emailSubject: 'Thanks For visit',
		emailMessage: '{{visitorName}}. Thanks for visit'
	}
};

_appConstant.smsMessages = {
	sendHostNotification: {
		message: '{{hostName}} you have a visitor {{visitorName}} checked-in at the reception desk.'
	},
	secondHostNotification: {
		message: '{{hostName}} you have a visitor {{visitorName}} checked-in at the reception desk.'
	},
	sendWelcomeNotification: {
		message: '{{visitorName}} welcome to {{companyName}}. Hope you have a pleasant day!'
	},
	sendOTPToVisitor: {
		message: '{{OTP}} is the OTP. Enter the same to checkIn.'
	},
	sendInvite: {
		message: 'Hey {{Name}}! You have been invited to visit {{companyName}} on {{date}}. {{authorizationCode}} is your authorization code.'
	},
	sendThankingMessage: {
		message: 'Hey {{visitorName}}! Thanks for visiting {{companyName}}.'
	},
	sendHostCheckOutMessage: {
		message: 'Hey {{hostName}}! {{visitorName}} has checked-out at ({{time}}) GMT.'
	},
	sendVisitorApprovalNotification: {
		message: 'Come In {{visitorName}}.You are approved. {{text}}'
	},
	sendVisitorDisapprovalNotification: {
		message: 'Sorry {{visitorName}}.You are disapproved. {{text}}'
	}
};

module.exports = _appConstant;
