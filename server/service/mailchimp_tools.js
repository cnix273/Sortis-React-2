
module.exports = (object) => {
    const newMembers = {
        members: [
            {
                "email_address": `${object.EmailAddress}`,
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": `${object.FirstName}`,
                    "LNAME": `${object.LastName}`            
                }
            }
        ]
    };

    const newJSON = JSON.stringify(newMembers);

    const newMailConfig = {
        method: 'post',
        url: `https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_MEMBER_LIST_ID}/`,
        headers: {
            'Authorization': `anystring ${process.env.MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json'
        },
        data: newJSON
    }
    return newMailConfig; 
}