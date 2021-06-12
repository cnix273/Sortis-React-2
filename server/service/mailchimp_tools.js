const temp_api_key = process.env.MAILCHIMP_API;
const temp_memeber_list_id = process.env.MAILCHIMP_AUDIENCE_ID;

module.exports = (object) => {
    const newMembers = {
        members: [
            {
                email_address: `${object.maillistInfo.EmailAddress}`,
                status: "subscribed",
                merge_fields: {
                    FNAME: `${object.maillistInfo.FirstName}`,
                    LNAME: `${object.maillistInfo.LastName}`            
                }
            }
        ]
    };

    const newJSON = JSON.stringify(newMembers);

    const newMailConfig = {
        method: 'post',
        // url: `https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_MEMBER_LIST_ID}/`,
        url: `https://us6.api.mailchimp.com/3.0/lists/${temp_memeber_list_id}`,
        headers: {
            // 'Authorization': `anystring ${process.env.MAILCHIMP_API_KEY}`,
            'Authorization': `anystring ${temp_api_key}`,
            'Content-Type': 'application/json'
        },
        data: newJSON
    }
    return newMailConfig; 
}