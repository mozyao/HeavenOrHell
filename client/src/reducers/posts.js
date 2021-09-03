export default (posts=[], action) => {
    switch ( action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_NEW':
            return posts;
        default:
            return posts;

    }



}