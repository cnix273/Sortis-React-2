const YOUR_HUBSPOT_API_KEY = "32583a2e-b128-4390-b87a-8e622366aa06";

module.exports = (searchInput) => {
    let options = {
        method: 'POST',
        url: "https://api.hubapi.com/crm/v3/objects/contacts/search",
        qs: {hapikey: YOUR_HUBSPOT_API_KEY},
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: {
            query: searchInput,
            properties: [ 
                "firstname", 
                "lastname",
                "jobtitle",
                "phone",
                "email",
                "address", 
                "state", 
                "city",
                "zip",
                "contact_type",
                "cs_do_not_call",
                "cs_do_not_email",
                "cs_is_active",
                "cs_is_accredited",
                "cs_is_investor",
                "cs_average_investment_amount",
                "cs_is_registered"
            ],
        },
        json: true
    };
    return options;
}