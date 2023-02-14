export const getAllPostQuery = () => {
    const query = `*[_type == "post"] | order(_createdAt desc){
        _id,
        caption,
        video {
            asset->{
                _id,
                url
            }
        },
        userId,
        postedBy->{
            _id,
            username,
            image
        },
        likes,
        comments[]{
            comment,
            _key,
            postedBy->{
                _id,
                username,
                image
            },
        }
    }`;

    return query;
}

export const allUsersQuery = () => {
    const query = `*[_type == "user"]`;

    return query;
}