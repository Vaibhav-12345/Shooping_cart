import { useState } from "react";


const Cart = ({cart,removeCartId,removeAllCart}) => {
//  coupon code 
const [coupon,setCoupon]=useState('')
const [discout,setDiscount]=useState(0)

  const [quantity,setQuantity]=useState(
    cart.reduce((acc,curr)=>{
      return {...acc,[curr.id]:1}
    },{})
  )

  const handleQuantityChange=(id,data)=>{
    setQuantity((prevQuantity)=>{
       const newQuantity =Math.max(prevQuantity[id]+data,1);
       return {...prevQuantity,[id]:newQuantity}
    })
  }

  // subTotal 
  const Subtotal=cart.reduce((acc,product)=> acc+product.price*quantity[product.id],0)


  // other cost 
  const gst=Subtotal*0.18;
  const shipping=100;
  // const discout= Subtotal>100 ? 100 :0;
  const totalAmount= Subtotal+gst+shipping-discout

   
  // coupon code apply and remove method define
  const applyCoupon=()=>{
  if(cart.length>0){ // ye main lagay eshliye card add nhi lekin discount add ho ja raha automatic 
    if(coupon.trim()!==''){
      if(coupon=='100Off'){
        setDiscount(100)
      }
      else if(coupon=='200Off'){
        setDiscount(20)
      }else{
        alert('invalid coupon code invalid! enter 100Off')
      }
     }
  }
  }

  const removeCoupon=()=>{
    setDiscount(0)
    setCoupon('')
  }


  return (
    <>

      <div className="lg:grid grid-cols-2 gap-2">
        <div className="p-2  bg-gray-200">
          <div className='container'>
            {cart.map((product) => (
              <div key={product.id} className="p-2">
                <div className='flex justify-between'>
                  <div style={{ width: '30%', height: '30%' }} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <img
                      alt={product.image}
                      src={product.image}
                      className="object-center"
                    />
                  </div>
                  <div style={{ width: '60%', height: '60%' }}>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-black">
                          {product.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                      </div>
                      <h3 className="text-xl text-balck"><i class="fa-solid fa-rupee-sign"></i>Rs: {product.price}</h3>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div className='flex justify-between'>
                        <button onClick={()=> handleQuantityChange(product.id,1)} className="text-white bg-blue-500 p-2 mr-3 rounded ">+</button>
                        <p>Quantity - {quantity[product.id]}</p>
                        <button  onClick={()=> handleQuantityChange(product.id,-1)} className="text-white bg-pink-500 p-2 ml-3 rounded ">-</button>
                      </div>
                    </div>
                    <div className='flex justify-end my-2'>
                      <button onClick={()=>removeCartId(product.id)} className="text-white bg-red-500 p-2 rounded ">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className='flex justify-end my-2'>
              <button onClick={()=>removeAllCart()} className="w-full text-white bg-red-500 p-2 rounded" fullWidth>Remove Cart</button>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 p-5">
          <div className='container'>
            <div className='container'>
              <div className='flex justify-between'>
                <u><h1 className='text-3xl text-center'>Payment Summary</h1></u>
                <div className='coupon-div flex justify-end'>
                  <input type='text' className='p-2' placeholder='Enter Coupon Code' value={coupon} onChange={(e)=>setCoupon(e.target.value)} />
                  <button onClick={applyCoupon} className=" text-white bg-blue-500 p-2 rounded ">Apply</button>
                  <button onClick={removeCoupon} className=" text-white bg-red-500 p-2 rounded ">Remove Coupon</button>
                </div>
              </div>
              <div className='flex p-5'>
                <h1 className='text-l'> SubTotal : </h1>
                <h1 className='ml-4 text-xl'><i class="fa-solid fa-rupee-sign"></i>.{Subtotal}</h1>
              </div>
              <div className='flex p-5'>
                <h1 className='text-l'>GST (18%) : </h1>
                <h1 className='ml-4 text-xl'><i class="fa-solid fa-rupee-sign"></i>. {gst} </h1>
              </div>
              <div className='flex p-5'>
                <h1 className='text-l'>Shipping : </h1>
                <h1 className='ml-4 text-xl'><i class="fa-solid fa-rupee-sign"></i>. {shipping} </h1>
              </div>
              <div className='flex p-5'>
                <h1 className='text-l'>Discount : </h1>
                <h1 className='ml-4 text-xl'>- <i class="fa-solid fa-rupee-sign"></i>. {discout} </h1>
              </div>
              <div className='flex p-5'>
                <strong><h1 className='text-l'>Total Amount : </h1></strong>
                <strong><h1 className='ml-4 text-xl'><i class="fa-solid fa-rupee-sign"></i>. {totalAmount} </h1></strong>
              </div>
            </div>
            <div className='my-2'>
              <button className="w-full text-white bg-green-500 p-2 rounded ">Proceed</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart;