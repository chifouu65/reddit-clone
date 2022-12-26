/*
*
*
* const COMMUNITY = {
    id: "communityId",
    users: ['userId1', 'userId2'],
}

const USER = {
    id: "userId",
    communities: ['communityId1', 'communityId2'],
}

*/
const USER = {
    id: "userId",

    communities: [
        {
            communitiesId: "communityId1",
        },
        {
            communitiesId: "communityId2",
        },
    ]
}

const COMMUNITY = {
    id: "communityId",
    members: ['userId1', 'userId2']
}