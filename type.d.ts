export interface Video {
    caption: string;
    video: {
        asset: {
            _id: string;
            url: string;
        };
    };
    _id: string;
    postedBy: {
        _id: string;
        image: string;
        username: string;
    };
    likes: {
        postedBy: {
            _id: string;
            username: string;
            image: string;
        };
    }[];
    comments: {
        comment: string;
        _key: string;
        postedBy: {
            _id: string;
            image: string;
            username: string;
        };
    }[];
    useId: string;
}