import { Injectable } from '@angular/core';
import { product } from './accommodation';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor() { }
  product:product[]= [
    {
      productName: "Sri Venkateswara Dharmasala",
      productLocation: "Tirumala",
      productType: "Dharmasala",
      productImage:"https://media-cdn.tripadvisor.com/media/photo-s/18/81/84/8e/hotel-raj-park-tirupati.jpg",
      productPrice: "Varies",
      productRating: 4.3,
      product:"rooms",
      productEdit:false
  },
  {
      productName: "Srinivasam Complex",
      productLocation: "Tirumala",
      productType: "Complex",
      productImage:"https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_522,w_5000,h_2811,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/raj-park-hotel---tirupati/twin_beds_in_superior_rooms_in_Tirupati",
      productPrice: "Varies",
      productRating: 4.2,
      product:"rooms",
      productEdit:false
    
  },
//   {
//       productName: "TTD Guest House",
//       productLocation: "Tirumala",
//       productType: "Guest House",
//       productImage:"https://images.oyoroomscdn.com/uploads/hotel_image/100487/a2cf6d4b9e532f87.jpg",
//       productPrice: "Varies",
//       productRating: 4.5,
//       product:"rooms",
//       productEdit:false
    
//   },
//   {
//     productName: "TTD Guest House",
//     productLocation: "Tirumala",
//     productType: "Guest House",
//     productImage:"https://assets.thehansindia.com/h-upload/2019/11/07/233125-rooms.jpg",
//     productPrice: "Varies",
//     productRating: 4.5,
//     product:"rooms",
//     productEdit:false
// },
// {
// productName: "TTD Guest House",
// productLocation: "Tirumala",
// productType: "Guest House",
// productImage:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/317262688.jpg?k=4b62aa099401bc14b58bacf33d515e92f13b20480a29b05852b5991cb2938af6&o=&hp=1",
// productPrice: "Varies",
// productRating: 4.5,
// product:"rooms",
// productEdit:false
// },
// {
//   productName: "TTD Guest House",
//   productLocation: "Tirumala",
//   productType: "Guest House",
//   productImage:"https://pix10.agoda.net/hotelImages/624/624430/624430_15080518270033715619.jpg?ca=5&ce=1&s=702x392",
//   productPrice: "Varies",
//   productRating: 4.5,
//   product:"rooms",
//   productEdit:false
//   },
//   {
//     productName: "TTD Guest House",
//     productLocation: "Tirumala",
//     productType: "Guest House",
//     productImage:"https://pix10.agoda.net/hotelImages/624/624430/624430_14043016380019265843.jpg?ca=2&ce=1&s=702x392",
//     productPrice: "Varies",
//     productRating: 4.5,
//     product:"rooms",
//     productEdit:false
//     },
//     {
//       productName: "TTD Guest House",
//       productLocation: "Tirumala",
//       productType: "Guest House",
//       productImage:"https://q-xx.bstatic.com/xdata/images/hotel/840x460/403043488.jpg?k=8aea8b2a6cd027e51ede1b5b8a207f322eae8ea44f143cbce908129d8f7b0fa7&o=",
//       productPrice: "Varies",
//       productRating: 4.5,
//       product:"rooms",
//       productEdit:false
//       },
//       {
//         productName: "TTD Guest ",
//         productLocation: "Tirumala",
//         productType: "Guest House",
//         productImage:"https://q-xx.bstatic.com/xdata/images/hotel/840x460/403045315.jpg?k=40bfd4405a11a285d70b306c7c2fff68fea2e04477dc84527b8dcd93262ae5e7&o=",
//         productPrice: "Varies",
//         productRating: 4.5,
//         product:"rooms",
//         productEdit:false
//         },
//         {
//           productName: "TTD Guest Ho",
//           productLocation: "Tirumala",
//           productType: "Guest House",
//           productImage:"https://pix10.agoda.net/hotelImages/33224686/-1/7408d4aca9b0b49f3e7697bdea331957.jpg?ce=0&s=702x392 ",
//           productPrice: "Varies",
//           productRating: 4.5,
//           product:"rooms",
//           productEdit:false
//           },
//           {
//             productName: "TTD Guest House",
//             productLocation: "Tirumala",
//             productType: "Guest House",
//             productImage:"https://pix10.agoda.net/hotelImages/162/1621116/1621116_17031021530051483883.jpg?ca=13&ce=1&s=702x392",
//             productPrice: "Varies",
//             productRating: 4.5,
//             product:"rooms",
//             productEdit:false
//             },
//             {
//               productName: "TTD Guest House",
//               productLocation: "Tirumala",
//               productType: "Guest House",
//               productImage:"https://pix10.agoda.net/hotelImages/1158809/-1/0a8840cf2003cd6c3535f6c6f944c3b4.jpg?ca=9&ce=1&s=702x392",
//               productPrice: "Varies",
//               productRating: 4.5,
//               product:"rooms",
//               productEdit:false
//               }
{
  productName: "Divya Shree Guest House",
  productLocation: "Tirumala",
  productType: "Guest House",
  productImage:"https://images.oyoroomscdn.com/uploads/hotel_image/100487/a2cf6d4b9e532f87.jpg",
  productPrice: "Varies",
  productRating: 4.4,
  product: "rooms",
  productEdit: false
},
{
  productName: "Sri Balaji Residency",
  productLocation: "Tirumala",
  productType: "Residency",
  productImage:"https://assets.thehansindia.com/h-upload/2019/11/07/233125-rooms.jpg",
  productPrice: "Varies",
  productRating: 4.3,
  product: "rooms",
  productEdit: false
},
{
  productName: "Hilltop Homestay",
  productLocation: "Tirumala",
  productType: "Homestay",
  productImage:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/317262688.jpg?k=4b62aa099401bc14b58bacf33d515e92f13b20480a29b05852b5991cb2938af6&o=&hp=1",
  productPrice: "Varies",
  productRating: 4.6,
  product: "rooms",
  productEdit: false
},
{
  productName: "Tirumala Cottages",
  productLocation: "Tirumala",
  productType: "Cottage",
  productImage:"https://pix10.agoda.net/hotelImages/624/624430/624430_15080518270033715619.jpg?ca=5&ce=1&s=702x392",
  productPrice: "Varies",
  productRating: 4.5,
  product: "rooms",
  productEdit: false
},
{
  productName: "Sai Sadan Guest House",
  productLocation: "Tirumala",
  productType: "Guest House",
  productImage:"https://q-xx.bstatic.com/xdata/images/hotel/840x460/403045315.jpg?k=40bfd4405a11a285d70b306c7c2fff68fea2e04477dc84527b8dcd93262ae5e7&o=",
  productPrice: "Varies",
  productRating: 4.2,
  product: "rooms",
  productEdit: false
},
{
  productName: "Tirupati Bliss Resort",
  productLocation: "Tirumala",
  productType: "Resort",
productImage:"https://q-xx.bstatic.com/xdata/images/hotel/840x460/403043488.jpg?k=8aea8b2a6cd027e51ede1b5b8a207f322eae8ea44f143cbce908129d8f7b0fa7&o=",
 
  productPrice: "Varies",
  productRating: 4.7,
  product: "rooms",
  productEdit: false
},
{
  productName: "Sri Venkateswara Lodge",
  productLocation: "Tirumala",
  productType: "Lodge",
  productImage:"https://pix10.agoda.net/hotelImages/33224686/-1/7408d4aca9b0b49f3e7697bdea331957.jpg?ce=0&s=702x392 ",
  productPrice: "Varies",
  productRating: 4.2,
  product: "rooms",
  productEdit: false
},
{
  productName: "Srinivasam Deluxe Rooms",
  productLocation: "Tirumala",
  productType: "Deluxe Rooms",
  productImage:"https://pix10.agoda.net/hotelImages/162/1621116/1621116_17031021530051483883.jpg?ca=13&ce=1&s=702x392",
  productPrice: "Varies",
  productRating: 4.6,
  product: "rooms",
  productEdit: false
},
{
  productName: "Sai Krishna Guest House",
  productLocation: "Tirumala",
  productType: "Guest House",
  productImage:"https://pix10.agoda.net/hotelImages/1158809/-1/0a8840cf2003cd6c3535f6c6f944c3b4.jpg?ca=9&ce=1&s=702x392",
  productPrice: "Varies",
  productRating: 4.4,
  product: "rooms",
  productEdit: false
}


];
getproducts(){
  return of (this.product);
}
addproduct(product:product){
  this.product.push(product)
}
deleteproduct(p:product){
  let res=this.product.findIndex(p=>p.productName==p.productName);
  this.product.splice(res,1);
}
updateProduct(p:product) {
  const index = this.product.findIndex(product => product.productName === p.productName);
  if (index !== -1) {
    this.product[index] = p;

  }
 

}
}
