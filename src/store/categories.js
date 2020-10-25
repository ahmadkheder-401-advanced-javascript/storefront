/* eslint-disable no-unreachable */
let initalState = {
    categories: [
        {
            name: 'Electronices', items: [
                {
                    img: null,
                    title: 'TV',
                    desc: 'see all'
                },
                {
                    img: null,
                    title: 'MacBook',
                    desc: 'do all things'
                }


            ]
        },
        {
            name: 'Food', items: [
                {
                    img: null,
                    title: 'breakfast',
                    desc: 'eat eat eat it'
                },
                {
                    img: null,
                    title: 'lunch',
                    desc: 'eat it'
                }



            ]
        }
    ]
    // totalVotes: 0
};

// reducer
export default (state = initalState, action) => {

    let { type, payload } = action;
    switch (type) {
        case 'Electronices':

            let electronices = state.electronices.map((item, idx) => {
                return item;

            });
            return { electronices };

        case 'Food':

            let food = state.food.map((item, idx) => {
                return item;

            });
            return { food };


        default:
            return state;
    }
}
// }//////////////////////////////ERROR
// actions
export const electronices = (name) => {
    return {
        type: 'Electronices',
        payload: name
    }
}

export const food = (name) => {
    return {
        type: 'Food',
        payload: name
    }
}
