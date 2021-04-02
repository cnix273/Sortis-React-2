const temp_api_key = `0ec0de3b69ca8aadd03c3999a91e0ab2-us1`;
const temp_memeber_list_id = `78ad08cb3d`;

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
        url: `https://us1.api.mailchimp.com/3.0/lists/${temp_memeber_list_id}`,
        headers: {
            // 'Authorization': `anystring ${process.env.MAILCHIMP_API_KEY}`,
            'Authorization': `anystring ${temp_api_key}`,
            'Content-Type': 'application/json'
        },
        data: newJSON
    }
    return newMailConfig; 
}