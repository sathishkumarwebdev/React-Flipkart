import {productClient} from "./client"

const productEndPoint = "/auth/me";


    export const getProducts=()=>{

          productClient.get(productEndPoint, {
            headers: {
              "Content-Type": "application/json",
            },
          });
    }
  
