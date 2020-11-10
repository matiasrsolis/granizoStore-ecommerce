const { default: Axios } = require("axios");
const { CART_ADD_ITEM } = require("../constants/cartConstants");

const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const { data } = await Axios.get("/api/products/");
        const filtrado = data.filter(x => x._id == productId);
        dispatch({ 
            type: CART_ADD_ITEM, 
            payload: {
                product: filtrado[0]._id,
                name: filtrado[0].name,
                image: filtrado[0].image,
                price: filtrado[0].price,
                countInStock: filtrado[0].countInStock,
                qty
            }
        });

        console.log(filtrado)

        // const { data } = await Axios.get("/api/products/"+ productId);
        // dispatch({ 
        //     type: CART_ADD_ITEM, 
        //     payload: {
        //         product: data._id,
        //         name: data.name,
        //         image: data.image,
        //         price: data.price,
        //         countInStock: data.countInStock,
        //         qty
        //     }
        // });
    }
    catch (error) {

    }
}

export { addToCart }