
function showProductDetails(p){
     return `  <div class="showContainer">
     <div class="col2">
         <img src=${p.imgUrl}  />
     </div>
     <div class="col1">
          <div class="desBlock">
              <div class="row">
                  <h4>${p.name}</h4>
                  
              </div>
              <p>
              <b>Descripation :-</b><br/>${p.des} 
              
              </p>
          </div>
     </div>
     <div class="col1">
        <div class="action">
            <div class="row">
                <h4>Price :</h4>
                <h4>&#8377; ${p.price}</h4>
            </div>
            <div class="row">
                <p style="margin-top: -3px;">qty</p>
                <div>
                   <select>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                   </select>
                </div> 
            </div>
            <button> book Now</button>
        </div>
    </div>
   </div>`;
}
const products=[{
    id:"1",
    name:"Bring The Outside In With These Design Trends",
    price:768,
    des:"What better way to celebrate green than by adding house plants?! Your living room will be the perfect setting for your indoor haven of greenery and freshness in the form of houseplants. Spider plants, aloe vera are only a few of the options when it comes to indoor greenery. Plants have multiple benefits– they invite the outdoors in, they make the space look gorgeous, and they purify the air. ",

    
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2020/01/21002844/living-room-trends.jpg"
},
{
    id:"2",
    name:"A Luxurious Bedroom In Green And Red",
    price:612,
    des:"A vibrant combination like green and red might sound a little extravagant to you. But if designed with precision and expertise, it can take your red bedroom design to a whole new level. The magic trick is to use ample accent lights, as shown in the image. Keep minimal furniture and light colour ceiling and curtains to cut the monotony of dark colours. Opt for a glass door wardrobe for maximum reflection of lights. You can use stripped lights on the accent wall to beautify the space and highlight your green and red bedroom walls.",
    productcontant:" -12 Red Roses in Red Paper Packing",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2021/05/25174736/design-cafe-interior-designers-in-hsr-layout.jpg"
},
{
    id:"3",
    name:"An American Themed Bedroom In Blue And Red ",
    price:1117,
    des:"Thinking of lending an international-themed design for your bedroom interiors? This American themed interior design with red and blue bedroom walls will melt your heart. The red accent wall adds character to the space without being overpowering. The red and blue in the American flag, blue pillows, bed sheets, and curtains compliments the colour scheme without making it too uniform. This design is perfect for kids, teenagers and adults too.",
    productcontant:"  20 Yellow Roses - A Basket  - Seasonal Green Fillers ",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2021/07/07183350/tile-kitchen-countertops.jpg"
},
{
    id:"4",
    name:"Embrace Nature, Embrace Wood ",
    price:73256,
    des:"One cannot imagine using natural materials and not talking about wood. The use of wood will never go old as a home interior design idea for the living room. In keeping with the “going green” mantra, explore the usage of recycled wood in the coming year. Darker tones of wood will be favoured over lighter tones – another design trend we totally dig. You can use wood in multiple ways – for flooring, on the ceiling, for making living room furniture and even with accessories.",
    productcontant:" Flowers : 25 Red Roses & 25 Yellow Carnation  --  S Alphabetic Arrangement   ---  Seasonal Green Filler ",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2020/01/21002846/latest-living-room-trends.jpg"
},

{
    id:"5",
    name:"Latest Colour Combination For Living Room Involving ",
    price:6989,
    des:"The combination of white and green will surely appeal to a wide range of people. The green works to break the monotony of white on the walls, floor, furniture and decor. The rug and the statement chair can be of green colour. You can also place indoor plants here and there. It allows you to spend time caring for them. Since we are spending much of our time indoors, green plants will enable us to be near nature.",
    productcontant:"- Bunch of 50 mixed colors roses  - Wrapped in Red Paper   - Tied with White Ribbon",
   imgUrl:"https://media.designcafe.com/wp-content/uploads/2021/05/21170349/latest-living-room-colours-involving-pink-and-black.jpg"
},
{
    id:"6",
    name:"Bedroom Design Ideas" ,
   price:44399,
    des:"Red has always been the colour of love, passion, romance and strong emotions. But to create the perfect red bedroom can be pretty tricky. So if you are looking for some inspiration to transform your bedroom into a romantic haven, we have the ideal solution for you. Here in this blog we break down some red bedroom designs so you can choose the perfect red colour bedroom for your home. From vibrant and romantic red bedrooms to minimalistic red accents and different colour combinations that blend together seamlessly. We have every answer to your questions about red bedroom design ideas.",
   // productcontant:" 4 Pink Roses, 2 Red Roses, 2 Yellow Roses, 2 White Roses",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2021/05/25182917/space-saving-beds-for-small-rooms.jpg"
},
  
{
    id:"7",
    name:"Curves Are Back In Fashion",
    price:21899,
    des:"Looking for designer living room furniture that will soon become the envy of your guests? Consider discarding the straight and strict for curves. When choosing seating for your living room, opt for sofas with rounded backs and sides and round-backed chairs. Their soft and elegant curves will help you create the cosy harmonious look in no time at all.",
    productcontant:"- 12 Yellow Roses   - A Glass vase     - Seasonal Green Filler",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2020/01/21002906/living-room-furniture-trends.jpg"
},
{
    id:"8",
    name:"The Calm Connection Blue ",
    price:34509,
    des:"A list of design trends for 2021 will be incomplete without the mention of classic blue. This shade of blue has been named Pantone’s colour of the year and it brings with it confidence and connection. Inject some calm into your living room with the aid of classic or navy blue. From walls to rugs, from sofas to curtains, they can also be a canvas for your experiments in blue.   ",

  
    productcontant:"- 10 Mix Gerberas - Orange Paper Packing",
   imgUrl:"https://media.designcafe.com/wp-content/uploads/2020/01/21002908/living-room-decor-trends.jpg"
},
{
    id:"9",
    name:"The Play Of Black And White",
   // price:699,
    des:"2021 seems to be the year of making bold statements and this gets reflected in the latest decorating trends for living rooms. Nothing draws attention like contrasting colours that are cleverly juxtaposed. And when one thinks of contrasting colours, the classic pair of black and white immediately comes to mind. Play with effects of dark and light, of yin with yang to create a stunning effect in your living room. For a happy marriage between the colours, don’t forget to balance them out.",
    productcontant:"-  Bouquet of 12 White Carnations",
   imgUrl:"https://media.designcafe.com/wp-content/uploads/2020/01/21002858/living-room-design-trends.jpg"
},
{
    id:"10",
    name:"Go Stylish With Green",
  //  price:856,
    des:"2021 will see a literal interpretation of the ‘going green’ trend as the colour green makes its way to the latest decorating trends for living rooms. Splash out olive green on the walls or opt for wallpaper with a rich leaf pattern. Adorn your walls with art in shades of green, reminiscent of nature. Don’t want to limit it to walls? Accents of green in the soft furnishings will also do the trick.",
    productcontant:"- 17 Mix Gerberas   strong>- Seasonal Green Fillers",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2020/01/21002849/latest-decorating-trends-for-living-rooms.jpg"
},

{
    id:"11",
    name:"Multiple Shades Of Blue living room   ",
  //  price:699,
    des:"The colour blue has multiple shades, and each one has a different impact on your mood. How about putting them all together and coming up with something marvellous? When it comes to the best trending colour for the Indian living room, trends say that painting your walls with a light blue colour gives a very relaxed and soothing vibe. Add a rug that is a shade deeper and opt for upholstery in dark blue. Dark blue makes you feel bold and energetic",
    productcontant:"- 12 Pink Roses - 1 Basket  - Seasonal Green Filler",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2021/05/21170707/latest-colour-schemes-for-living-rooms-involving-white-and-green.jpg"
},
{
    id:"12",
    name:"Latest Colour Combination For Living Room ",
    price:69899,
    des:"The combination of salmon pink and black is something not many can think of. For a bold statement, multiple homeowners have opted for this combination, which is trending. Now, it depends on you to incorporate them together and in different forms. Experts might suggest black walls and pink upholstery. Curtains or rugs, too, can be in pink. With its feminine touch, it makes your living room attractive. The room can otherwise be spartan. A quiet conversation with your loved ones or simply gazing out of the window allows a perfect setting",
    productcontant:"- 15 Mix Roses    - 1 Handle basket",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2021/05/21165752/latest-colour-combination-for-living-room-involving-grey-and-orange.jpg"
},
{
    id:"13",
    name:"A Blue L-Shaped Modular Kitchen With A Tiled",
    price:69879,
    des:"This modular kitchen has floral printed tiles that make this space more charming. Inspired by the colours of the sea, this kitchen interiors is soothing to look at and spacious to work in with its clever storage solutions.",
    productcontant:"- 30 Pink Roses and 5 White Asiatic Lilies   - A Square Glass Vase",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2020/11/09145041/l-shaped-modular-kitchen-design.jpg"
},
{
    id:"14",
    name:"An L-shaped Home Office With An Attached Bookshelf",
    price:69879,
    des:"This home office has been set up by the window to craft a creative workspace at home. The space with the L-shaped desk and open and closed shelves is bright and cheerful and provides ample storage options as well",
    productcontant:"-50 White Roses     - Tied with White Ribbon",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2021/04/26164735/l-shaped-home-office-images-with-attahced-bookshelf.jpg"
},
{
    id:"15",
    name:"A Yellow and White Themed Home Office Design",
    price:69879,
    des:"This home office exudes a retro vibe. A yellow accent chair is paired with white desk both of which are accessible to people of any height. The bookcase with glass-front doors help you view and reach your files and folders easily..",
    productcontant:"Flower : 50 Red Roses    A Heart Shape Arrangement   Seasonal Green Filler   A designer wood basket   A six inch teddy",
    imgUrl:"https://media.designcafe.com/wp-content/uploads/2021/04/26163012/yellow-and-white-themed-home-office-design.jpg"
},


];


let id=document.location.search.split("=")[1];
const sp=products.find(function(p){ if(p.id==id){ return p}});
const productHolder=document.createElement('div');
      document.body.appendChild(productHolder);
      productHolder.innerHTML=showProductDetails(sp);

      
     const footerHolder=document.createElement('div');
              document.body.appendChild(footerHolder);
              footerHolder.innerHTML=`
               <div class="footer" style="background-color: white;padding: 10px;">
              <p style="text-align: center;">All copy right resversed with <a href="product.html">Newex Design</a></p>
              </div>
              `;
              let cartItem=localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[];
              const counter=document.querySelector('.counter');
              counter.innerHTML=cartItem.length;

