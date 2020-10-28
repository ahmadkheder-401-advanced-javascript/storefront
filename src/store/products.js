/* eslint-disable no-case-declarations */
let initialState = {
    products: [
        {
            category: 'ELECTRONICS',
            name: ' Fridge',
            description: 'RIPHAT ELECTRONICS CO.LTD',
            inventoryCount: 100,
            price: '$1000',
            image: 'https://1.bp.blogspot.com/-rYdTbpmM570/TuSrvfUBgfI/AAAAAAAAACk/k9G-knO4PVU/s1600/lg_electronics_announces_hdtv_fridge-1%255B1%255D.jpg',
          },
          {
            category: 'ELECTRONICS',
            name: ' Coffee Maker',
            description: 'Mainstays 5 Cup Black Coffee Maker with Removable Filter Basket',
            inventoryCount: 100,
            price: '$50',
            image: 'https://www.procureshop.com/wp-content/uploads/2020/05/Cofee-maker.jpeg',
          },

          {
            category: 'FOOD',
            name: 'avocado',
            description: 'avocado piece ',
            inventoryCount: 100,
            price: '$12',
            image: 'https://www.jessicagavin.com/wp-content/uploads/2019/04/how-to-cut-an-avocado-12-1200-500x375.jpg',
          },
          {
            category: 'FOOD',
            name: 'candy',
            description: 'candies',
            inventoryCount: 100,
            price: '$7',
            image: 'https://www.mediashower.com/img/BF771BB8-9FA6-11E9-9417-4880D1DBB55F/colorful%20candy%20assortment_600x.jpg',
          },

    ],
    results: [],
};
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'choose':
            let products = state.products;
            let results = state.products.filter((item,idx)=> {
                return item.category === payload.name;
            });
            return { results, products };

        default:
            return state;
    }

};

// action
export const chooseList = (clicked) => {
    return {
        type: 'choose',
        payload: clicked,
    };
};
