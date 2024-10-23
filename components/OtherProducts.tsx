import React from 'react'

const Products = [
   {product: "ShaNet Shear Butter hair cream."},                                          
   {product: "ShaNet Shear Butter body Lotion."},                                
   {product: "ShaNet ANTIDANRUFF HAIR cream."},                            
   {product: "ShaNet Body Jell."},                
   {product: "ShaNet Tablet Soap."},            
    {product: "ShaNet Liquid detergent."},      
     {product: "ShaNet powdered detergent."},                                   
     {product: "ShaNet Perfumes."},                
      {product: "ShaNet Toilet wash."},          
     {product: "ShaNet tiles cleaner."},
     {product: "ShaNet supper Bleach."},                     
     {product: "ShaNet Airfreshners."},          
     {product: "ShaNet fragrance candles."},                                       
     {product: "ShaNet Tablet Airfreshners."},                               
      {product: "ShaNet Rust stain remover."},                                     
      {product: "ShaNet  ink stain remover."},                                    
     {product: "ShaNet  blood stain  remover."},                                      
     {product: "ShaNet  mucour  stain remover"},                                      
     {product: "ShaNet  Blood Stain Remover."},                                      
     {product: "ShaNet  Liquid  Starch"},        
     {product: "ShaNet  fabrique odorant"},                                       
     {product: "ShaNet  whitening  Lotion"},                                        
     {product: "ShaNet  swimming  pool water treatment."},             
     {product: "ShaNet  power flame."},            
     {product: "ShaNet  scurry powder"},      
     {product: "ShaNet Liquid carwash."},     
     {product: "STEFLUX THINNER."},             
    {product: "STEFLUX STRONG BOND."}
]

const OtherProducts = () => {
  return (
    <section>
        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start p-4">
              {Products.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.product}
                  </p>
                )
              })}
            </div>
    </section>
  )
}

export default OtherProducts